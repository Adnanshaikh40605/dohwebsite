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
import Loader from "./loader";
import BookingSucessAlert from "./booking_success_alert";
import BookingLoader from "./booking_loader";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import LocationSearchInput from "./PlaceAutoComplete";
import LocalRatesModal from "./LocalRatesModal";
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
  // const [selectedOption, setSelectedOption] = useState("today");
  const [approximatePrice, setApproximatePrice] = useState(0);
  const [loaderActive, setLoaderActive] = useState(false);
  const [bookLoaderActive, setBookLoaderActive] = useState(false);
  const [bookSucessAlert, setBookSucessAlertActive] = useState(false);
  const [selectedTime, setSelectedTime] = useState<any>(null);
  const [data, setData] = useState([]);
  const [selectedTripType, setSelectedTripType] = useState("Round");
  const [nightAllowanceCharge, setNightAllowanceCharge] = useState(0);
  const [showTotalCharge, setShowTotalCharge] = useState(false);
  const [totalCharge, setTotalCharge] = useState(0);
  const [isTodaySelected, setIsTodaySelected] = useState(false);
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
  const [errorModalTitle, setErrorModalTitle] = useState("Error Submitting Form");

  const handleErrorModalClose = () => {
    setErrorModalOpen(false);
    setErrorModalMessage("");
    setErrorModalTitle("Error Submitting Form");
  };

  const triggerErrorModal = (message: string, title?: string) => {
    setErrorModalMessage(message);
    setErrorModalTitle(title ?? "Error Submitting Form");
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

      // Store the referrer page as last visited (not the current booking page)
      const referrer = new URLSearchParams(window.location.search).get('referrer') || '/';
      sessionStorage.setItem('lastVisitedPage', referrer);
      console.log('PuneBookingForm: Stored lastVisitedPage as:', referrer);

      if (!token) {
        const referrer = new URLSearchParams(window.location.search).get('referrer') || '/';
        router.push(
          `/otp-login?redirect=${encodeURIComponent(window.location.href)}&referrer=${encodeURIComponent(referrer)}`
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
          const referrer = new URLSearchParams(window.location.search).get('referrer') || '/';
          router.push(
            `/otp-login?redirect=${encodeURIComponent(window.location.href)}&referrer=${encodeURIComponent(referrer)}`
          );
          return;
        }

        if (response.status !== 200) {
          const referrer = new URLSearchParams(window.location.search).get('referrer') || '/';
          router.push(
            `/otp-login?redirect=${encodeURIComponent(window.location.href)}&referrer=${encodeURIComponent(referrer)}`
          );
        }
      } catch (error: any) {
        console.error("Error checking token:", error);
        if (error.response && error.response.data && error.response.data.error === "Invalid token") {
          logout();
        }
        const referrer = new URLSearchParams(window.location.search).get('referrer') || '/';
        router.push(
          `/otp-login?redirect=${encodeURIComponent(window.location.href)}&referrer=${encodeURIComponent(referrer)}`
        );
      } finally {
        setLoaderActive(false);
      }
    };

    checkToken();
  }, [router, logout]);

  const handleTimeChange = (newTime: any) => {
    // Convert dayjs object to Date if needed
    const timeAsDate = newTime
      ? newTime.toDate
        ? newTime.toDate()
        : newTime
      : null;
    setSelectedTime(timeAsDate);

    if (!timeAsDate || !formData.package) {
      setNightAllowanceCharge(0);
      return;
    }

    const startDateTime = new Date(timeAsDate);
    const dutyHourInt = parseInt(formData.package); // "2 hrs" -> 2

    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(endDateTime.getHours() + dutyHourInt);

    const endHour = endDateTime.getHours();

    const isNight = endHour >= 23 || endHour < 6;
    setNightAllowanceCharge(isNight ? 200 : 0);

    const hours = startDateTime.getHours().toString().padStart(2, "0");
    const minutes = startDateTime.getMinutes().toString().padStart(2, "0");

    setFormData((prevFormData) => ({
      ...prevFormData,
      trip_time: `${hours}:${minutes}`,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      trip_time: false,
    }));
  };

  // Function to get 60 minutes after current time
  const getTimeAfter60Minutes = () => {
    const now = new Date();
    const timeAfter60Minutes = new Date(now.getTime() + 60 * 60 * 1000);
    return timeAfter60Minutes;
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

  // const handleBookingChange = (e: any) => {
  //   setSelectedOption(e.target.value);
  // };
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [open, setOpen] = useState(false);

  const dropdata = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/booking/combine_data/?location_city=pune`
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

    if (name === "car_type") {
      setShowTotalCharge(true); // Show total charge when car type is selected
      const newApproximatePrice = calculateApproximatePrice();
      setApproximatePrice(newApproximatePrice);
      setTotalCharge(newApproximatePrice + extraCharge + nightAllowanceCharge);
    }
  };

  useEffect(() => {
    if (showTotalCharge) {
      setTotalCharge(approximatePrice + extraCharge + nightAllowanceCharge);
    }
  }, [approximatePrice, extraCharge, nightAllowanceCharge, showTotalCharge]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setBookLoaderActive(true);

    // Check if today is selected and time is less than 60 minutes from now
    if (isTodaySelected && selectedTime) {
      const currentTime = new Date();
      const selectedDateTime = selectedTime.toDate
        ? selectedTime.toDate()
        : new Date(selectedTime);
      const timeDifference = selectedDateTime.getTime() - currentTime.getTime();
      const minutesDifference = Math.round(timeDifference / (1000 * 60));

      if (minutesDifference < 60) {
        triggerErrorModal(
          "Please choose a time that’s at least 60 minutes from now for today’s booking.",
          "Adjust Your Booking Time"
        );
        setBookLoaderActive(false);
        return;
      }
    }

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

    // if (selectedOption === "today") {
    //   formDataWithLocation.trip_start_date = currentDate;
    //   formDataWithLocation.trip_end_date = currentDate;
    // } else if (selectedOption === "tomorrow") {
    //   formDataWithLocation.trip_start_date = tomorrowDate;
    //   formDataWithLocation.trip_end_date = tomorrowDate;
    // } else {
    //   formDataWithLocation.trip_start_date = selectedDate;
    //   formDataWithLocation.trip_end_date = selectedDate;
    // }
    try {
      const token = localStorage.getItem("token");
      const formWithAddress = {
        ...formDataWithLocation,
        pickup_location: pickupLocation,
        drop_location: dropLocation,
        visiting_location: dropLocation,
        address: address,
        no_of_days: 1,
        trip_start_date: selectedDate || currentDate,
        trip_end_date: selectedDate || currentDate,
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
        const message = response.data?.msg || response.data?.message || "";

        if (response.status === 201) {
          // Created — success
          setBookSucessAlertActive(true);
          setTimeout(() => {
            setLoaderActive(true);
            router.push("/booking-details");
          }, 3000);
        } else if (response.status === 200 && message) {
          // 200 OK but server returned a warning or error in the message
          triggerErrorModal(message);
        } else {
          triggerErrorModal("An unexpected error occurred. Please try again.");
        }
      } else {
        triggerErrorModal("You must be logged in to place a booking.");
      }
    } catch (error: any) {
      if (error.response) {
        const errorMessage =
          error.response.data.msg ||
          error.response.data.message ||
          "Booking request failed.";
        triggerErrorModal(errorMessage);
      } else {
        triggerErrorModal("Network error. Please try again.");
      }
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
      {loaderActive && <Loader />}
      {bookLoaderActive && <BookingLoader id="pune-booking" />}
      {bookSucessAlert && <BookingSucessAlert />}
      <section className="allBookingForm localPuneForm margin-top-bottom">
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
              <h1 className="p-3 h5 mb-2 formHead test">Local Pune</h1>
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
                        setDropdownOpen(false);
                        setdropLocation(newValue);
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
                              ? "Please select a drop location"
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
                              const newPackage = hour;
                              setFormData((prevFormData) => ({
                                ...prevFormData,
                                package: newPackage,
                              }));
                              setErrors((prevErrors) => ({
                                ...prevErrors,
                                package: false,
                              }));

                              setApproximatePrice(
                                calculateApproximatePrice(newPackage)
                              );

                              // Recalculate night allowance if time already selected
                              if (selectedTime) {
                                const tempStartTime = selectedTime.toDate
                                  ? selectedTime.toDate()
                                  : new Date(selectedTime);
                                const dutyHourInt = parseInt(newPackage);
                                const endDateTime = new Date(tempStartTime);
                                endDateTime.setHours(
                                  endDateTime.getHours() + dutyHourInt
                                );

                                const endHour = endDateTime.getHours();
                                const isNight = endHour >= 23 || endHour < 6;
                                setNightAllowanceCharge(isNight ? 200 : 0);
                              }
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
                              const newDate = newValue
                                ? newValue.format("YYYY-MM-DD")
                                : "";
                              setSelectedDate(newDate);
                              setFormData((prevFormData) => ({
                                ...prevFormData,
                                trip_start_date: newDate,
                              }));
                              setErrors((prevErrors) => ({
                                ...prevErrors,
                                trip_start_date: false,
                              }));

                              // Check if selected date is today
                              const today = dayjs().format("YYYY-MM-DD");
                              const isToday = newDate === today;
                              setIsTodaySelected(isToday);

                              // If today is selected and no time is set, set time to 60 minutes from now
                              if (isToday && !selectedTime) {
                                const timeAfter60Minutes =
                                  getTimeAfter60Minutes();
                                const timeAsDayjs = dayjs(timeAfter60Minutes);
                                setSelectedTime(timeAsDayjs);
                                handleTimeChange(timeAsDayjs);
                              }
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
                                setIsTodaySelected(true);

                                // Set time to 60 minutes from now when today is selected
                                const timeAfter60Minutes =
                                  getTimeAfter60Minutes();
                                const timeAsDayjs = dayjs(timeAfter60Minutes);
                                setSelectedTime(timeAsDayjs);
                                handleTimeChange(timeAsDayjs);
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
                              value={selectedTime ? dayjs(selectedTime) : null}
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
                {showTotalCharge && ( // Show only if car type is selected
                  <div
                    className="mb-2 mt-2"
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      borderRadius: "12px",
                    }}
                  >
                    <i
                      className="bi bi-info-circle text-danger custom-para"
                      data-bs-toggle="modal"
                      data-bs-target="#localRates"
                    ></i>{" "}
                    <span>Info</span>
                    <br />
                    {isTodaySelected && (
                      <div
                        className="alert alert-warning py-2 mb-2"
                        style={{ fontSize: "12px" }}
                      >
                        <i className="bi bi-exclamation-triangle me-1"></i>
                        Please book the driver from 60 minutes after current
                        time
                      </div>
                    )}
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span className="custom-para">Base Charge:</span>
                      <span className="custom-para font-weight-bold">
                        ₹ {approximatePrice}
                      </span>
                    </div>
                    {extraCharge !== 0 && (
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="custom-para">+ Outskirt Charge:</span>
                        <span className="custom-para font-weight-bold">
                          ₹ {extraCharge}
                        </span>
                      </div>
                    )}
                    {/* {nightAllowanceCharge !== 0 && (
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="custom-para">
                          + Night Allowance Charge:
                        </span>
                        <span className="custom-para">
                          ₹ {nightAllowanceCharge}
                        </span>
                      </div>
                    )} */}
                    <div className="d-flex justify-content-between align-items-center">
                      {/* <span className="custom-para">Approximate Total:</span>
                      <span className="custom-para">₹ {totalCharge}</span> */}
                      <ul style={{ fontSize: "12px", paddingLeft: "15px" }}>
                        <li>
                          At 11pm <span className="font-weight-bold">₹200</span>{" "}
                          for night allowance
                        </li>
                        <li>
                          Till 6am{" "}
                          <span className="font-weight-bold">₹200</span> for
                          early morning charge
                        </li>
                        <li>
                          Per hour overtime{" "}
                          <span className="font-weight-bold">₹100</span>
                        </li>
                        {/* <li>
                          After <span className="font-weight-bold">50km, ₹200 </span> is applicable for outskirts location
                        </li> */}
                      </ul>
                    </div>
                    <small
                      data-bs-toggle="modal"
                      data-bs-target="#localRates"
                      className="d-flex justify-content-center text-danger text-decoration-underline"
                      style={{ cursor: "pointer" }}
                    >
                      View cancellation policy and rates
                    </small>
                  </div>
                )}

                <button
                  className="btn btn-lg w-100 mt-2"
                  type="submit"
                  style={{ backgroundColor: "#FFCE28" }}
                >
                  Book Driver
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Local Rates Modal */}
        <LocalRatesModal location="pune" />
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
            {errorModalTitle}
          </Typography>
          <Typography id="error-modal-description" sx={{ mt: 2 }}>
            {errorModalMessage}
            <p>
              Any Query -{" "}
              <Link
                href="tel:02243439090"
                aria-label="Call for any query 022 4343 9090"
              >
                02243439090
              </Link>
            </p>
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
