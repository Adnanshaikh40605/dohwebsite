"use client";
import React from "react";

const BookingSucessAlert = () => {
  return (
    <>
      <div className="main-container">
        <div className="check-container">
          <svg
            className="check-svg"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Grey Circle Background */}
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="#ccc" /* Grey initial stroke */
              strokeWidth="5"
              fill="none"
              style={{
                animation: "fade-out 0.5s ease-in 2s forwards",
              }}
            />

            {/* Animated Spinner Circle */}
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="#ffce28" /* Yellow for spinner */
              strokeWidth="5"
              fill="none"
              strokeDasharray="314" /* 2 * π * r */
              strokeDashoffset="314"
              style={{
                animation:
                  "spinner 0.8s linear forwards, fade-out 0.5s ease-in 0.8s forwards",
              }}
            />

            {/* Green Circle Background */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="green" /* Green background for check */
              style={{
                opacity: 0,
                animation: "fill-green 0.5s ease-in 1s forwards",
              }}
            />

            {/* Checkmark Path */}
            <path
              d="M40 60L55 75L80 45"
              stroke="white" /* White checkmark */
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="80"
              strokeDashoffset="80"
              style={{
                animation: "checkmark-draw 0.5s ease-out 1s forwards",
              }}
            />
          </svg>
        </div>
        <h6 className="mt-3">Booking Successful !!!</h6>

        {/* Inline Styles for Animation */}
        <style jsx>{`
          .main-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            color: #333; /* Dark text for contrast */
          }

          @keyframes spinner {
            0% {
              stroke-dashoffset: 314;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }

          @keyframes fade-out {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          @keyframes fill-green {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes checkmark-draw {
            0% {
              stroke-dashoffset: 80;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default BookingSucessAlert;
