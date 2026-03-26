"use client";

import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TextField, InputAdornment } from "@mui/material";
import Loader from "./loader";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const RegisterForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [loaderActive, setLoaderActive] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState<"success" | "error" | "">("");
  const [isCheckingToken, setIsCheckingToken] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  // Function to push events to dataLayer
  const pushToDataLayer = (eventData: any) => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(eventData);
    }
  };

  // Setup Intersection Observer for form visibility tracking
  useEffect(() => {
    if (!formRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            pushToDataLayer({
              event: "registration_form_submit",
              gtm: {
                elementId: entry.target.id || "unknown",
                elementClasses: entry.target.className,
                elementTarget: "",
                triggers: "202226596_20",
                visibleRatio: Math.round(entry.intersectionRatio * 100),
                visibleTime: 0,
                visibleFirstTime: Date.now(),
                visibleLastTime: Date.now(),
                uniqueEventId: Math.floor(Math.random() * 1000000),
              },
              phone_number: phoneNumber, // Add phone number
              first_name: firstName, // Add first name
            });
          }
        });
      },
      {
        threshold: [0.5],
      }
    );

    observer.observe(formRef.current);

    return () => observer.disconnect();
  }, [phoneNumber, firstName]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.back();
    } else {
      // router.push("/otp-login");
      setIsCheckingToken(false);
    }
  }, [router]);

  useEffect(() => {
    const queryPhoneNumber = searchParams.get("phone");
    const queryRedirect = searchParams.get("redirect");

    if (queryPhoneNumber) {
      setPhoneNumber(queryPhoneNumber);
    }

    if (queryRedirect) {
      sessionStorage.setItem("redirectUrl", queryRedirect); // Save redirect URL
    }
  }, [searchParams]);

  // Generate a random password
  const generatePassword = (length = 12) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  useEffect(() => {
    // Set the generated password on initial load
    setPassword(generatePassword());
  }, []);

  const sanitizePhoneNumber = (number: string) => {
    // Remove leading zeroes
    return number.replace(/^0+/, "");
  };

  const registerUser = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoaderActive(true);

    const sanitizedPhone = sanitizePhoneNumber(phoneNumber);

    pushToDataLayer({
      event: "registration_form_submit",
      form_id: "registered-form",
      phone_number: sanitizedPhone,
      first_name: firstName,
    });

    if (!/^\d{10}$/.test(sanitizedPhone)) {
      setPopupMessage(
        "Invalid phone number. Please enter a valid 10-digit number."
      );
      setPopupType("error");
      setLoaderActive(false);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/adduser/`,
        {
          phone: sanitizedPhone,
          usertype: "Customer",
          first_name: firstName,
          password: password,
        }
      );

      if (response.data.msg === "Number already exists") {
        // Number already exists, redirect to OTP login
        setPopupMessage("Number already exists. Redirecting to login...");
        setPopupType("error");
        setTimeout(() => {
          const storedRedirect = sessionStorage.getItem("redirectUrl");
          router.push(
            `/otp-login?phone=${sanitizedPhone}&redirect=${encodeURIComponent(
              storedRedirect || "/"
            )}`
          );
        }, 2000);
      } else {
        // Registration successful
        setPopupMessage("Registration successful!");
        setPopupType("success");
        setTimeout(() => {
          const storedRedirect = sessionStorage.getItem("redirectUrl");
          router.push(
            `/otp-login?phone=${sanitizedPhone}&redirect=${encodeURIComponent(
              storedRedirect || "/"
            )}`
          );
        }, 3000);
      }
    } catch (error) {
      setPopupMessage("Error occurred during registration. Please try again.");
      setPopupType("error");
    } finally {
      setLoaderActive(false);
    }
  };

  useEffect(() => {
    if (isRegistered) {
      setPopupMessage("You have registered successfully!");
      setPopupType("success");

      // Redirect to OTP login page after 5 seconds
      const timer = setTimeout(() => {
        router.push("/otp-login");
      }, 5000);

      // Cleanup the timer on unmount
      return () => clearTimeout(timer);
    }
  }, [isRegistered, router]);

  if (isCheckingToken) {
    return <Loader />;
  }

  return (
    <div>
      {loaderActive && <Loader />}
      <section className="login layout_padding3">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-6 col-lg-6 text-center d-none d-md-block">
              <img className="w-75" src="/register.svg" alt="Register" />
            </div>
            <div className="col-12 col-md-6 col-lg-6 border-design p-5 mx-auto">
              <h1 className="fs-4 mb-4">REGISTER</h1>
              <form onSubmit={registerUser} id="registered-form">
                <div className="mb-3">
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    name="first_name"
                    label="Enter your Name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    id="register-name"
                  />
                </div>
                {/* For user phone number */}
                <div className="mb-3">
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    name="phone"
                    label="Enter your phone number"
                    required
                    value={phoneNumber}
                    id="register-number"
                    onChange={(e) => {
                      let value = e.target.value;
                      // Ensure the input is numeric and does not exceed 10 digits
                      if (/^\d*$/.test(value)) {
                        if (value.length > 10) {
                          value = value.slice(0, 10);
                        }
                        setPhoneNumber(value);
                      }
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="mb-3">
                  <button className="btn btn-lg btn-dark w-100" type="submit">
                    REGISTER
                  </button>
                </div>
              </form>
              {popupMessage && (
                <div
                  className={`alert ${
                    popupType === "success"
                      ? "alert-success register-success"
                      : "alert-danger"
                  }`}
                >
                  <i
                    className={`bi  ${
                      popupType === "success"
                        ? "bi-check-circle-fill"
                        : " bi-exclamation-circle-fill"
                    }`}
                  ></i>{" "}
                  {popupMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterForm;
