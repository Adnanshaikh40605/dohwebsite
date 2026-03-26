"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import Loader from "../component/loader";
import BookingSucessAlert from "../component/booking_success_alert";
import BookingLoader from "../component/booking_loader";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import LocationSearchInput from "../component/PlaceAutoComplete";
import LocalRatesModal from "../component/LocalRatesModal";
import {
  Autocomplete,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tab,
  Tabs,
  Modal,
  Box,
  Typography,
  Button,
} from "@mui/material";
import Head from "next/head";
import dayjs from "dayjs";
import { BsXCircle } from "react-icons/bs";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { MdOutlineArrowForward } from "react-icons/md";
import { AuthContext } from "../context/AuthContext";

const BookingForm = () => {
  const { logout } = useContext(AuthContext)!;
  const [formData, setFormData] = useState({
    booking_from: "Web",
    booking_type: "Local",
    trip_type: "Round",
    request_type: "Normal",
    trip_start_date: "",
    trip_end_date: "",
    trip_time: "",
    car_type: "",
    car_transmission: "",
    lat_long: {
      latitude: "",
      longitude: "",
    },
    pickup_location: "",
    drop_location: "",
    package: "",
    mobile: "",
    address: "",
    outskirt_charge: 0,
  });

  const router = useRouter();
  const [userLatitude, setUserLatitude] = useState(0);
  const [userLongitude, setUserLongitude] = useState(0);
  const [address, setAddress] = useState("");
  const [pickupLocation, setpickupLocation] = useState("");
  const [dropLocation, setdropLocation] = useState("");
  const [extraCharge, setExtraCharge] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorLoginMessage, setErrorLoginMessage] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [tomorrowDate, setTomorrowDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("today");
  const [approximatePrice, setApproximatePrice] = useState(0);
  const [loaderActive, setLoaderActive] = useState(false);
  const [bookLoaderActive, setBookLoaderActive] = useState(false);
  const [bookSucessAlert, setBookSucessAlertActive] = useState(false);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [data, setData] = useState([]);
  const [selectedTripType, setSelectedTripType] = useState("Round");
  const [nightAllowanceCharge, setNightAllowanceCharge] = useState(0);
  const [errors, setErrors] = useState({
    trip_type: false,
    car_type: false,
    package: false,
    pickup_location: false,
    drop_location: false,
    visiting_location: false,
    address: false,
    trip_start_date: false,
    trip_time: false,
    car_transmission: false,
  });

  const dropLocationRef = useRef<HTMLDivElement | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState("");

  const handleErrorModalClose = () => {
    setErrorModalOpen(false);
    setErrorModalMessage("");
  };

  const triggerErrorModal = (message: string) => {
    setErrorModalMessage(message);
    setErrorModalOpen(true);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTripType(newValue);
    setFormData((prevFormData) => ({
      ...prevFormData,
      trip_type: newValue,
    }));
  };

  useEffect(() => {
    const checkToken = async () => {
      setLoaderActive(true);
      const token = localStorage.getItem("token");

      if (!token) {
        router.push(
          `/otp-login?redirect=${encodeURIComponent(window.location.href)}`
        );
        return;
      }

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/check_token/`,
          { token },
          { headers: { "Content-Type": "application/json" } }
        );

        if (response.data && response.data.error === "Invalid token") {
          logout();
          router.push(
            `/otp-login?redirect=${encodeURIComponent(window.location.href)}`
          );
          return;
        }

        if (response.status !== 200) {
          router.push(
            `/otp-login?redirect=${encodeURIComponent(window.location.href)}`
          );
        }
      } catch (error: any) {
        console.error("Error checking token:", error);
        if (error.response && error.response.data && error.response.data.error === "Invalid token") {
          logout();
        }
        router.push(
          `/otp-login?redirect=${encodeURIComponent(window.location.href)}`
        );
      } finally {
        setLoaderActive(false);
      }
    };

    checkToken();
  }, [router, logout]);

  const handleTimeChange = async (newTime: Date | null) => {
    if (newTime) {
      const dateObject = new Date(newTime);

      // Extract hours, minutes, and seconds from the dateObject
      const hours = dateObject.getHours();
      const minutes = dateObject.getMinutes().toString().padStart(2, "0");

      // Check if the time falls in the night allowance window
      const isNightAllowance = hours >= 23 || hours < 6; // 11 PM to 6 AM
      setNightAllowanceCharge(isNightAllowance ? 200 : 0);

      // Formatted time string in HH:MM format
      const formattedTime: string = `${hours
        .toString()
        .padStart(2, "0")}:${minutes}`;

      setFormData((prevFormData) => ({
        ...prevFormData,
        trip_time: formattedTime,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        trip_time: false,
      }));

      setApproximatePrice(calculateApproximatePrice());
    }
  };

  const calculateExtraCharge = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/booking/extra-rate/?pickup_location=${pickupLocation}&drop_location=${dropLocation}`
      );
      const data = await response.json();

      if (response.ok) {
        setExtraCharge(data.extra_charge);
      } else {
        // Handle error, e.g., display an error message
        console.error("Error calculating extra charge:", data.error);
      }
    } catch (error: any) {
      // Handle network errors
      console.error("Network error:", error.message);
    }
  };

  useEffect(() => {
    if (dropLocation) {
      calculateExtraCharge();
    }
  }, [pickupLocation, dropLocation]);

  const handleBookingChange = (e: any) => {
    setSelectedOption(e.target.value);
  };
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [open, setOpen] = useState(false);

  const dropdata = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/booking/combine_data/?location_city=mum`
    );
    setData(response.data);
  };

  useEffect(() => {
    dropdata();
  }, []);
  useEffect(() => {
    // Function to format the current date in 'YYYY-MM-DD' format
    const getCurrentDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };
    // Function to calculate tomorrow's date in 'YYYY-MM-DD' format
    const getTomorrowDate = () => {
      const today = new Date();
      today.setDate(today.getDate() + 1);
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    };

    setCurrentDate(getCurrentDate());
    setTomorrowDate(getTomorrowDate());
  }, []);

  useEffect(() => {
    const fetchGeolocationAndAddress = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setUserLongitude(longitude);
            setUserLatitude(latitude);

            // Use Google Maps Geocoding API to get address from coordinates
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`
            );

            if (response.ok) {
              const data = await response.json();
              const addressResult =
                data.results[0]?.formatted_address || "Address not found";
              setAddress(addressResult);
            } else {
              console.error("Error getting geolocation:", response.statusText);
            }
          },
          (error) => {
            console.error("Error getting geolocation:", error);
          }
        );
      } catch (error) {
        console.error("Error fetching geolocation and address:", error);
      }
    };
    fetchGeolocationAndAddress();
  }, []);

  const handleAddressSelect = async (address: any) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      setUserLatitude(latLng.lat);
      setUserLongitude(latLng.lng);
      setAddress(address);
    } catch (error) {
      console.error("Error selecting address:", error);
    }
  };

  const handleAddressChange = (newAddress: any) => {
    setAddress(newAddress);
    setErrors((prevErrors) => ({
      ...prevErrors,
      address: false,
    }));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
    setApproximatePrice(calculateApproximatePrice());
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setBookLoaderActive(true);

    if (
      !formData.trip_type ||
      !formData.car_type ||
      !formData.package ||
      !formData.car_transmission ||
      !pickupLocation ||
      !dropLocation ||
      !address ||
      !formData.trip_start_date ||
      !formData.trip_time
    ) {
      if (!formData.trip_type) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          trip_type: true,
        }));
      }
      if (!formData.car_type) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          car_type: true,
        }));
      }
      if (!formData.package) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          package: true,
        }));
      }
      if (!formData.car_transmission) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          car_transmission: true,
        }));
      }
      if (!pickupLocation) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          pickup_location: true,
        }));
      }

      if (formData.trip_type === "One Way" && !dropLocation) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          drop_location: true,
        }));
      } else if (formData.trip_type === "Round" && !dropLocation) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          visiting_location: true,
        }));
      }

      if (!address) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          address: true,
        }));
      }
      if (!formData.trip_start_date) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          trip_start_date: true,
        }));
      }
      if (!formData.trip_time) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          trip_time: true,
        }));
      }
      setBookLoaderActive(false);
      return;
    }

    // const currentDate = new Date().toISOString().split("T")[0];

    // // Check if the selected start date is less than the current date
    // if (selectedOption === "select_date" && formData.trip_start_date < currentDate) {
    //   // If selected start date is less than current date, show an alert and return without submitting the form
    //   alert("Selected date cannot be less than the current date");
    //   setBookLoaderActive(false); // Set loading state to false
    //   return;
    // }

    // Include the current location in the formData
    const formDataWithLocation = {
      ...formData,
      lat_long: {
        type: "Point",
        coordinates: [userLatitude, userLongitude],
      },
    };

    if (selectedOption === "today") {
      formDataWithLocation.trip_start_date = currentDate;
      formDataWithLocation.trip_end_date = currentDate;
    } else if (selectedOption === "tomorrow") {
      formDataWithLocation.trip_start_date = tomorrowDate;
      formDataWithLocation.trip_end_date = tomorrowDate;
    } else {
      formDataWithLocation.trip_start_date = selectedDate;
      formDataWithLocation.trip_end_date = selectedDate;
    }
    try {
      const token = localStorage.getItem("token");
      const formWithAddress = {
        ...formDataWithLocation,
        pickup_location: pickupLocation,
        drop_location: dropLocation,
        visiting_location: dropLocation,
        address: address,
        no_of_days: 1,
      };

      if (token !== null) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/booking/booking_punch/`,
          formWithAddress,
          {
            headers: {
              Authorization: `Token ${token}`, // Include the token in the Authorization header
            },
          }
        );
        if (response.status === 201) {
          setBookSucessAlertActive(true);
          setTimeout(() => {
            setLoaderActive(true);
            router.push("/booking-details");
          }, 3000);
        } else {
          triggerErrorModal("An unexpected error occurred. Please try again.");
        }
      } else {
        triggerErrorModal("You must be logged in to place a booking.");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setBookLoaderActive(false);
    }
  };

  useEffect(() => {
    setApproximatePrice(calculateApproximatePrice());
  }, [formData.car_type, formData.package, formData.trip_type]);

  const calculateApproximatePrice = (dutyHour?: string) => {
    const luxuryCar = formData.car_type.toLowerCase().includes("luxury");
    const selectedDutyHour = dutyHour || formData.package;

    const prices: Record<string, Record<string, number>> = {
      luxury: {
        "2 hrs": 500,
        "4 hrs": 600,
        "8 hrs": 900,
      },
      nonLuxury: {
        "2 hrs": 400,
        "4 hrs": 500,
        "8 hrs": 800,
      },
    };

    // Add an extra charge for one-way trips
    const extraCharge = formData.trip_type === "One Way" ? 100 : 0;

    const carTypeKey = luxuryCar ? "luxury" : "nonLuxury";

    if (!formData.car_type || !selectedDutyHour || !formData.trip_type) {
      return 0; // Return 0 if not all fields are selected
    }

    // Use selectedDutyHour to fetch price
    return (prices[carTypeKey][selectedDutyHour] || 0) + extraCharge;
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      {loaderActive && <Loader />}
      {bookLoaderActive && <BookingLoader />}
      {bookSucessAlert && <BookingSucessAlert />}
      <section className="allBookingForm localForm margin-top-bottom">
        <div className="container">
          <div className="row justify-content-end pt-3 pb-3">
            <div className="bookForm test shadow-lg col-12 col-md-7 col-lg-5">
              {/* {errorMessage && (
                <div className="alert alert-danger fade-in" role="alert">
                  <i className="bi bi-exclamation-circle-fill me-2"></i>
                  {errorMessage}
                </div>
              )} */}
              {errorLoginMessage && (
                <div className="alert alert-danger fade-in" role="alert">
                  <i className="bi bi-exclamation-circle-fill me-2"></i>
                  {errorLoginMessage}
                  <Link href="/otp-login/" className="ms-4 text-dark d-block">
                    Login here.
                  </Link>
                </div>
              )}
              <h5 className="p-3 mb-2 formHead test">Local</h5>
              <form
                className="localBookingForm"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <Tabs
                  value={selectedTripType}
                  onChange={(event, newValue) =>
                    handleTabChange(event, newValue)
                  }
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#FFCE28", // Active tab indicator color
                      height: "4px",
                    },
                  }}
                  sx={{
                    "& .MuiTab-root": {
                      textTransform: "none",
                      fontSize: "16px",
                      fontWeight: "bold",
                      padding: "12px",
                      transition: "all 0.3s ease",
                      flexDirection: "row", // Keep icon and text inline
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      color: "#9E9E9E",
                      borderBottom: "4px solid #E0E0E0", // Inactive tab border
                    },
                    "& .MuiTab-root:hover": {
                      backgroundColor: "#F7F7F7",
                      color: "#000",
                    },
                    "& .Mui-selected": {
                      color: "#000 !important",
                      textDecoration: "none",
                      textTransform: "none",
                      borderBottom: "4px solid #FFCE28", // Active tab border
                    },
                    "& .MuiTabs-flexContainer": {
                      justifyContent: "center",
                    },
                  }}
                  centered
                >
                  <Tab
                    label={
                      <>
                        <HiOutlineArrowsRightLeft size={20} />
                        Round Trip
                      </>
                    }
                    value="Round"
                  />
                  <Tab
                    label={
                      <>
                        <MdOutlineArrowForward size={20} />
                        One Way
                      </>
                    }
                    value="One Way"
                  />
                </Tabs>
                <div className="row">
                  <div className="col-12">
                    <p
                      className="custom-para mt-2"
                      style={{ fontWeight: "500" }}
                    >
                      Select Pickup & Drop Location
                    </p>
                  </div>
                  <div className="col pe-0 mb-2">
                    <Autocomplete
                      options={data
                        .map((item: any) => item.location)
                        .filter(
                          (location: string) => location !== dropLocation
                        )}
                      value={pickupLocation || null}
                      onChange={(event, newValue) => {
                        setpickupLocation(newValue);
                        // Hide the keyboard by blurring the input
                        const input = document.activeElement as HTMLElement;
                        if (input) {
                          input.blur();
                        }

                        // Clear pickup location error
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          pickup_location: false,
                        }));
                        if (newValue) {
                          setDropdownOpen(true);
                          setTimeout(() => {
                            if (dropLocationRef.current) {
                              const input =
                                dropLocationRef.current.querySelector(
                                  "input"
                                ) as HTMLInputElement;
                              if (input) {
                                input.focus();
                              }
                            }
                          }, 100);
                        }
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Pickup Location"
                          size="small"
                          fullWidth
                          error={errors.pickup_location} // Show error if exists
                          helperText={
                            errors.pickup_location
                              ? "Select a pickup location"
                              : ""
                          }
                          FormHelperTextProps={{
                            className: "errorHelperTextMsg", // Add this class for styling
                          }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: errors.pickup_location
                                  ? "red"
                                  : "black",
                                borderRadius: "8px",
                              },
                            },
                            "& input::placeholder": {
                              color: "black", // Black placeholder text
                              opacity: 1, // Fully visible placeholder
                            },
                          }}
                        />
                      )}
                      clearOnBlur
                      componentsProps={{
                        popper: {
                          sx: {
                            "& .MuiAutocomplete-paper": {
                              "& .MuiAutocomplete-option": {
                                "&:hover": {
                                  backgroundColor: "rgba(255, 206, 40, 0.3)",
                                  color: "black",
                                },
                                "&[aria-selected='true']": {
                                  backgroundColor: "rgba(255, 206, 40, 0.3)",
                                  color: "black",
                                },
                              },
                            },
                          },
                        },
                      }}
                    />
                  </div>

                  <div className="col mb-2">
                    <Autocomplete
                      ref={dropLocationRef}
                      open={dropdownOpen}
                      onOpen={() => setDropdownOpen(true)}
                      onClose={() => setDropdownOpen(false)}
                      options={data
                        .map((item: any) => item.location)
                        .filter(
                          (location: string) => location !== pickupLocation
                        )}
                      value={dropLocation || null}
                      onChange={(event, newValue) => {
                        setdropLocation(newValue);
                        setDropdownOpen(false);

                        // Hide the keyboard by blurring the input
                        const input = document.activeElement as HTMLElement;
                        if (input) {
                          input.blur();
                        }

                        // Clear the correct error based on trip type
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          [formData.trip_type === "One Way"
                            ? "drop_location"
                            : "visiting_location"]: false,
                        }));
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder={
                            formData.trip_type === "One Way"
                              ? "Drop Location"
                              : "Visiting Location"
                          }
                          size="small"
                          fullWidth
                          error={
                            formData.trip_type === "One Way"
                              ? errors.drop_location
                              : errors.visiting_location
                          } // Highlight field based on error
                          helperText={
                            formData.trip_type === "One Way" &&
                            errors.drop_location
                              ? "Select a drop location"
                              : formData.trip_type === "Round" &&
                                errors.visiting_location
                              ? "Select a visiting location"
                              : ""
                          }
                          FormHelperTextProps={{
                            className: "errorHelperTextMsg", // Add this class for styling
                          }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor:
                                  formData.trip_type === "One Way"
                                    ? errors.drop_location
                                      ? "red"
                                      : "black"
                                    : errors.visiting_location
                                    ? "red"
                                    : "black",
                                borderRadius: "8px",
                              },
                            },
                            "& input::placeholder": {
                              color: "black", // Black placeholder text
                              opacity: 1, // Fully visible placeholder
                            },
                          }}
                        />
                      )}
                      clearOnBlur
                      componentsProps={{
                        popper: {
                          sx: {
                            "& .MuiAutocomplete-paper": {
                              "& .MuiAutocomplete-option": {
                                "&:hover": {
                                  backgroundColor: "rgba(255, 206, 40, 0.3)",
                                  color: "black",
                                },
                                "&[aria-selected='true']": {
                                  backgroundColor: "rgba(255, 206, 40, 0.3)",
                                  color: "black",
                                },
                              },
                            },
                          },
                        },
                      }}
                    />
                  </div>

                  <div className="mt-2 mb-2">
                    <LocationSearchInput
                      value={address}
                      onChange={handleAddressChange}
                      onSelect={handleAddressSelect}
                    />
                    {errors.address && (
                      <p className="errorHelperTextMsg">
                        Please enter a valid address
                      </p>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p className="custom-para" style={{ fontWeight: "500" }}>
                      Select Duty Hours
                    </p>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col mb-2">
                    <FormControl fullWidth size="small">
                      <div className="d-flex justify-content-between">
                        {["2 hrs", "4 hrs", "8 hrs"].map((hour) => (
                          <div
                            key={hour}
                            className={`duty-hour-btn ${
                              formData.package === hour ? "active" : ""
                            }`}
                            onClick={() => {
                              setFormData((prevFormData) => ({
                                ...prevFormData,
                                package: hour,
                              }));
                              setApproximatePrice(
                                calculateApproximatePrice(hour)
                              );
                              setErrors((prevErrors) => ({
                                ...prevErrors,
                                package: false,
                              }));
                            }}
                          >
                            {hour}
                          </div>
                        ))}
                      </div>
                    </FormControl>
                    {errors.package && (
                      <p className="errorHelperTextMsg">Select Duty Hours</p>
                    )}
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <p className="custom-para" style={{ fontWeight: "500" }}>
                      Select Date & Time
                    </p>
                  </div>
                  <div className="col-12 mt-n2">
                    <div className="row align-items-end mb-2">
                      <div className="col-6 pe-0">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            value={selectedDate ? dayjs(selectedDate) : null}
                            onChange={(newValue) => {
                              setSelectedDate(
                                newValue ? newValue.format("YYYY-MM-DD") : ""
                              );
                              setFormData((prevFormData) => ({
                                ...prevFormData,
                                trip_start_date: newValue
                                  ? newValue.format("YYYY-MM-DD")
                                  : "",
                              }));
                              setErrors((prevErrors) => ({
                                ...prevErrors,
                                trip_start_date: false,
                              }));
                            }}
                            open={open}
                            onOpen={() => {
                              if (!selectedDate) {
                                const today = dayjs().format("YYYY-MM-DD");
                                setSelectedDate(today);
                                setFormData((prevFormData) => ({
                                  ...prevFormData,
                                  trip_start_date: today,
                                }));
                                setErrors((prevErrors) => ({
                                  ...prevErrors,
                                  trip_start_date: false,
                                }));
                              }
                              setOpen(true);
                            }}
                            onClose={() => setOpen(false)}
                            minDate={dayjs()}
                            maxDate={dayjs("9999-12-31")}
                            slotProps={{
                              textField: {
                                variant: "outlined",
                                error: errors.trip_start_date,
                                helperText: errors.trip_start_date
                                  ? "Select a Start Date"
                                  : "",
                                FormHelperTextProps: {
                                  className: "errorHelperTextMsg",
                                },
                                placeholder: "Select Date",
                                size: "small",
                                fullWidth: true,
                                sx: {
                                  "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                      borderColor: errors.trip_start_date
                                        ? "red"
                                        : "black",
                                      borderWidth: "1px",
                                      borderRadius: "8px",
                                    },
                                    "&:hover fieldset": {
                                      borderColor: errors.trip_start_date
                                        ? "red"
                                        : "black",
                                      borderWidth: "1px",
                                    },
                                    "&.Mui-focused fieldset": {
                                      borderColor: errors.trip_start_date
                                        ? "red"
                                        : "black",
                                      borderWidth: "1px",
                                    },
                                    "& input::placeholder": {
                                      color: "black",
                                      opacity: 1,
                                    },
                                  },
                                },
                              },
                            }}
                          />
                        </LocalizationProvider>
                      </div>
                      <div className="col-6">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["TimePicker"]}>
                            <TimePicker
                              label="Select Time"
                              value={selectedTime}
                              onChange={handleTimeChange}
                              viewRenderers={{
                                hours: renderTimeViewClock,
                                minutes: renderTimeViewClock,
                                seconds: renderTimeViewClock,
                              }}
                              slotProps={{
                                textField: {
                                  size: "small",
                                  sx: {
                                    width: "100%",
                                    "& .MuiOutlinedInput-root": {
                                      "& fieldset": {
                                        borderColor: errors.trip_time
                                          ? "red"
                                          : "black",
                                        borderWidth: "1px",
                                        borderRadius: "8px",
                                      },
                                      "&:hover fieldset": {
                                        borderColor: errors.trip_time
                                          ? "red"
                                          : "black",
                                        borderWidth: "1px",
                                      },
                                      "&.Mui-focused fieldset": {
                                        borderColor: errors.trip_time
                                          ? "red"
                                          : "black",
                                        borderWidth: "1px",
                                      },
                                    },
                                  },
                                  style: { minWidth: "100%" },
                                },
                              }}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                        {errors.trip_time && (
                          <p className="errorHelperTextMsg">Select a Time</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <p
                      className="custom-para mb-0"
                      style={{ fontWeight: "500" }}
                    >
                      Car Details
                    </p>
                  </div>
                  <div className="col-6 pe-0 mb-2">
                    <FormControl
                      fullWidth
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: errors.car_type ? "red" : "black",
                            borderWidth: "1px",
                            borderRadius: "8px",
                          },
                          "&:hover fieldset": {
                            borderColor: errors.car_type ? "red" : "black",
                            borderWidth: "1px",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: errors.car_type ? "red" : "black",
                            borderWidth: "1px",
                          },
                        },
                      }}
                    >
                      <Select
                        value={formData.car_type}
                        onChange={handleChange}
                        name="car_type"
                        displayEmpty
                        inputProps={{
                          "aria-label": "Car Type",
                        }}
                        sx={{
                          "& .MuiSelect-select": {
                            color: "black", // Black color for placeholder and selected text
                          },
                        }}
                        className="custom_select"
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              "& .MuiMenuItem-root": {
                                "&:hover": {
                                  backgroundColor: "rgba(255, 206, 40, 0.3)",
                                  color: "black",
                                },
                                "&.Mui-selected": {
                                  backgroundColor: "rgba(255, 206, 40, 0.3)",
                                  color: "black",
                                },
                              },
                            },
                          },
                        }}
                      >
                        <MenuItem value="" disabled hidden>
                          Car Type
                        </MenuItem>
                        <MenuItem value="Hatchback">Hatchback</MenuItem>
                        <MenuItem value="Sedan">Sedan</MenuItem>
                        <MenuItem value="SUV">SUV</MenuItem>
                        <MenuItem value="Luxury">Luxury</MenuItem>
                        <MenuItem value="Sedan Luxury">Sedan Luxury</MenuItem>
                        <MenuItem value="SUV Luxury">SUV Luxury</MenuItem>
                      </Select>
                      {errors.car_type && (
                        <p className="errorHelperTextMsg">Select Car Type</p>
                      )}
                    </FormControl>
                  </div>
                  <div className="col-6 mb-2">
                    <FormControl
                      fullWidth
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: errors.car_transmission
                              ? "red"
                              : "black",
                            borderWidth: "1px",
                            borderRadius: "8px",
                          },
                          "&:hover fieldset": {
                            borderColor: errors.car_transmission
                              ? "red"
                              : "black",
                            borderWidth: "1px",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: errors.car_transmission
                              ? "red"
                              : "black",
                            borderWidth: "1px",
                          },
                        },
                      }}
                    >
                      <Select
                        value={formData.car_transmission || ""}
                        onChange={handleChange}
                        name="car_transmission"
                        displayEmpty
                        inputProps={{
                          "aria-label": "Transmission Type",
                        }}
                        sx={{
                          "& .MuiSelect-select": {
                            color: "black", // Black color for placeholder and selected text
                          },
                        }}
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              "& .MuiMenuItem-root": {
                                "&:hover": {
                                  backgroundColor: "rgba(255, 206, 40, 0.3)",
                                  color: "black",
                                },
                                "&.Mui-selected": {
                                  backgroundColor: "rgba(255, 206, 40, 0.3)",
                                  color: "black",
                                },
                              },
                            },
                          },
                        }}
                      >
                        <MenuItem value="" disabled hidden>
                          Transmission Type
                        </MenuItem>
                        <MenuItem value="Automatic">Automatic</MenuItem>
                        <MenuItem value="Manual">Manual</MenuItem>
                      </Select>
                      {errors.car_transmission && (
                        <p className="errorHelperTextMsg">
                          Select a Transmission Type
                        </p>
                      )}
                    </FormControl>
                  </div>
                </div>
                {(approximatePrice > 0 || extraCharge > 0) && (
                  <div
                    className="mb-2 mt-2"
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      borderRadius: "12px",
                    }}
                  >
                    <i
                      className="bi bi-info-circle custom-para"
                      data-bs-toggle="modal"
                      data-bs-target="#localRates"
                    >
                      {" "}
                      Info
                    </i>
                    <br />
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span className="custom-para">
                        Approximate Rate Tariff:
                      </span>
                      {approximatePrice > 0 && (
                        <span className="custom-para">
                          ₹ {approximatePrice}
                        </span>
                      )}
                    </div>
                    {extraCharge !== 0 && (
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="custom-para">+ Outskirt Charge:</span>
                        <span className="custom-para">₹ {extraCharge}</span>
                      </div>
                    )}
                    {nightAllowanceCharge !== 0 && (
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="custom-para">
                          + Night Allowance Charge:
                        </span>
                        <span className="custom-para">
                          ₹ {nightAllowanceCharge}
                        </span>
                      </div>
                    )}
                  </div>
                )}
                <button
                  className="btn btn-lg w-100 mt-2"
                  type="submit"
                  style={{ backgroundColor: "#FFCE28" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Local Rates Modal */}
        <LocalRatesModal />
      </section>
      <Modal
        open={errorModalOpen}
        onClose={handleErrorModalClose}
        aria-labelledby="error-modal-title"
        aria-describedby="error-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 3,
            borderRadius: "8px",
            border: "1px solid #ccc",
            textAlign: "center",
          }}
        >
          <BsXCircle size={50} color="red" />
          <Typography id="error-modal-title" variant="h6" sx={{ mt: 2 }}>
            Error Submitting Form
          </Typography>
          <Typography id="error-modal-description" sx={{ mt: 2 }}>
            {errorModalMessage}
          </Typography>
          <button
            onClick={handleErrorModalClose}
            className="btn w-100 mt-3"
            style={{ backgroundColor: "#ffce28", border: "1px solid black" }}
          >
            Okay
          </button>
        </Box>
      </Modal>
    </>
  );
};

export default BookingForm;
