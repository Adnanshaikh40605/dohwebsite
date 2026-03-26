"use client";

import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "@/app/component/ui/doh-loader.json";

const Loader = () => {
  return (
    <>
      <div
        className="d-flex justify-items-center justify-content-center min-vh-100 position-fixed top-0 start-0 end-0 bottom-0 bg-white"
        style={{ zIndex: "1000" }}
      >
        <Lottie style={{ width: 200 }} animationData={loaderAnimation} loop />
      </div>
      {/* <div className="loader-div">
        <div className="loader"></div>
      </div> */}
      {/* <div className="load">
        <div className="dot"></div>
        <div className="outline">
          <span></span>
          <img src="/only-logo.svg" alt="Driveronhire logo" />
        </div>
      </div> */}
      {/* <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          height: "100svh",
          zIndex: "99999",
          background: "#fff8e1",
        }}
      >
        <div className="d-flex h-100 align-items-center justify-content-center">
          <div className="loader-new">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Loader;
