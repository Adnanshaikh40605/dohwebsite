"use client"
import { useEffect } from "react";

export const usePageEffects = () => {
  useEffect(() => {
    // Preloader logic
    const preloader = document.querySelector(".preloader") as HTMLElement | null;
    if (preloader) {
      window.onload = () => {
        setTimeout(() => {
          preloader.style.opacity = "0";
          preloader.style.display = "none";
        }, 500);
      };
    }

    // Sticky header logic
    const handleScroll = () => {
      const header = document.querySelector(
        ".landing-navbar-area"
      ) as HTMLElement | null;
      const logo = document.querySelector(
        ".navbar-brand img"
      ) as HTMLImageElement | null;

      if (header && logo) {
        if (window.pageYOffset > (header.offsetTop || 0)) {
          header.classList.add("sticky");
          logo.src = "/logo.svg";
        } else {
          header.classList.remove("sticky");
          logo.src = "/logo.svg";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Smooth scrolling
    const pageLinks = document.querySelectorAll<HTMLAnchorElement>(".page-scroll");
    pageLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("href");

        // Exclude the home page link
        if (target === "/") {
          window.location.href = target; // Navigate to the home page
          return;
        }

        // Handle internal page links (anchors)
        if (target && target.startsWith("#")) {
          document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
          try {
            const element = document.querySelector(target);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          } catch (error) {
            console.error(`Invalid selector for smooth scrolling: ${target}`, error);
          }
        } else if (target) {
          // Redirect for other links
          window.location.href = target;
        }
      });
    });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
