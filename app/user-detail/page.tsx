"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Loader from "../component/loader";

export default function UserDetail() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const registerUser = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/adduser/`,
        {
          phone: phoneNumber,
          usertype: "Customer",
          password: password,
        }
      );

      if (response.status === 201) {
        setIsRegistered(true);
      } else {
        // Handle error
        console.error("Failed to Register");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (isRegistered) {
      setPopupMessage("You have registered successfully!");

      setTimeout(() => {
        router.push("/otp-login");
      }, 2000);
    }
  }, [isRegistered]);

  return (
    <>
      <section className="login layout_padding3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <img className="w-100" src="/login.svg" alt="login" />
            </div>
            <div className="col-12 col-md-6 col-lg-6 border rounded-5 p-5">
              <h4 className="mb-5">REGISTER</h4>
              <form onSubmit={registerUser}>
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
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <button className="btn btn-lg btn-dark w-100" type="submit">
                    REGISTER
                  </button>
                </div>
              </form>
              {popupMessage && (
                <div className="alert alert-success">
                  <i className="bi bi-check-circle-fill"></i> {popupMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
