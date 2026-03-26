"use client";
import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "./loader";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { PiCaretDownBold } from "react-icons/pi";

export default function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext)!;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [userLogin, setUserLogin] = useState(false);
  const [isCheckingToken, setIsCheckingToken] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // Run on mount

    window.addEventListener("resize", checkMobile); // Listen for resize events

    return () => window.removeEventListener("resize", checkMobile); // Cleanup
  }, []);

  useEffect(() => {
  const checkAuthAndDelay = async () => {
    const token = localStorage.getItem("token");
    setUserLogin(token !== null);

    // Detect if the device is mobile
    const isMobileDevice = window.innerWidth <= 768;
    setIsMobile(isMobileDevice);

    // Open Profile dropdown by default on mobile
    if (isMobileDevice) {
      setOpenDropdown("profile");
    }

    setIsCheckingToken(false);
  };

  checkAuthAndDelay();

  const handleHeaderUpdate = () => setUserLogin(true);
  window.addEventListener("headerUpdate", handleHeaderUpdate);

  return () => {
    window.removeEventListener("headerUpdate", handleHeaderUpdate);
  };
}, []);

  if (isCheckingToken) {
    return <Loader />;
  }

  const closeNavbar = () => {
    const navbar = document.getElementById("navbarSupportedContent");
    if (navbar) {
      navbar.classList.remove("show");
    }
    setOpenDropdown(null);
  };

  const handleLogout = async () => {
    logout();
    router.replace("/");
    closeNavbar();
  };

  const toggleDropdown = (dropdown: any) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const isDropdownOpen = (dropdown: any) => openDropdown === dropdown;

  return (
    <>
      <nav className="navbar header_section navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand me-0" href="/">
            <span>
              <Image
                className="logo ml-3"
                loading="lazy"
                width={70}
                height={70}
                style={{ width: "100%", height: "auto" }}
                src="/logo.svg"
                alt="Logo"
              />
            </span>
          </Link>
          {/*
          <div style={{ marginLeft: "auto", display: "flex" }}>
            <Link
              href="#mobile_download_section"
              className="btn btn-sm btn-outline-dark d-inline-block d-md-inline-block d-lg-none d-sm-block fs-360"
              style={{ marginLeft: "auto" }}
              onClick={closeNavbar}
            >
              DOWNLOAD APP
            </Link>
            <Link
              href="tel:02243439090"
              className="btn btn-sm btn-warning d-inline-block d-md-inline-block d-lg-none d-sm-block ms-2 call-icon"
              aria-label="Call us at 022 4343 9090"
            >
              <svg
                height="20"
                version="1.1"
                viewBox="0 0 512 512"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M415.9,335.5c-14.6-15-56.1-43.1-83.3-43.1c-6.3,0-11.8,1.4-16.3,4.3c-13.3,8.5-23.9,15.1-29,15.1c-2.8,0-5.8-2.5-12.4-8.2  l-1.1-1c-18.3-15.9-22.2-20-29.3-27.4l-1.8-1.9c-1.3-1.3-2.4-2.5-3.5-3.6c-6.2-6.4-10.7-11-26.6-29l-0.7-0.8  c-7.6-8.6-12.6-14.2-12.9-18.3c-0.3-4,3.2-10.5,12.1-22.6c10.8-14.6,11.2-32.6,1.3-53.5c-7.9-16.5-20.8-32.3-32.2-46.2l-1-1.2  c-9.8-12-21.2-18-33.9-18c-14.1,0-25.8,7.6-32,11.6c-0.5,0.3-1,0.7-1.5,1c-13.9,8.8-24,20.9-27.8,33.2c-5.7,18.5-9.5,42.5,17.8,92.4  c23.6,43.2,45,72.2,79,107.1c32,32.8,46.2,43.4,78,66.4c35.4,25.6,69.4,40.3,93.2,40.3c22.1,0,39.5,0,64.3-29.9  C442.3,370.8,431.5,351.6,415.9,335.5z" />
              </svg>
            </Link>
          </div>
          */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              className="d-show"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 29 22"
              fill="#2C2E35"
            >
              <path
                d="M2 19.8571H27M2 10.9286H27M15 2H27"
                stroke="#2C2E35"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <div
            className="collapse navbar-collapse nav-style-custom mobDrop justify-content-end gap-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  href="/"
                  onClick={closeNavbar}
                >
                  Home
                </Link>
              </li>
              <li
                className={`nav-item dropdown ${
                  isDropdownOpen("service") ? "show" : ""
                }`}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  onClick={() => toggleDropdown("service")}
                  aria-expanded={isDropdownOpen("service")}
                >
                  Driver Service
                  {isMobile && (
                    <PiCaretDownBold
                      role="button"
                      onClick={(e) => {
                        e.preventDefault(); // Prevents redirection
                        e.stopPropagation(); // Stops the event from bubbling up to the parent
                        toggleDropdown("service");
                      }}
                      aria-expanded={isDropdownOpen("service")}
                      style={{ position: "absolute", right: "8px" }}
                    />
                  )}
                </Link>
                <ul
                  className={`dropdown-menu ${
                    isDropdownOpen("service") ? "show" : ""
                  }`}
                >
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/driver-services/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/all-services-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="All services icon"
                      />
                      All Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/daily-drivers/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/daily-drivers-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="Daily driver icon"
                      />
                      Daily Drivers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/permanent-drivers/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/permanent-drivers-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="Permanent driver icon"
                      />
                      Permanent Drivers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/outstation-drivers/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/outstation-drivers-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="Outstation driver icon"
                      />
                      Outstation Drivers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/temporary-drivers/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/temporary-drivers-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="Temporary driver icon"
                      />
                      Temporary Drivers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/hourly-drivers/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/hourly-drivers-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="Hourly driver icon"
                      />
                      Hourly Drivers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/night-drivers/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/night-drivers-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="Night driver icon"
                      />
                      Night Drivers
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`nav-item dropdown ${
                  isDropdownOpen("city") ? "show" : ""
                }`}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  onClick={() => toggleDropdown("city")}
                  aria-expanded={isDropdownOpen("city")}
                >
                  City
                  {isMobile && (
                    <PiCaretDownBold
                      style={{ position: "absolute", right: "8px" }}
                    />
                  )}
                </Link>
                <ul
                  className={`dropdown-menu ${
                    isDropdownOpen("city") ? "show" : ""
                  }`}
                >
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/drivers-in-mumbai/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/city-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="Mumbai city icon"
                      />
                      Mumbai
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/drivers-in-navi-mumbai/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/city-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="Navi mumbai city icon"
                      />
                      Navi Mumbai
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/drivers-in-thane/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/city-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="Thane city icon"
                      />
                      Thane
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/drivers-in-pune/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/city-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="Pune city icon"
                      />
                      Pune
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`nav-item dropdown ${
                  isDropdownOpen("company") ? "show" : ""
                }`}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  onClick={() => toggleDropdown("company")}
                  aria-expanded={isDropdownOpen("company")}
                >
                  Company
                  {isMobile && (
                    <PiCaretDownBold
                      style={{ position: "absolute", right: "8px" }}
                    />
                  )}
                </Link>
                <ul
                  className={`dropdown-menu ${
                    isDropdownOpen("company") ? "show" : ""
                  }`}
                >
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/rates/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/rates-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="Rates icon"
                      />
                      Rates
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/permanent-pricing/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/permanent-drivers-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="Permanent Pricing icon"
                      />
                      Permanent Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/blog/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/blog-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="Blog icon"
                      />
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/contact/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/contact-us-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="Contact us icon"
                      />
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/about/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/about-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="About us icon"
                      />
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/faq/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/faq-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="FAQ icon"
                      />
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="/drivers-job/"
                      onClick={closeNavbar}
                    >
                      <Image
                        src="/driver-icon.svg"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="Driver job icon"
                      />
                      DRIVERS JOB
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`nav-item dropdown ${
                  isDropdownOpen("profile") ? "show" : ""
                }`}
              >
                {isAuthenticated ? (
                  <>
                    <Link
                      className="nav-link profile_after dropdown-toggle"
                      href="#"
                      role="button"
                      onClick={() => toggleDropdown("profile")}
                      aria-expanded={isDropdownOpen("profile")}
                    >
                      <span className="d-inline-block d-md-inline-block d-lg-none d-sm-inline-block me-3">
                        {" "}
                        Profile
                      </span>
                      <i className="bi bi-person-circle fs-3  "></i>
                      {isMobile && (
                        <PiCaretDownBold
                          role="button"
                          onClick={(e) => {
                            e.preventDefault(); // Prevents default link behavior
                            e.stopPropagation(); // Stops event bubbling
                            toggleDropdown("profile"); // Toggles the dropdown
                          }}
                          aria-expanded={isDropdownOpen("profile")}
                          style={{ position: "absolute", right: "8px" }}
                        />
                      )}
                    </Link>
                    <ul
                      className={`dropdown-menu ${
                        isDropdownOpen("profile") ? "show" : ""
                      }`}
                    >
                      <li>
                        <Link
                          className="dropdown-item d-flex align-items-center gap-2"
                          href="/my-profile/"
                          onClick={closeNavbar}
                        >
                          <Image
                            src="/my-profile.svg"
                            loading="lazy"
                            width={40}
                            height={40}
                            alt="Profile icon"
                          />
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item d-flex align-items-center gap-2"
                          href="/booking-details/"
                          onClick={closeNavbar}
                        >
                          <Image
                            src="/my-booking.svg"
                            loading="lazy"
                            width={40}
                            height={40}
                            alt="My booking icon"
                          />
                          My Booking
                        </Link>
                      </li>
                      <li>
                        <button
                          className="dropdown-item d-flex align-items-center gap-2"
                          onClick={handleLogout}
                        >
                          <Image
                            src="/logout.svg"
                            loading="lazy"
                            width={40}
                            height={40}
                            alt="Logout icon"
                          />
                          LOGOUT
                        </button>
                      </li>
                    </ul>
                  </>
                ) : (
                  <Link
                    className="nav-link"
                    href="/otp-login/"
                    onClick={closeNavbar}
                  >
                    Login / Register
                  </Link>
                )}
              </li>
            </ul>
            <span className="d-flex">
              <Link
                id="track-header-call-btn"
                href="tel:02243439090"
                className="btn btn-dark me-3"
              >
                CALL US - 02243439090
              </Link>
              <Link
                className="btn btn-md btn-outline-dark d-none d-md-none d-lg-inline-block d-sm-none"
                href="https://driveronhire.onelink.me/Uy5P/gejeikwj"
                target="_blank"
                id="track-header-app-btn"
              >
                DOWNLOAD OUR APP
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
