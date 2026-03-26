"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LandingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Store current scroll position
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
      
      // Simple approach: just prevent overflow
      document.body.style.overflow = "hidden";
    } else {
      // Restore body styles
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.getElementById("navbarSupportedContent");
      const toggler = document.querySelector(".navbar-toggler");
      const header = document.querySelector(".landing-header");
      
      if (isMenuOpen && header && 
          !header.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="landing-header" style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#ffffff' }}>
        <div className="landing-navbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <Link className="navbar-brand" href="/">
                    <img src="/logo.svg" alt="Logo" />
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="navbarSupportedContent"
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>

                  <div
                    className={`collapse navbar-collapse sub-menu-bar ${
                      isMenuOpen ? "show" : ""
                    }`}
                    id="navbarSupportedContent"
                    style={{
                      position: isMenuOpen ? 'relative' : 'static',
                      zIndex: isMenuOpen ? 1001 : 'auto'
                    }}
                  >
                    <ul id="nav" className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link
                          className="page-scroll active"
                          href="/"
                          onClick={closeMenu}
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link 
                          href="/blog"
                          onClick={closeMenu}
                        >
                          Blogs
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link 
                          href="#contact"
                          onClick={closeMenu}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default LandingHeader;
