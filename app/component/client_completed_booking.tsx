"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Loader from "./loader";
import BookingModal from "./booking_modal";

const ClientCompleted = () => {
  const [getbooking, setGetbooking] = useState<any[]>([]);
  const [loaderActive, setLoaderActive] = useState(true);
  const [showLocalBooking, setShowLocalBooking] = useState(false);
  const handleShowLocalBooking = () => setShowLocalBooking(true);
  const handleCloseLocalBooking = () => setShowLocalBooking(false);

  useEffect(() => {
    setLoaderActive(true);
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          headers: {
            Authorization: `Token ${token}`,
          },
        };
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/booking/client_completed_booking`,
          headers
        );
        setGetbooking(response.data.results.data);
        setLoaderActive(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoaderActive(false);
      } finally {
        setLoaderActive(false);
      }
    };

    fetchData();
  }, []);

  const convertTo12HourFormat = (timeString: string) => {
    const date = new Date(`2000-01-01T${timeString}`);
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
    <>
      {loaderActive && <Loader />}
      <section>
        <div className="container pt-4 pb-3">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="content">
                {/* This div block for getting all client booking */}
                <div>
                  {getbooking.length === 0 && (
                    <div
                      className="text-center p-5 d-flex justify-content-center align-items-center rounded"
                      style={{ border: "1px dashed #2c2e35", height: "70svh" }}
                    >
                      <p className="mb-0">
                        No bookings yet. Book a trip now!
                        <span className="d-block mt-3">
                          <button
                            onClick={handleShowLocalBooking}
                            className="btn btn-lg btn-warning"
                          >
                            Book a driver
                          </button>
                        </span>
                      </p>
                    </div>
                  )}
                  <div className="row">
                    {getbooking.map((booking) => (
                      <div className="col-12 mb-2 mt-4" key={booking.id}>
                        <div
                          className="row g-2 booking-card align-items-center"
                          style={{
                            marginLeft: "0px",
                          }}
                        >
                          <span style={{ fontSize: "14px", textAlign: "end" }}>
                            Booking Id: {booking.id}
                          </span>
                          <hr style={{ background: "#000" }} />
                          <div className="col-12 col-md-8 col-lg-8 bookingDiv">
                            <div className="row align-items-center mb-2 mt-2">
                              <div className="col-12 col-md-4 col-lg-4 mb-2">
                                <p className="mb-0">
                                  <strong>Booking Type:</strong>{" "}
                                  {booking.booking_type}
                                </p>
                              </div>
                              <div className="col-12 col-md-4 col-lg-4 mb-2 ">
                                <p className="mb-0">
                                  <strong>
                                    {booking.booking_type === "Outstation" ||
                                    booking.booking_type === "Outstation Drop"
                                      ? "No of days:"
                                      : "Package:"}
                                  </strong>{" "}
                                  {booking.booking_type === "Outstation" ||
                                  booking.booking_type === "Outstation Drop"
                                    ? booking.no_of_days
                                    : booking.package}
                                </p>
                              </div>
                              <div className="col-12 col-md-4 col-lg-4 mb-2">
                                <p className="mb-0">
                                  <strong>Trip Type:</strong>{" "}
                                  {booking.trip_type}
                                </p>
                              </div>
                              <div className="col-12 col-md-4 col-lg-4 mb-2">
                                <p className="mb-0">
                                  <strong>Trip Start Time:</strong>{" "}
                                  {convertTo12HourFormat(booking.trip_time)}
                                </p>
                              </div>

                              <div className="col-12 col-md-4 col-lg-4 mb-2">
                                <p className="mb-0">
                                  <strong>Trip Start Date:</strong>{" "}
                                  {booking.trip_start_date}
                                </p>
                              </div>
                              <div className="col-12 col-md-4 col-lg-4 mb-2">
                                <p className="mb-0">
                                  <strong>Car Type:</strong> {booking.car_type}
                                </p>
                              </div>
                              <div className="col-12 col-md-4 col-lg-4 mb-2">
                                <p className="mb-0">
                                  <strong>
                                    {booking.trip_type === "Outstation" ||
                                    booking.trip_type === "Outstation Drop" ||
                                    booking.trip_type === "roundTrip"
                                      ? "Visiting Location:"
                                      : "Drop Location:"}
                                  </strong>{" "}
                                  {booking.drop_location}
                                </p>
                              </div>
                              <div className="col-lg-8 col-12">
                                <p className="mb-0">
                                  <strong>
                                    {booking.trip_type === "Outstation" ||
                                    booking.trip_type === "Outstation Drop"
                                      ? "Pickup Location:"
                                      : "Address:"}
                                  </strong>{" "}
                                  {booking.trip_type === "Outstation" ||
                                  booking.trip_type === "Outstation Drop"
                                    ? booking.pickup_location
                                    : booking.address}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4">
                            <div>
                              {booking.status === "accept" && (
                                <>
                                  <p>
                                    <strong>Driver : </strong>
                                    {booking.accepted_driver_name}
                                  </p>
                                  <p>
                                    <strong>Number : </strong>
                                    <Link
                                      className="custom-anchor"
                                      href={`tel:${booking.accepted_driver_number}`}
                                    >
                                      {booking.accepted_driver_number}
                                      <i
                                        className="bi bi-telephone-fill float-right px-2"
                                        style={{ borderLeft: "1px solid" }}
                                      ></i>
                                    </Link>
                                  </p>
                                </>
                              )}
                              {booking.status === "completed" && (
                                <>
                                  <p>
                                    <strong>Driver : </strong>
                                    {booking.accepted_driver_name}
                                  </p>
                                </>
                              )}
                            </div>
                            <div>
                              <span
                                className="p-2 rounded-1 d-flex justify-content-center w-100 mb-2"
                                style={{
                                  backgroundColor:
                                    booking.status === "pending"
                                      ? "#FFCE28"
                                      : booking.status === "cancelled"
                                      ? "#DC3E45"
                                      : booking.status === "completed"
                                      ? "#2c2e35"
                                      : booking.status === "accept"
                                      ? "#3F8855"
                                      : "#FFFFFF",
                                  color:
                                    booking.status === "completed"
                                      ? "#FFFFFF"
                                      : booking.status === "cancelled" ||
                                        booking.status === "accept"
                                      ? "#FFFFFF"
                                      : "#212529",
                                }}
                              >
                                Status: {booking.status}
                              </span>
                            </div>
                            {booking.status !== "cancelled" &&
                              booking.status !== "completed" && (
                                <Link
                                  href={{
                                    pathname: "/cancel-booking",
                                    query: { bookingId: booking.id },
                                  }}
                                  className="btn btn-danger w-100 d-block"
                                >
                                  Cancel Booking
                                </Link>
                              )}
                            <Link
                              className="btn btn-warning w-100"
                              href={{
                                pathname: "/feedback/",
                                query: { bookingId: booking.id },
                              }}
                            >
                              Rate driver
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* end getting booking data */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BookingModal triggered when LOCAL card is clicked */}
      <BookingModal show={showLocalBooking} onClose={handleCloseLocalBooking} />
    </>
  );
};

export default ClientCompleted;
