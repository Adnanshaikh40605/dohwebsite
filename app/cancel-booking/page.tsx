"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useRouter } from "next/navigation";
import Loader from "../component/loader";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const cancelBooking = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loaderActive, setLoaderActive] = useState(false);
  const bookingId = searchParams.get("bookingId");
  const [formData, setFormData] = useState({
    cancel_booking_reason: "",
    cancel_booking_message: "",
    status: "cancelled",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Check if the reason for cancellation is selected
    if (!formData.cancel_booking_reason) {
      alert("Please select the reason for cancellation");
      return; // Stop form submission
    }

    setLoaderActive(true);

    try {
      const token = localStorage.getItem("token");
      console.log(token);

      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/booking/cancel_booking/${bookingId}/`,
        formData,
        {
          headers: {
            Authorization: `Token ${token}`, // Include the token in the Authorization header
          },
        }
      );
      console.log("Booking request sent:", response.data);
      if (response.status === 200) {
        router.push("/booking-details");
      } else {
        console.log("error in booking");
      }
    } catch (error) {
      console.error("Error sending booking request:", error);
      // setErrorModalVisible(true);
    } finally {
      setLoaderActive(false);
    }
  };
  return (
    <>
      {loaderActive && <Loader />}
      <section className="cancelBooking_section margin-top-bottom">
        <div className="container p-3">
          <div className="cancel-booking-box">
            <p className="p-3 bg-dark text-white w-100">
              Booking ID : {bookingId}
            </p>
            <form className="cancelBooking-form p-4" onSubmit={handleSubmit}>
              <div className="mb-3">
                <FormControl fullWidth size="small">
                  <InputLabel>Reason of cancellation</InputLabel>
                  <Select
                    value={formData.cancel_booking_reason}
                    onChange={handleChange}
                    name="cancel_booking_reason"
                    label="Reason of cancellation"
                  >
                    <MenuItem value="Not in Uniform">Not in uniform</MenuItem>
                    <MenuItem value="Plan got cancel">
                      Plan got cancelled
                    </MenuItem>
                    <MenuItem value="Driver was not looking good">
                      Driver was not looking good
                    </MenuItem>
                    <MenuItem value="Asking advance money">
                      Asking advance money
                    </MenuItem>
                    <MenuItem value="Driver was smelling">
                      Driver was smelling
                    </MenuItem>
                    <MenuItem value="Isolation cover not there">
                      Isolation cover was not there
                    </MenuItem>
                    <MenuItem value="Not reach on time">
                      Not reach on time
                    </MenuItem>
                    <MenuItem value="Driver not received my call">
                      Driver not received the call
                    </MenuItem>
                    <MenuItem value="Booked by mistake">
                      Booked by mistake
                    </MenuItem>
                    <MenuItem value="Charges issue">Charges issue</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="mb-3">
                <TextField
                  id="message"
                  label="Please specify more about cancelling the ride."
                  multiline
                  rows={5}
                  name="cancel_booking_message"
                  value={formData.cancel_booking_message}
                  onChange={handleChange}
                  fullWidth
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-lg btn-danger w-100" type="submit">
                  Cancel Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default cancelBooking;
