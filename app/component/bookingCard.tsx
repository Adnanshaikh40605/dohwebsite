"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BookingModal from "./booking_modal";

const BookingCard = () => {
  const [showLocalBooking, setShowLocalBooking] = useState(false);
  const [showOutstationBooking, setShowOutstationBooking] = useState(false);
  const [showOutstationDropBooking, setShowOutstationDropBooking] = useState(false);
  const [selectedBookingType, setSelectedBookingType] = useState("");

  const handleShowLocalBooking = () => {
    setSelectedBookingType("local");
    setShowLocalBooking(true);
  };

  const handleShowOutstationBooking = () => {
    setSelectedBookingType("outstation");
    setShowOutstationBooking(true);
  };

  const handleShowOutstationDropBooking = () => {
    setSelectedBookingType("outstation-drop");
    setShowOutstationDropBooking(true);
  };

  const handleCloseLocalBooking = () => setShowLocalBooking(false);
  const handleCloseOutstationBooking = () => setShowOutstationBooking(false);
  const handleCloseOutstationDropBooking = () => setShowOutstationDropBooking(false);

  return (
    <>
      <div className="booking-Card">
        <div className="row">
          <div className="col-6 card-1 d-flex justify-content-center text-center">
            <div className="bookCard">
              <div
                onClick={handleShowLocalBooking}
                style={{ cursor: "pointer" }}
                id="localBooking"
              >
                <div className="card-inner">
                  <div className="card-image">
                    <Image
                      src="/card1.webp"
                      alt="Local driver booking"
                      fill
                      priority
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <h2 className="card-title">LOCAL</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 card-2 d-flex justify-content-center text-center">
            <div className="bookCard">
              <div
                onClick={handleShowOutstationBooking}
                style={{ cursor: "pointer" }}
                id="outstationBooking"
              >
                <div className="card-inner">
                  <div className="card-image">
                    <Image
                      src="/card2.webp"
                      alt="Outstaion driver booking"
                      fill
                      priority
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <h2 className="card-title">OUTSTATION</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 card-3 d-flex justify-content-center text-center">
            <div className="bookCard">
              <div
                onClick={handleShowOutstationDropBooking}
                style={{ cursor: "pointer" }}
                id="outstationDropBooking"
              >
                <div className="card-inner">
                  <div className="card-image">
                    <Image
                      src="/card3.webp"
                      alt="Outstaion drop driver booking"
                      fill
                      loading="lazy"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <h2 className="card-title">OUTSTATION DROP</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 card-4 d-flex justify-content-center text-center">
            <div className="bookCard">
              <Link href="/permanent-drivers/" id="permanentBooking">
                <div className="card-inner">
                  <div className="card-image">
                    <Image
                      src="/card4.webp"
                      alt="Permanent driver booking"
                      fill
                      loading="lazy"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <h2 className="card-title">PERMANENT</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* BookingModal triggered when LOCAL card is clicked */}
      <BookingModal 
        show={showLocalBooking} 
        onClose={handleCloseLocalBooking} 
        bookingType="local"
      />
      
      {/* BookingModal triggered when OUTSTATION card is clicked */}
      <BookingModal 
        show={showOutstationBooking} 
        onClose={handleCloseOutstationBooking} 
        bookingType="outstation"
      />
      
      {/* BookingModal triggered when OUTSTATION DROP card is clicked */}
      <BookingModal 
        show={showOutstationDropBooking} 
        onClose={handleCloseOutstationDropBooking} 
        bookingType="outstation-drop"
      />
    </>
  );
};

export default BookingCard;
