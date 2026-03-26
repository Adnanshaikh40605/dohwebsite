"use client";
import React, { useState } from "react";
import BookingModal from "./booking_modal";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

const BookingModalButton = ({
  buttonText = "Book Now",
  className = "",
  dataWowDelay = "",
  bookingType = "local",
}) => {
  const [showLocalBooking, setShowLocalBooking] = useState(false);
  const handleShowLocalBooking = () => setShowLocalBooking(true);
  const handleCloseLocalBooking = () => setShowLocalBooking(false);
  const pathname = usePathname(); // Get current route
  return (
    <>
      <button
        style={{
          position: "relative",
          overflow: "hidden", // This ensures the ripple effect stays within the button
        }}
        className={`${className}`}
        data-wow-delay={dataWowDelay}
        onClick={handleShowLocalBooking}
      >
        {buttonText}
      </button>
      {/* Show Call Link ONLY on /driver-services or any sub-route */}
      {pathname.startsWith("/driver-services") && (
        <Link
          href="tel:02243439090"
          aria-label="Call us at 022 4343 9090"
          className="ms-2 btn btn-dark rounded-pill"
          style={{ padding: "12px 18px" }}
          id="track-call-now"
        >
          Call Now
        </Link>
      )}
      <BookingModal show={showLocalBooking} onClose={handleCloseLocalBooking} bookingType={bookingType} />
    </>
  );
};

export default BookingModalButton;
