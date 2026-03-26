"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NotServingCities = () => {
  const [showService, setShowService] = useState(false);

  // Check sessionStorage on component mount
  useEffect(() => {
    const isClosed = sessionStorage.getItem("notServingCitiesClosed");
    if (!isClosed) {
      setShowService(true); // Show component if it hasn't been closed
    }
  }, []);

  // Function to handle close action
  const handleClose = () => {
    setShowService(false);
    sessionStorage.setItem("notServingCitiesClosed", "true"); // Mark as closed in sessionStorage
  };

  if (!showService) return null; // Return nothing if the component is closed

  return (
    <div className="not-service">
      <div className="not-service-modal">
        <button
          className="closeServiceInfo"
          aria-label="Close Service notification"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 48 48"
            fill="none"
          >
            <g id="cancel">
              <g id="cancel_2">
                <path
                  id="Combined Shape"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.3291 10.2931L29.0251 17.5971C28.9938 17.6284 28.961 17.6571 28.9269 17.6834C28.9002 17.7181 28.871 17.7515 28.8393 17.7833L25.4403 21.1822L26.8539 22.5958L37.7428 11.7069C38.1342 11.3156 38.1342 10.6834 37.7419 10.2922C37.3527 9.90193 36.7192 9.90193 36.3291 10.2931ZM28.2682 24.01L39.1571 13.1211C40.3297 11.9484 40.3297 10.0486 39.1562 8.87798C37.9872 7.70606 36.0847 7.70606 34.9139 8.87979L27.6108 16.1829C27.5791 16.2147 27.5499 16.2481 27.5232 16.2828C27.4891 16.3091 27.4563 16.3378 27.425 16.3691L24.0261 19.768L23.3883 19.1301C23.3784 19.1202 23.3684 19.1107 23.3583 19.1013L13.1527 8.89569C11.9828 7.72286 10.0803 7.72286 8.90954 8.89659C7.74007 10.0691 7.74007 11.9675 8.91044 13.1379L19.7833 24.0108L8.92904 34.8651C8.80498 34.9853 8.63403 35.1885 8.46649 35.4607C7.76939 36.5931 7.76653 37.9264 8.92154 39.0798C10.0972 40.2298 11.4174 40.2314 12.5531 39.5674C12.8256 39.408 13.0302 39.2449 13.1621 39.1163L21.9373 30.3413C22.3278 29.9508 22.3278 29.3176 21.9373 28.9271C21.5467 28.5366 20.9136 28.5366 20.523 28.9271L11.757 37.6931C11.7422 37.7074 11.6609 37.7722 11.5436 37.8408C11.1166 38.0905 10.7697 38.0901 10.351 37.6807C9.91539 37.2458 9.91609 36.921 10.1697 36.5091C10.2407 36.3938 10.3083 36.3134 10.3326 36.2898L24.0261 22.5964L25.4397 24.01L23.4948 25.9549C23.3637 26.086 23.2766 26.2445 23.2335 26.412C23.0117 26.7946 23.0645 27.2928 23.392 27.6203L34.908 39.1363C36.0806 40.3088 37.9797 40.3088 39.1523 39.1363C40.3226 37.9629 40.3226 36.0645 39.1523 34.8941L28.2682 24.01ZM26.8539 25.4242L25.4392 26.839L36.3223 37.7221C36.7137 38.1136 37.3466 38.1136 37.7371 37.723C38.1277 37.3315 38.1277 36.6979 37.738 36.3083L26.8539 25.4242ZM22.6113 21.1828L21.1975 22.5966L10.3247 11.7237C9.93503 11.3341 9.93503 10.7005 10.3256 10.309C10.7148 9.91873 11.3483 9.91873 11.7375 10.309L22.6113 21.1828Z"
                  fill="#000000"
                />
              </g>
            </g>
          </svg>
        </button>
        <div className="service-info-container w-100">
          <div className="service-info-left">
            <h1 className="service-info-head">
              Please select Mumbai or Pune <br />
              as your start or end location
            </h1>
            <p className="service-info-para">
              We operate only in these cities for efficient service. <br />
              Thank you for choosing DriverOnHire!
            </p>
            <div className="service-info-links">
              <span className="d-flex gap-2 align-items-center">
                {/* <Link href="/" aria-label="Back to home">
                  Back to home
                </Link> */}
                <button
                  className="btn btn-warning btn-sm d-none d-md-block d-lg-block d-sm-none"
                  aria-label="Close the information"
                  style={{ width: "15%" }}
                  onClick={handleClose}
                >
                  OKAY
                </button>
                {/* <Link
                  className="d-block text-decoration-none fs-6"
                  href="tel:02243439090"
                  aria-label="Call us at 022 4343 9090"
                >
                  Or call 022 4343 9090
                </Link> */}
              </span>
            </div>
          </div>
          <div className="service-info-right">
            <div className="service-info-wrapper">
              <span className="cloud-1"></span>
              <span className="cloud-2"></span>
              <span className="cloud-3"></span>
              <span className="cloud-4"></span>
              <span className="cloud-5"></span>
              <span className="cloud-6"></span>
              <span className="cloud-7"></span>
              <span className="cloud-8"></span>
              <span className="cloud-9"></span>
              <span className="cloud-10"></span>
              <span className="cloud-11"></span>
              <span className="cloud-12"></span>
              <span className="car"></span>
              <span className="sun"></span>
              <span className="car car-2"></span>
              <span className="car car-3"></span>
              <span className="car car-4"></span>
            </div>
            <button
              className="btn btn-warning btn-sm w-100 d-block d-md-none d-lg-none d-sm-block"
              aria-label="Close the information"
              onClick={handleClose}
            >
              OKAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotServingCities;
