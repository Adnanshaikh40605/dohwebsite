"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../style/SafeEndingBanner.css";
import BookingModal from "./booking_modal";

const SafeEndingBanner = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBookingModal(true);
  };

  const handleCloseModal = () => setShowBookingModal(false);

  return (
    <section className="safe-ending-banner-section">
      <div className="container">
        <div className="safe-ending-banner">
          <div className="image-wrapper">
            <Image
              src="/images/party-safe-premium.png"
              alt="Great Parties Deserve Safe Endings"
              width={800}
              height={500}
              priority
            />
          </div>
          <div className="content-container">
            <h2 className="mx-2">Great Parties Deserve Safe Endings</h2>
            <div className="divider"></div>
            <p className="sub-headline mx-2">
              Why smart party-goers book drivers instead of taking chances.
            </p>
            <p className="tagline mx-2">Your car. Your night. Our professional drive.</p>
            <Link 
              href="#" 
              className="book-btn"
              onClick={handleOpenModal}
            >
              Book a Driver Now
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <BookingModal 
        show={showBookingModal} 
        onClose={handleCloseModal} 
        bookingType="local"
      />
    </section>
  );
};

export default SafeEndingBanner;
