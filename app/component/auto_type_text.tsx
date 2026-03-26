"use client";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const AutoTypeText = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensure Typewriter renders after initial paint

    // Check if the device is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the 768px threshold as needed
    };

    handleResize(); // Initial check on mount
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up listener
    };
  }, []);

  if (!mounted) {
    return null; // Return nothing while mounting
  }

  // Render static text for mobile devices, no component should render
  if (isMobile) {
    return <span>PROFESSIONAL DRIVER</span>;
  }

  // Render the Typewriter component for non-mobile devices
  return (
    <Typewriter
      options={{
        strings: [
          "EXPERIENCED DRIVER",
          "PROFESSIONAL DRIVER",
          "POLICE VERIFIED DRIVER",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default AutoTypeText;
