"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ShimmerBookingCard from "../component/ShimmerBookingCard";
import html2canvas from "html2canvas";
import { AuthContext } from "../context/AuthContext";

interface Booking {
  id: string;
  trip_start_date: string;
  trip_time?: string;
  trip_type?: string;
  address?: string;
  pickup_location?: string;
  drop_location?: string;
  booking_type?: string;
  no_of_days?: string;
  package?: string;
  car_type?: string;
  car_transmission?: string;
  accepted_driver_name?: string;
  accepted_driver_number?: string;
  status: string;
}

const BookingDetails = () => {
  const { logout } = useContext(AuthContext)!;
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [visibleBookings, setVisibleBookings] = useState<Booking[]>([]);
  const [loaderActive, setLoaderActive] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showCancellationInfo, setShowCancellationInfo] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  const [invoiceData, setInvoiceData] = useState<any | null>(null);
  const [loadingInvoice, setLoadingInvoice] = useState(false);
  const [invoiceError, setInvoiceError] = useState(false);
  const invoiceRef = useRef<HTMLDivElement | null>(null);
  const [cancellationBooking, setCancellationBooking] =
    useState<Booking | null>(null);

  // State for modal
  const [selectedBooking, setSelectedBooking] = useState<any | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false); // Track closing animation

  useEffect(() => {
    const checkToken = async () => {
      setLoaderActive(true);
      const token = localStorage.getItem("token");

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

  const fetchBookings = async (pageNumber: number) => {
    if (!hasMore || loadingMore) return;

    setLoadingMore(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found.");

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/booking/client_all_booking/?page=${pageNumber}`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );

      const fetchedData: Booking[] = response.data.results.data || [];

      if (fetchedData.length > 0) {
        setBookings((prev) => [...prev, ...fetchedData]);
        setVisibleBookings((prev) => [...prev, ...fetchedData.slice(0, 5)]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchBookings(1);
  }, []);

  const fetchInvoice = async (bookingId: string) => {
    setLoadingInvoice(true);
    setInvoiceError(false);
    setInvoiceData(null);
    setShowInvoice(true); // Show modal immediately
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found.");

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/booking/invoice/${bookingId}`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );

      if (response.data && response.data.data) {
        setInvoiceData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching invoice:", error);
      setInvoiceError(true);
    } finally {
      setLoadingInvoice(false);
    }
  };

  const loadMoreBookings = () => {
    if (loadingMore || !hasMore) return;

    setVisibleBookings((prev) => {
      const nextItems = bookings.slice(prev.length, prev.length + 5);
      return [...prev, ...nextItems];
    });

    if (visibleBookings.length + 5 >= bookings.length) {
      fetchBookings(page);
    }
  };

  useEffect(() => {
    if (!loadMoreRef.current) return;

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreBookings();
      }
    });

    observer.current.observe(loadMoreRef.current);

    return () => observer.current?.disconnect();
  }, [visibleBookings, bookings]);
  // Open modal with selected booking
  const handleCardClick = (booking: any) => {
    setSelectedBooking(booking);
    setShowModal(true);
    setClosing(false);
    setShowCancellationInfo(false);
  };

  const handleCloseModal = (event?: any) => {
    // Ensure it closes when clicking outside or close button
    if (!event || event.target.classList.contains("booking-modal-overlay")) {
      setClosing(true); // Start closing animation
      setTimeout(() => {
        setShowModal(false);
        setSelectedBooking(null);
        setShowCancellationInfo(false);
        setClosing(false); // Reset closing animation state
      }, 300); // Match the duration of the closing animation
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("keydown", handleCloseModal);
    } else {
      document.removeEventListener("keydown", handleCloseModal);
    }
    return () => document.removeEventListener("keydown", handleCloseModal);
  }, [showModal]);

  const getInitials = (name?: string) => {
    if (!name) return "N/A"; // Handle empty or undefined values
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  const formatTime = (time?: string) => {
    if (!time) return "N/A"; // Handle empty or undefined values

    const [hours, minutes] = time.split(":");
    const date = new Date();
    date.setHours(Number(hours) || 0);
    date.setMinutes(Number(minutes) || 0);

    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDateTime = (isoString?: string) => {
    if (!isoString) return "N/A"; // Handle empty or undefined values

    const date = new Date(isoString);

    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const shareInvoiceImage = async () => {
    if (!invoiceRef.current) return;

    try {
      // Clone the invoice to avoid affecting UI layout
      const clonedInvoice = invoiceRef.current.cloneNode(true) as HTMLElement;

      // Append to the body temporarily
      clonedInvoice.style.position = "absolute";
      clonedInvoice.style.left = "0";
      clonedInvoice.style.top = "0";
      clonedInvoice.style.width = "100vw";
      clonedInvoice.style.height = "auto";
      clonedInvoice.style.overflow = "visible"; // Ensure it shows all content
      clonedInvoice.style.background = "#fff"; // Ensure proper background color
      clonedInvoice.style.zIndex = "-9999"; // Hide from user view
      document.body.appendChild(clonedInvoice);

      // Wait for the content to fully render before capturing
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Capture full invoice including hidden parts
      const canvas = await html2canvas(clonedInvoice, {
        useCORS: true,
      });

      // Remove the cloned invoice from the DOM after capture
      document.body.removeChild(clonedInvoice);

      const dataUrl = canvas.toDataURL("image/png");

      // Convert Data URL to Blob
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], "invoice.webp", { type: "image/png" });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "Details",
          text: "Here is your invoice from Driveronhire.com",
          files: [file],
        });
      } else {
        alert("Sharing not supported on this device.");
      }
    } catch (error) {
      console.error("Error sharing invoice image:", error);
      alert("Failed to generate invoice image.");
    }
  };

  return (
    <>
      <section className="my_booking_section margin-top-bottom">
        <div className="container p-3">
          <h5 className="mb-3">My Bookings</h5>
          <p
            className="p-2 bg-warning-subtle rounded"
            style={{ border: "1px solid", fontSize: "12px" }}
          >
            <i className="bi bi-info-circle"></i> Please refresh the page after
            a while to get the latest booking status
          </p>

          <div>
            {loaderActive ||
            (bookings.length === 0 && visibleBookings.length === 0) ? (
              Array(5)
                .fill(null)
                .map((_, index) => <ShimmerBookingCard key={`shimmer-loading-${index}`} />)
            ) : visibleBookings.length === 0 ? (
              <div
                className="text-center p-5 d-flex justify-content-center align-items-center rounded"
                style={{ border: "1px dashed #2c2e35", height: "70vh" }}
              >
                <p className="mb-0">No bookings yet. Book a trip now!</p>
              </div>
            ) : (
              visibleBookings.map((booking, index) => (
                <div style={{ marginBottom: "12px" }} key={`booking-${booking.id}-${index}`}>
                  <div
                    className="booking-card"
                    onClick={() => handleCardClick(booking)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <span
                        style={{
                          fontSize: "14px",
                          textAlign: "end",
                          color: "#8c8c8c",
                        }}
                      >
                        Trip Details
                      </span>
                      <span
                        className="status-indicator text-capitalize p-1 rounded-1 d-flex justify-content-center gap-1 align-items-center"
                        style={
                          {
                            "--status-color":
                              booking.status === "pending"
                                ? "#FFCE28"
                                : booking.status === "cancelled"
                                ? "#AE0713"
                                : booking.status === "completed"
                                ? "#12BF0C"
                                : booking.status === "accept"
                                ? "#021F7E"
                                : "#000", // Default color if status is unknown
                            color: "var(--status-color)",
                            fontSize: "14px",
                          } as React.CSSProperties
                        }
                      >
                        {booking.status}
                      </span>
                    </div>
                    <div className="bookingDiv">
                      <div className="align-items-center mt-2">
                        <div>
                          <p
                            className="mb-0 truncate-text"
                            style={{ fontSize: "14px" }}
                          >
                            From:{" "}
                            {booking.trip_type === "Outstation" ||
                            booking.trip_type === "Outstation Drop"
                              ? booking.pickup_location
                              : booking.address}
                          </p>

                          <p
                            className="mb-0 d-flex align-items-center"
                            style={{ fontSize: "12px", color: "#8c8c8c" }}
                          >
                            {booking.trip_start_date}{" "}
                            <span>
                              <i
                                className="fs-2 bi bi-dot"
                                style={{ color: "#000" }}
                              ></i>
                            </span>{" "}
                            {formatTime(booking.trip_time)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div ref={loadMoreRef} className="text-center mt-4">
            {loadingMore && (
              <div className="dot-loader">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Custom Bottom Drawer Modal */}
      {showModal && (
        <div className="booking-modal-overlay" onClick={handleCloseModal}>
          <div
            className={`bottom-sheet-modal pb-5 ${closing ? "closing" : ""} ${
              showInvoice ? "bottom-sheet-full-height" : ""
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent modal content clicks from closing modal
          >
            <div className="modal-header1">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0 p-3 d-flex gap-1 align-items-center">
                  {showInvoice && (
                    <button
                      className="back-btn me-2"
                      onClick={() => setShowInvoice(false)}
                      style={{
                        border: "none",
                        color: "#212529",
                        background: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "16px",
                      }}
                    >
                      <i className="bi bi-arrow-left"></i>{" "}
                      {/* Bootstrap Back Arrow Icon */}
                    </button>
                  )}
                  {showInvoice ? "Details" : "Trip Details"}
                </h6>
                <div className="d-flex align-items-center">
                  <button
                    className="btn p-3"
                    onClick={shareInvoiceImage}
                    style={{
                      display: showInvoice && invoiceData ? "block" : "none", // Hide if no invoice
                    }}
                  >
                    <i className="bi bi-share"></i>
                  </button>

                  <button
                    className="close-btn p-3 fs-1"
                    onClick={() => {
                      setShowInvoice(false); // Reset invoice view on close
                      handleCloseModal();
                    }}
                  >
                    &times;
                  </button>
                </div>
              </div>
            </div>
            {selectedBooking && (
              <div className="modal-content1">
                {!showInvoice ? (
                  <>
                    <div className="modal-trip-layout p-3">
                      <h5 className="d-flex justify-content-between fw-semibold align-items-center">
                        {selectedBooking.trip_type} Trip
                        <span
                          className="status-indicator text-capitalize p-1 rounded-1 d-flex gap-1 align-items-center mb-2"
                          style={
                            {
                              "--status-color":
                                selectedBooking.status === "pending"
                                  ? "#FFCE28"
                                  : selectedBooking.status === "cancelled"
                                  ? "#AE0713"
                                  : selectedBooking.status === "completed"
                                  ? "#12BF0C"
                                  : selectedBooking.status === "accept"
                                  ? "#021F7E"
                                  : "#000", // Default color if status is unknown
                              color: "var(--status-color)",
                              fontSize: "14px",
                            } as React.CSSProperties
                          }
                        >
                          {selectedBooking.status}
                        </span>
                      </h5>
                      <div className="trip-details">
                        {/* Pick-up Section */}
                        <div className="trip-item">
                          <div className="icon-wrapper">
                            <span className="pickup-icon"></span>
                          </div>
                          <div className="trip-info">
                            <p className="trip-title">Pick-up</p>
                            <p className="trip-address">
                              {selectedBooking.trip_type === "Outstation" ||
                              selectedBooking.trip_type === "Outstation Drop"
                                ? selectedBooking.pickup_location
                                : selectedBooking.address}
                            </p>
                            <p className="trip-date">
                              {selectedBooking.trip_start_date} •{" "}
                              {formatTime(selectedBooking.trip_time)}
                            </p>
                          </div>
                        </div>
                        <div className="connector-line">
                          {selectedBooking.trip_type === "One Way" ||
                          selectedBooking.trip_type === "Outstation Drop" ? (
                            <img
                              src="/one-way-icon.svg"
                              style={{ marginLeft: "4.5px" }}
                              alt="One way arrow icon"
                            />
                          ) : (
                            <img
                              src="/round-trip-icon.svg"
                              alt="Round Trip arrow icon"
                            />
                          )}
                        </div>
                        {/* Visiting Location Section */}
                        <div className="trip-item">
                          <div className="icon-wrapper">
                            <span className="visit-icon"></span>
                          </div>
                          <div className="trip-info">
                            <p className="trip-title">Visiting Location</p>
                            <p className="trip-address">
                              {" "}
                              {selectedBooking.visiting_location || "N/A"}
                            </p>
                            <p className="trip-date">
                              {(selectedBooking.trip_end_date || selectedBooking.trip_start_date) + " • "}
                              {formatTime(selectedBooking.trip_time)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ borderTop: "1px solid #2c2e35" }}>
                      <div className="px-3 py-2">
                        <p
                          className="d-flex justify-content-between align-items-center mb-0"
                          style={{ fontSize: "14px" }}
                        >
                          <span>
                            {selectedBooking.booking_type === "Outstation" ||
                            selectedBooking.booking_type === "Outstation Drop"
                              ? "No of days"
                              : "Package"}
                          </span>
                          <span>
                            {selectedBooking.booking_type === "Outstation" ||
                            selectedBooking.booking_type === "Outstation Drop"
                              ? selectedBooking.no_of_days
                              : selectedBooking.package}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div style={{ borderTop: "1px solid #2c2e35" }}>
                      <div className="px-3 py-2">
                        <p
                          className="d-flex justify-content-between align-items-center mb-0"
                          style={{ fontSize: "14px" }}
                        >
                          <span>Car Type</span>
                          <span>{selectedBooking.car_type}</span>
                        </p>
                      </div>
                    </div>
                    <div style={{ borderTop: "1px solid #2c2e35" }}>
                      <div className="px-3 py-2">
                        <p
                          className="d-flex justify-content-between align-items-center mb-0"
                          style={{ fontSize: "14px" }}
                        >
                          <span>Gear Type</span>
                          <span>{selectedBooking.car_transmission}</span>
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  // Invoice View
                  <>
                    <div ref={invoiceRef}>
                      {loadingInvoice ? (
                        <div className="text-center py-5">
                          <div
                            className="spinner-border text-warning"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <p className="mt-3">Fetching bill details...</p>
                        </div>
                      ) : invoiceError ? (
                        <div className="text-center py-5">
                          <p className="text-danger">No bill found</p>
                        </div>
                      ) : invoiceData ? (
                        <>
                          <p
                            className="fw-semibold text-center py-3 mb-0"
                            style={{ borderBottom: "1px solid #ffce28" }}
                          >
                            Trip Fare
                          </p>
                          <p
                            className="text-center py-3 text-capitalize mb-0"
                            style={{ borderBottom: "1px solid #ffce28" }}
                          >
                            Driver Name:{" "}
                            {invoiceData.booking.accepted_driver_name || "N/A"}
                            <br />
                            Date -{" "}
                            {invoiceData.booking.trip_start_date || "N/A"}
                          </p>
                          <div className="modal-invoice-layout">
                            <div className="container py-3">
                              <div className="row mb-2">
                                <div className="col-6">Client Name</div>
                                <div className="col-6 text-capitalize">
                                  : {invoiceData.booking.client_name || "N/A"}
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-6">Booking Type</div>
                                <div className="col-6 text-capitalize">
                                  : {invoiceData.booking.booking_type}
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-6">Booking Date</div>
                                <div className="col-6 text-capitalize">
                                  : {invoiceData.booking.trip_start_date}
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-6">Booking Time</div>
                                <div className="col-6 text-capitalize">
                                  : {formatTime(invoiceData.booking.trip_time)}
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-6">Car Type</div>
                                <div className="col-6 text-capitalize">
                                  : {invoiceData.booking.car_type}
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-6">Trip Start Time</div>
                                <div className="col-6 text-capitalize">
                                  :{" "}
                                  {formatDateTime(
                                    invoiceData.booking.duty_start_time
                                  )}
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-6">Trip End Time</div>
                                <div className="col-6 text-capitalize">
                                  :{" "}
                                  {formatDateTime(
                                    invoiceData.booking.duty_end_time
                                  )}
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-6">Trip Type</div>
                                <div className="col-6 text-capitalize">
                                  : {invoiceData.booking.trip_type}
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-6">Gear Type</div>
                                <div className="col-6 text-capitalize">
                                  : {invoiceData.booking.car_transmission}
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-6">Package</div>
                                <div className="col-6 text-capitalize">
                                  : {invoiceData.booking.package}
                                </div>
                              </div>
                            </div>

                            <div
                              className="container py-3"
                              style={{
                                borderBottom: "1px solid #ffce28",
                                borderTop: "1px solid #ffce28",
                              }}
                            >
                              <div className="row mb-2">
                                <div className="col-6">Pickup Location</div>
                                <div className="col-6 text-capitalize">
                                  :{" "}
                                  {invoiceData.booking.trip_type ===
                                    "Outstation" ||
                                  invoiceData.booking.trip_type ===
                                    "Outstation Drop"
                                    ? invoiceData.booking.pickup_location
                                    : invoiceData.booking.address}
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-6">Visiting Location</div>
                                <div className="col-6 text-capitalize">
                                  : {invoiceData.booking.drop_location || "N/A"}
                                </div>
                              </div>
                            </div>

                            <div
                              className="container py-3"
                              style={{ borderBottom: "1px solid #ffce28" }}
                            >
                              <div className="row mb-2">
                                <div className="col-6">Base Fare</div>
                                <div className="col-6 text-capitalize">
                                  : ₹{invoiceData.base_charge}
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-6">outskirt Charge</div>
                                <div className="col-6 text-capitalize">
                                  : ₹{invoiceData.outskirt_charge}
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-6">Night Allowance</div>
                                <div className="col-6 text-capitalize">
                                  : ₹{invoiceData.night_charge}
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-6">Per Hour Overtime</div>
                                <div className="col-6 text-capitalize">
                                  : ₹{invoiceData.extra_hour_charge}
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-6">Payable Amount</div>
                                <div className="col-6 text-capitalize">
                                  : ₹{invoiceData.total_charge}
                                </div>
                              </div>
                            </div>
                            <div className="container text-center mt-3 py-3">
                              <span
                                className="p-3 rounded d-inline-flex flex-column"
                                style={{ border: "1px solid" }}
                              >
                                PAYABLE AMOUNT
                                <span className="text-warning d-block fw-bold">
                                  ₹{invoiceData.total_charge}
                                </span>
                              </span>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </>
                )}
              </div>
            )}
            {selectedBooking.status === "accept" &&
              selectedBooking.accepted_driver_name && (
                <div style={{ borderTop: "1px solid #2c2e35" }}>
                  <div className="driver-info">
                    <div className="driver-initials">
                      <span>
                        {getInitials(selectedBooking.accepted_driver_name)}
                      </span>
                    </div>
                    <div className="driver-details">
                      <p className="driver-name">
                        {selectedBooking.accepted_driver_name || "N/A"}{" "}
                        {selectedBooking.verified && (
                          <span className="verified-badge">✔</span>
                        )}
                      </p>
                      <p className="driver-license">
                        Verified Licence & Aadhar
                      </p>
                    </div>
                    {/* Call Button - Only Show If Number Exists */}
                    {selectedBooking.accepted_driver_number && (
                      <a
                        href={`tel:${selectedBooking.accepted_driver_number}`}
                        className="call-button"
                      >
                        <i className="bi bi-telephone-fill"></i>
                      </a>
                    )}
                  </div>
                </div>
              )}
            {/* If status is "completed", show "View Bill" (hidden after clicking) */}
            {selectedBooking?.status === "completed" && !showInvoice ? (
              <div className="invoice-section text-center">
                <button
                  className="view-invoice-button btn btn-warning mt-4"
                  style={{ width: "95%" }}
                  onClick={() => fetchInvoice(selectedBooking.id)}
                >
                  View Bill
                </button>
              </div>
            ) : null}
            {(selectedBooking?.status === "accept" ||
              selectedBooking?.status === "pending") && (
              <div className="cancel-section text-center">
                {!showCancellationInfo ? (
                  <button
                    className="cancel-button btn btn-danger mt-4"
                    style={{ width: "95%" }}
                    onClick={() => setShowCancellationInfo(true)}
                  >
                    Cancel Booking
                  </button>
                ) : (
                  <div className="warning-box p-3 border border-danger rounded">
                    <p>
                      <i className="bi bi-exclamation-triangle-fill me-2 text-danger"></i>
                      For booking cancellation, kindly contact the number below.
                    </p>
                    <p className="contact-number text-center">
                      📞 <a href="tel:02243439090">022-4343-9090</a>
                    </p>
                    <p className="cancellation-charges text-center">
                      If you cancel within 1 hour of your scheduled time, a
                      charge of ₹200 will be applicable.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BookingDetails;
