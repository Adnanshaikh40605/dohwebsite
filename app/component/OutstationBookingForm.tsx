"use client";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
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
import OutstationRatesModal from "../component/OutstationRatesModal";
import {
  Select,
  MenuItem,
  FormControl,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import NotServingCities from "../component/service_unavailablity";
import dayjs from "dayjs";
import { BsXCircle } from "react-icons/bs";
import { AuthContext } from "../context/AuthContext";

const OutstationBookingForm = () => {
  const { logout } = useContext(AuthContext)!;
  const [nightAllowanceCharge, setNightAllowanceCharge] = useState(0);
  const [selectedCity, setSelectedCity] = useState("mumbai"); // Default to Mumbai
  const [formData, setFormData] = useState({
    booking_from: "Web",
    booking_type: "Outstation",
    trip_type: "Outstation",
    request_type: "Normal",
    trip_start_date: "",
    trip_end_date: "",
    trip_time: "",
    car_type: "",
    package: "12 hrs",
    car_transmission: "",
    lat_long: {
      latitude: "",
      longitude: "",
    },
    pickup_location: "",
    drop_location: "",
    mobile: "",
    address: "",
    no_of_days: 0,
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const [userLatitude, setUserLatitude] = useState(0);
  const [userLongitude, setUserLongitude] = useState(0);
  const [address, setAddress] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [errorLoginMessage, setErrorLoginMessage] = useState("");
  const [approximatePrice, setApproximatePrice] = useState(0);
  const [loaderActive, setLoaderActive] = useState(false);
  const [bookLoaderActive, setBookLoaderActive] = useState(false);
  const [bookSucessAlert, setBookSucessAlertActive] = useState(false);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedStartDate, setSelectedStartDate] = useState<string>("");
  const [selectedEndDate, setSelectedEndDate] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({
    trip_start_date: false,
    trip_end_date: false,
    trip_time: false,
    car_type: false,
    car_transmission: false,
    address: false,
    drop_location: false,
  });
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

  useEffect(() => {
    const checkToken = async () => {
      setLoaderActive(true);
      const token = localStorage.getItem("token");
      
      // Store the referrer page as last visited (not the current booking page)
      const referrer = new URLSearchParams(window.location.search).get('referrer') || '/';
      sessionStorage.setItem('lastVisitedPage', referrer);
      console.log('OutstationBookingForm: Stored lastVisitedPage as:', referrer);
      
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

  // Get city from URL parameters
  useEffect(() => {
    const city = searchParams.get('city');
    if (city) {
      setSelectedCity(city.toLowerCase());
    }
  }, [searchParams]);

  const handleDateChange = () => {
    const { trip_start_date, trip_end_date, car_type } = formData;

    if (trip_start_date && trip_end_date) {
      const startDate = new Date(trip_start_date);
      const endDate = new Date(trip_end_date);
      const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      // Calculate base price per day based on car type and city
      let basePrice = 0;
      if (car_type.toLowerCase().includes("luxury")) {
        // Different rates for Pune vs Mumbai
        basePrice = selectedCity === "pune" ? 1300 : 1600; // Pune luxury: ₹1300, Mumbai luxury: ₹1600
      } else {
        // Different rates for Pune vs Mumbai
        basePrice = selectedCity === "pune" ? 1200 : 1500; // Pune regular: ₹1200, Mumbai regular: ₹1500
      }

      const approximatePrice = basePrice * (diffDays + 1);

      setFormData((prevFormData) => ({
        ...prevFormData,
        no_of_days: diffDays + 1,
      }));

      // Calculate approximate price
      setApproximatePrice(approximatePrice);
    }
  };

  useEffect(() => {
    handleDateChange();
  }, [formData.trip_start_date, formData.trip_end_date, formData.car_type, selectedCity]);

  const handleStartDateChange = (e: any) => {
    const startDate = e.target.value;
    setSelectedStartDate(startDate);
    setFormData((prevFormData) => ({
      ...prevFormData,
      trip_start_date: startDate,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      trip_start_date: false,
    }));
  };

  const handleEndDateChange = (e: any) => {
    const endDate = e.target.value;
    setSelectedEndDate(endDate);
    setFormData((prevFormData) => ({
      ...prevFormData,
      trip_end_date: endDate,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      trip_end_date: false,
    }));
  };

  const handleTimeChange = async (newTime: Date | null) => {
    if (newTime) {
      const dateObject = new Date(newTime);

      // Extract hours, minutes, and seconds from the dateObject
      const hours = dateObject.getHours().toString().padStart(2, "0");
      const minutes = dateObject.getMinutes().toString().padStart(2, "0");

      // Check if the time falls in the night allowance window
      const isNightAllowance = Number(hours) >= 23 || Number(hours) < 6;
      setNightAllowanceCharge(isNightAllowance ? 200 : 0);

      // Formatted time string in HH:MM format
      const formattedTime: string = `${hours}:${minutes}`;

      console.log(formattedTime + "from handleTimeChange");

      setFormData((prevFormData) => ({
        ...prevFormData,
        trip_time: formattedTime,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        trip_time: false,
      }));
    }
  };

  useEffect(() => {
    const fetchGeolocationAndAddress = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setUserLongitude(longitude);
            setUserLatitude(latitude);
            console.log("Cordinates :", latitude, longitude);

            // Use Google Maps Geocoding API to get address from coordinates
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
            );

            if (response.ok) {
              const data = await response.json();
              const addressResult =
                data.results[0]?.formatted_address || "Address not found";
              setAddress(addressResult);
              setErrors((prevErrors) => ({
                ...prevErrors,
                address: false,
              }));
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
      setErrors((prevErrors) => ({
        ...prevErrors,
        address: false,
      }));
    } catch (error) {
      console.error("Error selecting address:", error);
    }
  };

  const handleDropLocationSelect = async (address: any) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      setDropLocation(address);
      setErrors((prevErrors) => ({
        ...prevErrors,
        drop_location: false,
      }));
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

  const handleDropLocationChange = (newAddress: any) => {
    setDropLocation(newAddress);
    setErrors((prevErrors) => ({
      ...prevErrors,
      drop_location: false,
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
  };

  const handleSubmit = async (e: any) => {
    setBookLoaderActive(true);
    e.preventDefault();

    // Check if any required field is empty
    if (
      !formData.no_of_days ||
      !formData.car_type ||
      !formData.car_transmission ||
      !address ||
      !dropLocation ||
      !formData.trip_start_date ||
      !formData.trip_end_date ||
      !formData.trip_time
    ) {
      setBookLoaderActive(false);
      if (!formData.trip_start_date) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          trip_start_date: true,
        }));
      }
      if (!formData.trip_end_date) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          trip_end_date: true,
        }));
      }
      if (!formData.trip_time) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          trip_time: true,
        }));
      }
      if (!formData.car_type) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          car_type: true,
        }));
      }
      if (!formData.car_transmission) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          car_transmission: true,
        }));
      }
      if (!address) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          address: true,
        }));
      }
      if (!dropLocation) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          drop_location: true,
        }));
      }
      return; // Prevent form submission
    }

    const currentDate = new Date().toISOString().split("T")[0];

    // Check if the selected start date is less than the current date
    if (formData.trip_start_date < currentDate) {
      // If selected start date is less than current date, show an alert and return without submitting the form
      alert("Selected date cannot be less than the current date");
      setBookLoaderActive(false);
      return;
    }

    // Include the current location in the formData
    const formDataWithLocation = {
      ...formData,
      lat_long: {
        type: "Point",
        coordinates: [userLatitude, userLongitude],
      },
      pickup_location: address,
    };

    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const formWithAddress = {
        ...formDataWithLocation,
        pickup_location: address,
        drop_location: dropLocation,
        visiting_location: dropLocation,
        address: address,
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
        console.log("Booking request sent:", response.data);
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
        triggerErrorModal(
          "You must be logged in, if you want to place booking."
        );
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

  return (
    <>
      <NotServingCities />
      {loaderActive && <Loader />}
      {bookLoaderActive && <BookingLoader id="outstation-booking" />}
      {bookSucessAlert && <BookingSucessAlert />}
      <section className="allBookingForm outstationForm margin-top-bottom">
        <div className="container">
          <div className="row justify-content-end pt-3 pb-3">
            <div className="bookForm test shadow-lg col-12 col-md-7 col-lg-5">
              {/* {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  <i className="bi bi-exclamation-circle-fill me-2"></i>
                  {errorMessage}
                </div>
              )} */}
              {errorLoginMessage && (
                <div className="alert alert-danger" role="alert">
                  <i className="bi bi-exclamation-circle-fill me-2"></i>
                  {errorLoginMessage}
                  <Link href="/otp-login/" className="ms-4 text-dark d-block">
                    Login here.
                  </Link>
                </div>
              )}
              <h1 className="p-3 h5 mb-2 formHead test">Outstation</h1>
              <form
                className="outstationBookingForm"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <div className="col mb-2 d-none">
                  <label className="form-label mb-0">Trip Type </label>
                  <input
                    className="form-control"
                    type="date"
                    name="trip_type"
                    defaultValue="Outstation"
                    onChange={handleChange}
                  />
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <div className="custom-location-input-wrapper-address">
                      <LocationSearchInput
                        value={address}
                        onChange={handleAddressChange}
                        onSelect={handleAddressSelect}
                        placeholder="Please Enter Pickup Location"
                        error={errors.address}
                      />
                      {errors.address && (
                        <p className="errorHelperTextMsg">
                          Please Enter An Address
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <span className="custom-location-input-wrapper "></span>
                  </div>
                  <div className="col-12 mb-2">
                    <div className="custom-location-input-wrapper-location">
                      <LocationSearchInput
                        value={dropLocation}
                        onChange={handleDropLocationChange}
                        onSelect={handleDropLocationSelect}
                        placeholder="Enter Visiting or Drop Location"
                        error={errors.drop_location}
                      />
                      {errors.drop_location && (
                        <p className="errorHelperTextMsg">
                          Please Enter a Visiting Location
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row g-2 align-items-end mb-2">
                  <div className="col-12"></div>
                  <div className="col-6 pe-0 col-md-6">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={
                          selectedStartDate ? dayjs(selectedStartDate) : null
                        } // Ensure value is Dayjs object
                        onChange={(newValue) => {
                          const formattedDate = newValue
                            ? newValue.format("YYYY-MM-DD")
                            : "";
                          setSelectedStartDate(formattedDate); // Update start date
                          setFormData((prevFormData) => ({
                            ...prevFormData,
                            trip_start_date: formattedDate,
                          }));
                          setErrors((prevErrors) => ({
                            ...prevErrors,
                            trip_start_date: false, // Clear error
                          }));
                        }}
                        minDate={dayjs()} // Prevent past dates
                        maxDate={dayjs("9999-12-31")} // Maximum date
                        onOpen={() => {
                          if (!selectedStartDate) {
                            const today = dayjs().format("YYYY-MM-DD");
                            setSelectedStartDate(today); // Set today's date if no date selected
                            setFormData((prevFormData) => ({
                              ...prevFormData,
                              trip_start_date: today,
                            }));
                            setErrors((prevErrors) => ({
                              ...prevErrors,
                              trip_start_date: false, // Clear error on open
                            }));
                          }
                        }}
                        slotProps={{
                          textField: {
                            placeholder: "Select Start Date", // Add placeholder text
                            size: "small",
                            fullWidth: true,
                            variant: "outlined",
                            error: errors.trip_start_date, // Highlight field if error exists
                            helperText: errors.trip_start_date
                              ? "Select a Start Date"
                              : "", // Show error message
                            FormHelperTextProps: {
                              className: "errorHelperTextMsg", // Add your custom class here
                            },
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
                                  color: "black", // Black placeholder text
                                  opacity: 1, // Fully visible placeholder
                                },
                              },
                            },
                          },
                        }}
                      />
                    </LocalizationProvider>
                  </div>
                  <div className="col-6 col-md-6">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={selectedEndDate ? dayjs(selectedEndDate) : null} // Ensure value is Dayjs object
                        onChange={(newValue) => {
                          const formattedDate = newValue
                            ? newValue.format("YYYY-MM-DD")
                            : ""; // Format the date
                          setSelectedEndDate(formattedDate); // Update selectedEndDate
                          setFormData((prevFormData) => ({
                            ...prevFormData,
                            trip_end_date: formattedDate, // Update formData
                          }));
                          setErrors((prevErrors) => ({
                            ...prevErrors,
                            trip_end_date: false, // Clear error
                          }));
                        }}
                        minDate={
                          selectedStartDate ? dayjs(selectedStartDate) : dayjs()
                        } // Prevent dates before start date
                        maxDate={dayjs("9999-12-31")} // Maximum date
                        onOpen={() => {
                          if (!selectedEndDate) {
                            const today = dayjs().format("YYYY-MM-DD");
                            setSelectedEndDate(today); // Set today's date if no date selected
                            setFormData((prevFormData) => ({
                              ...prevFormData,
                              trip_end_date: today,
                            }));
                            setErrors((prevErrors) => ({
                              ...prevErrors,
                              trip_end_date: false, // Clear error on open
                            }));
                          }
                        }}
                        slotProps={{
                          textField: {
                            placeholder: "Select an End Date", // Add placeholder text
                            size: "small",
                            fullWidth: true,
                            variant: "outlined",
                            error: errors.trip_end_date, // Highlight field if error exists
                            helperText: errors.trip_end_date
                              ? "Select End Date"
                              : "", // Show error message
                            FormHelperTextProps: {
                              className: "errorHelperTextMsg",
                            },
                            sx: {
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: errors.trip_end_date
                                    ? "red"
                                    : "black",
                                  borderWidth: "1px",
                                  borderRadius: "8px",
                                },
                                "&:hover fieldset": {
                                  borderColor: errors.trip_end_date
                                    ? "red"
                                    : "black",
                                  borderWidth: "1px",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: errors.trip_end_date
                                    ? "red"
                                    : "black",
                                  borderWidth: "1px",
                                },
                                "& input::placeholder": {
                                  color: "black", // Black placeholder text
                                  opacity: 1, // Fully visible placeholder
                                },
                              },
                            },
                          },
                        }}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p
                      className="custom-para mt-2"
                      style={{ fontWeight: "500" }}
                    >
                      Select Time
                    </p>
                  </div>
                  <div className="col-12 mt-n2">
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
                                  "& input::placeholder": {
                                    color: "black", // Black placeholder text
                                    opacity: 1, // Fully visible placeholder
                                  },
                                },
                              },
                              style: { minWidth: "100%" },
                            },
                          }}
                        />
                      </DemoContainer>
                      {errors.trip_time && (
                        <p className="errorHelperTextMsg">Select a Time</p>
                      )}
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <p
                      className="custom-para mt-2"
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
                            borderColor: "black",
                            borderWidth: "1px",
                            borderRadius: "8px",
                          },
                          "&:hover fieldset": {
                            borderColor: "black",
                            borderWidth: "1px",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "black",
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
                        <p className="errorHelperTextMsg">Select a Car Type</p>
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
                            borderColor: "black",
                            borderWidth: "1px",
                            borderRadius: "8px",
                          },
                          "&:hover fieldset": {
                            borderColor: "black",
                            borderWidth: "1px",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "black",
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
                          Select Transmission Type
                        </p>
                      )}
                    </FormControl>
                  </div>
                </div>
                {approximatePrice > 0 && (
                  <div
                    className="mt-2 mb-2"
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      borderRadius: "12px",
                    }}
                  >


                    <i
                      className="bi bi-info-circle text-danger custom-para"
                      data-bs-toggle="modal"
                      data-bs-target="#outstationRates"
                    ></i>{" "}
                    <span>Info</span>
                    <br />
                    <span className="d-flex justify-content-between align-items-center mt-2">
                      <span className="custom-para">
                        Approximate Price {approximatePrice > 0 && ":"}
                      </span>{" "}
                      {approximatePrice > 0 && (
                        <span className="custom-para font-weight-bold">
                          ₹{approximatePrice}
                        </span>
                      )}
                    </span>
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
                  {approximatePrice > 0 && (
                    <span className="d-flex justify-content-between align-items-center">
                      <span className="custom-para">No of Days:</span>{" "}
                      <span className="custom-para font-weight-bold">
                        {formData.no_of_days === 1
                          ? "1 Day (12 hrs)"
                          : `${formData.no_of_days} Days`}
                      </span>
                    </span>
                  )}
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
                        <li>If you release the driver at <span className="font-weight-bold">4 am</span> then next day charges <span className="font-weight-bold">₹1500</span> is applicable</li>
                      </ul>
                    </div>
                    <small
                      data-bs-toggle="modal"
                      data-bs-target="#outstationRates"
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
        {/* Outstation Rates Modal */}
        <OutstationRatesModal />
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

export default OutstationBookingForm;
