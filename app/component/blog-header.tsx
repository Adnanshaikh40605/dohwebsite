import React, { useState, useEffect } from "react";
import Link from "next/link";

const BlogHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light`}
        style={{
          background: "#fff",
          transition: "box-shadow 0.3s ease-in-out",
          borderBottom: isScrolled ? "1px solid #000" : "none", // Dynamically set border
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        <div className="container">
          <Link href="/" className="navbar-brand ml-3">
            <img src="/logo.svg" alt="Logo" height="40" style={{ width: "130px", height: "auto" }} />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
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
            className={`collapse navbar-collapse nav-style-custom ${
              isMenuOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link href="/" className="text-dark" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link href="/blog/" className="text-dark" onClick={closeMenu}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="https://driveronhire.onelink.me/Uy5P/gejeikwj"
                  className="btn btn-sm btn-warning"
                  onClick={closeMenu}
                >
                  Download App
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BlogHeader;
