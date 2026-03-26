"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import Loader from "../component/loader";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import LocationSearchInput from "../component/PlaceAutoComplete";
import OutstationRatesModal from "../component/OutstationRatesModal";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Modal,
  Box,
  Typography,
  Button,
} from "@mui/material";
import NotServingCities from "../component/service_unavailablity";
import dayjs from "dayjs";
import Head from "next/head";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import { AuthContext } from "../context/AuthContext";

const OutstationDropBookingForm = () => {
  const { logout } = useContext(AuthContext)!;
  const [formData, setFormData] = useState({
    booking_from: "Web",
    booking_type: "Outstation Drop",
    trip_type: "Outstation Drop",
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
    client_name: "",
  });

  const router = useRouter();
  const [userLatitude, setUserLatitude] = useState(0);
  const [userLongitude, setUserLongitude] = useState(0);
  const [address, setAddress] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [errorMessage, setErrorMessage] = useState("");
  const [errorLoginMessage, setErrorLoginMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [approximatePrice, setApproximatePrice] = useState(0);
  const [loaderActive, setLoaderActive] = useState(false);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedStartDate, setSelectedStartDate] = useState<string>("");
  const [selectedEndDate, setSelectedEndDate] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", message: "" });
  const [timePickerKey, setTimePickerKey] = useState(0);
  const [errors, setErrors] = useState({
    trip_start_date: false,
    trip_end_date: false,
    trip_time: false,
    car_type: false,
    car_transmission: false,
    address: false,
    drop_location: false,
    client_name: false,
    mobile: false,
  });

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

  const handleDateChange = () => {
    const { trip_start_date, trip_end_date, car_type } = formData;

    if (trip_start_date && trip_end_date) {
      const startDate = new Date(trip_start_date);
      const endDate = new Date(trip_end_date);
      const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      // Calculate base price per day based on car type
      let basePrice = 0;
      if (car_type.toLowerCase().includes("luxury")) {
        basePrice = 1400; // Luxury car rate with extra ₹100
      } else {
        basePrice = 1300; // Non-luxury car rate
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
  }, [formData.trip_start_date, formData.trip_end_date, formData.car_type]);

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

      // Formatted time string in HH:MM format
      const formattedTime: string = `${hours}:${minutes}`;

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

  useEffect(() => {
    const fetchGeolocationAndAddress = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setUserLongitude(longitude);
            setUserLatitude(latitude);
            //  Use Google Maps Geocoding API to get address from coordinates
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

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    // setSuccessMessage("");

    // Check if any required field is empty
    if (
      !formData.no_of_days ||
      !formData.car_type ||
      !formData.car_transmission ||
      !address ||
      !dropLocation ||
      !formData.trip_start_date ||
      !formData.trip_end_date ||
      !formData.trip_time ||
      !formData.client_name ||
      !formData.mobile
    ) {
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
      if (!formData.client_name) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          client_name: true,
        }));
      }
      if (!formData.mobile) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          mobile: true,
        }));
      }
      // setErrorMessage("Please fill all the required fields.");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      setIsSubmitting(false);
      return; // Prevent form submission
    }

    const currentDate = new Date().toISOString().split("T")[0];

    // Check if the selected start date is less than the current date
    if (formData.trip_start_date < currentDate) {
      // If selected start date is less than current date, show an alert and return without submitting the form
      alert("Selected date cannot be less than the current date");
      setIsSubmitting(false);
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
      const formWithAddress = {
        ...formDataWithLocation,
        pickup_location: address,
        drop_location: dropLocation,
        visiting_location: dropLocation,
        address: address,
      };

      if (token !== null) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/booking/enquiries/`,
          formWithAddress,
          {
            headers: {
              Authorization: `Token ${token}`, // Include the token in the Authorization header
            },
          }
        );
        if (response.status === 201) {
          setFormData({
            booking_from: "Web",
            booking_type: "Outstation Drop",
            trip_type: "Outstation Drop",
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
            client_name: "",
          });
          setSelectedStartDate("");
          setSelectedEndDate("");
          setSelectedTime(null);
          setTimePickerKey((prevKey) => prevKey + 1);
          setAddress("");
          setDropLocation("");
          setApproximatePrice(0);
          setModalContent({
            title: "Success",
            message: "Enquiry Submitted Successfully!",
          });
          setModalOpen(true);
        } else {
          setModalContent({
            title: "Error",
            message: "An unexpected error occurred. Please try again.",
          });
          setModalOpen(true);
        }
      } else {
        setModalContent({
          title: "Error",
          message: "You must be logged in, if you want to place booking.",
        });
        setModalOpen(true);
      }
    } catch (error) {
      setModalContent({
        title: "Error",
        message: "Please fill all the required fields correctly.",
      });
      setModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <NotServingCities />
      {loaderActive && <Loader />}
      <section className="allBookingForm outstationDropForm margin-top-bottom">
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
              {/* {successMessage && (
                <div className="alert alert-success" role="alert">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  {successMessage}
                </div>
              )} */}
              <h4 className="p-3 mb-2 formHead test">Outstation Drop</h4>
              <form
                className="outstationDropBookingForm"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <div className="row mt-4">
                  <div className=" col-12">
                    <div className="custom-location-input-wrapper-address">
                      <LocationSearchInput
                        value={address}
                        onChange={handleAddressChange}
                        onSelect={handleAddressSelect}
                        placeholder="Enter Address"
                        error={errors.address}
                      />
                      {errors.address && (
                        <p className="errorHelperTextMsg">
                          Please enter a valid address
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
                        placeholder="Enter Drop Location"
                        error={errors.drop_location}
                      />
                      {errors.drop_location && (
                        <p className="errorHelperTextMsg">
                          Please enter a valid drop location
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-2 mt-2">
                  <TextField
                    placeholder="Enter Name"
                    name="client_name"
                    type="text"
                    size="small"
                    value={formData.client_name}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: errors.client_name ? "red" : "black",
                          borderRadius: "8px",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: errors.client_name ? "red" : "#000000",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: errors.client_name ? "red" : "black",
                        },
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "black", // Change placeholder color to black
                        opacity: 1, // Ensure full opacity for placeholder text
                      },
                    }}
                  />
                  {errors.client_name && (
                    <p className="errorHelperTextMsg">Please Enter Name</p>
                  )}
                </div>
                <div className="mb-2 mt-3">
                  <TextField
                    placeholder="Enter Mobile Number"
                    name="mobile"
                    type="tel"
                    size="small"
                    value={formData.mobile}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Ensure the value is numeric and no more than 10 digits
                      if (/^\d{0,10}$/.test(value)) {
                        setFormData((prevFormData) => ({
                          ...prevFormData,
                          mobile: value,
                        }));
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          mobile: false,
                        }));
                      }
                    }}
                    fullWidth
                    inputProps={{
                      maxLength: 10, // Limit input length to 10 characters
                      inputMode: "numeric", // Show numeric keyboard on mobile devices
                      pattern: "[0-9]*", // Restrict input to digits
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: errors.mobile ? "red" : "black",
                          borderRadius: "8px",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: errors.mobile ? "red" : "#000000",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: errors.mobile ? "red" : "black",
                        },
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "black", // Change placeholder color to black
                        opacity: 1, // Ensure full opacity for placeholder text
                      },
                    }}
                  />
                  {errors.mobile && (
                    <p className="errorHelperTextMsg">
                      Please Enter Mobile Number
                    </p>
                  )}
                </div>
                <div className="row align-items-end mb-2 mt-3">
                  <div className="col-12">
                    <p
                      className="custom-para"
                      style={{
                        fontWeight: "500",
                      }}
                    >
                      Select Pickup & Drop Location
                    </p>
                  </div>
                  <div className="col-6 pe-0">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={
                          selectedStartDate ? dayjs(selectedStartDate) : null
                        } // Convert value to Dayjs
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
                            setSelectedStartDate(today); // Set today's date if no date is selected
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
                  <div className="col-6">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={selectedEndDate ? dayjs(selectedEndDate) : null} // Convert value to Dayjs
                        onChange={(newValue) => {
                          const formattedDate = newValue
                            ? newValue.format("YYYY-MM-DD")
                            : "";
                          setSelectedEndDate(formattedDate); // Update end date
                          setFormData((prevFormData) => ({
                            ...prevFormData,
                            trip_end_date: formattedDate,
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
                            setSelectedEndDate(today); // Set today's date if no date is selected
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
                          key={timePickerKey}
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
                        <p className="errorHelperTextMsg">Select a car type</p>
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
                      className="bi bi-info-circle custom-para"
                      data-bs-toggle="modal"
                      data-bs-target="#outstationRates"
                    >
                      {""}Info
                    </i>
                    <br />
                    <span className="d-flex justify-content-between align-items-center mt-2">
                      <span className="custom-para">
                        Approximate Price {approximatePrice > 0 && ":"}
                      </span>{" "}
                      {approximatePrice > 0 && (
                        <span className="custom-para">₹{approximatePrice}</span>
                      )}
                    </span>
                    {approximatePrice > 0 && (
                      <span className="d-flex justify-content-between align-items-center">
                        <span className="custom-para">No of Days:</span>{" "}
                        <span className="custom-para">
                          {formData.no_of_days}
                        </span>
                      </span>
                    )}
                  </div>
                )}
                <button
                  className="btn btn-lg w-100 mt-2"
                  type="submit"
                  disabled={isSubmitting}
                  style={{ backgroundColor: "#FFCE28" }}
                >
                  {isSubmitting ? (
                    <span>Enquiry Submitting...</span>
                  ) : (
                    "Enquire Now"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Outstation Rates Modal */}
        <OutstationRatesModal />
      </section>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
            border: "1px solid #ccc",
            textAlign: "center",
          }}
        >
          {modalContent.title === "Success" ? (
            <>
              <BsCheckCircle size={50} color="green" />
              <Typography variant="h6" sx={{ mt: 2 }}>
                {modalContent.title}
              </Typography>
              <Typography sx={{ mt: 1 }}>
                {modalContent.message} <br />{" "}
                <span className="text-secondary small mt-2">
                  Our Team will get back to you shortly.
                </span>{" "}
              </Typography>
            </>
          ) : (
            <>
              <BsXCircle size={50} color="red" />
              <Typography variant="h6" sx={{ mt: 2 }}>
                {modalContent.title}
              </Typography>
              <Typography sx={{ mt: 1 }}>{modalContent.message}</Typography>
            </>
          )}
          <button
            onClick={handleCloseModal}
            className="btn w-100 mt-3"
            style={{ backgroundColor: "#ffce28", border: "1px solid black" }}
          >
            Close
          </button>
        </Box>
      </Modal>
    </>
  );
};

export default OutstationDropBookingForm;
