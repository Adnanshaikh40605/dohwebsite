"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loader from "../component/loader";

export default function GenerateOTP() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(""); // Add state for OTP
  const [userLogin, setUserLogin] = useState(false);
  const [loaderActive, setLoaderActive] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);

  const generateOtp = async (e: any) => {
    e.preventDefault(); // Prevent the form from submitting
    try {
      setLoaderActive(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/generate_otp/`,
        {
          phone: phoneNumber,
        }
      );
      console.log("response data: ", response.data);
      setShowOtpModal(true);

      // Handle the response, maybe show a success message or handle errors
    } catch (error) {
      console.error("Error generating OTP:", error);
    } finally {
      setLoaderActive(false);
    }
  };

  const validateOtp = async (e: any) => {
    e.preventDefault(); // Prevent the form from submitting
    try {
      setLoaderActive(true);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/validate_otp/`,
        {
          otp: otp,
          phone: phoneNumber,
        }
      );
      console.log(otp);

      const token = response.data.token;
      localStorage.setItem("token", token);

      if (response.status === 200) {
        setUserLogin(true);
        console.log("login successful");
        setLoaderActive(true);
        router.replace("/booking");

        // Update the header navigation to show the logout button
        window.dispatchEvent(new Event("headerUpdate"));
      } else {
        // Handle error
        console.error("Failed to Login");
      }
    } catch (error) {
      console.error("Error validating OTP:", error);
    } finally {
      setLoaderActive(false);
    }
  };

  return (
    <>
      {loaderActive && <Loader />}
      <section className="login layout_padding3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <img className="w-100" src="/login.svg" alt="login" />
            </div>
            <div className="col-12 col-md-6 col-lg-6 border rounded-5 p-5">
              <h4 className="mb-5">LOGIN</h4>
              {/* Show OTP modal if showOtpModal is true */}
              {showOtpModal ? (
                <form onSubmit={validateOtp}>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="otp"
                      placeholder="Enter OTP"
                      required
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-lg btn-dark w-100" type="submit">
                      Validate OTP
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={generateOtp}>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="number"
                      name="phone"
                      placeholder="Enter your phone number"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <button className="btn btn-lg btn-dark w-100" type="submit">
                      Generate OTP
                    </button>
                    <p className="text-end mt-4">
                      {" "}
                      Don't have an account ? &nbsp;
                      <Link href="/register/" className="text-warning">
                        Create here
                      </Link>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
