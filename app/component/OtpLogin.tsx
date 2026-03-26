"use client";

import axios from "axios";
import { useState, useEffect, useContext, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";
import { TextField, InputAdornment } from "@mui/material";
import Loader from "../component/loader";

export default function otpLogin() {
  const { login } = useContext(AuthContext)!;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [userLogin, setUserLogin] = useState<boolean>(false);
  const [loaderActive, setLoaderActive] = useState<boolean>(false);
  const [showOtpModal, setShowOtpModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const inputRefs = useRef<Array<HTMLInputElement | null>>(
    new Array(4).fill(null)
  );
  const showOtpModalRef = useRef<boolean>(false);

  useEffect(() => {
    const queryPhoneNumber = searchParams.get("phone");
    const queryRedirect = searchParams.get("redirect");
    const queryReferrer = searchParams.get("referrer");

    if (queryPhoneNumber) {
      setPhoneNumber(queryPhoneNumber);
    }

    if (queryRedirect) {
      setRedirectUrl(queryRedirect);
      sessionStorage.setItem("redirectUrl", queryRedirect); // Save redirect URL
      
      // Store the original referrer page (where user came from) if not already stored
      const originalReferrer = sessionStorage.getItem("originalReferrer");
      if (!originalReferrer) {
        // Use the referrer parameter from URL, fallback to document.referrer, then default to home
        const referrer = queryReferrer || document.referrer || "/";
        sessionStorage.setItem("originalReferrer", referrer);
      }
    } else {
      const storedRedirect = sessionStorage.getItem("redirectUrl");
      if (storedRedirect) {
        setRedirectUrl(storedRedirect); // Retrieve if previously saved
      }
    }
  }, [searchParams]);

  // Handle browser back button - using popstate event for reliable detection
  useEffect(() => {
    const originalReferrer = sessionStorage.getItem("originalReferrer");
    const redirectUrl = sessionStorage.getItem("redirectUrl");
    
    // Only set up back navigation if we have the necessary data
    if (originalReferrer && redirectUrl) {
      console.log('Setting up browser back button detection');
      console.log('Original referrer:', originalReferrer);
      console.log('Redirect URL:', redirectUrl);
      
      const handlePopState = (event: PopStateEvent) => {
        console.log('🚀 Popstate event triggered - browser back button detected!');
        console.log('Event:', event);
        // If currently on OTP step, go back to phone entry first
        if (showOtpModalRef.current) {
          console.log('Going back from OTP to phone entry screen');
          setShowOtpModal(false);
          setOtp(["", "", "", ""]);
          return;
        }

        // Clean up session storage and redirect to original referrer page
        sessionStorage.removeItem("redirectUrl");
        sessionStorage.removeItem("originalReferrer");
        sessionStorage.removeItem("lastVisitedPage");
        console.log('Redirecting to original referrer:', originalReferrer);
        router.push(originalReferrer);
      };

      // Push a state to the history to make popstate work
      if (typeof window !== 'undefined' && window.history) {
        window.history.pushState({ page: 'otp-login', timestamp: Date.now() }, '', window.location.href);
        console.log('Pushed state to history');
        
        // Add popstate listener
        window.addEventListener('popstate', handlePopState);
        console.log('Added popstate listener');
      }

      // Cleanup
      return () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener('popstate', handlePopState);
          console.log('Removed popstate listener');
        }
      };
    }
  }, [router]);

  // Track OTP modal state for back navigation and add a history state when OTP is shown
  useEffect(() => {
    showOtpModalRef.current = showOtpModal;
    if (showOtpModal && typeof window !== 'undefined' && window.history) {
      // Push a new state so that the first back closes the OTP view
      window.history.pushState({ page: 'otp-step', timestamp: Date.now() }, '', window.location.href);
      console.log('Pushed OTP step state to history');
    }
  }, [showOtpModal]);

  // Fallback detection for cases where popstate doesn't work
  useEffect(() => {
    const checkForBackNavigation = () => {
      const originalReferrer = sessionStorage.getItem("originalReferrer");
      const redirectUrl = sessionStorage.getItem("redirectUrl");
      const lastVisitedPage = sessionStorage.getItem("lastVisitedPage");
      const currentUrl = window.location.href;
      const hasRedirectParam = searchParams.get("redirect");
      
      console.log('=== Fallback Back Navigation Check ===');
      console.log('Original referrer:', originalReferrer);
      console.log('Redirect URL:', redirectUrl);
      console.log('Last visited page:', lastVisitedPage);
      console.log('Current URL:', currentUrl);
      console.log('Has redirect param:', hasRedirectParam);
      
      // Check if we have referrer info but no redirect parameter in URL
      if (originalReferrer && redirectUrl && !hasRedirectParam) {
        console.log('✅ Fallback: Detected browser back navigation - redirecting to:', originalReferrer);
        
        // Clean up session storage
        sessionStorage.removeItem("redirectUrl");
        sessionStorage.removeItem("originalReferrer");
        sessionStorage.removeItem("lastVisitedPage");
        
        // Redirect to original referrer page
        router.push(originalReferrer);
        return true;
      }
      
      // Check if we have lastVisitedPage and it's not a booking page
      if (lastVisitedPage && !lastVisitedPage.includes('booking') && !hasRedirectParam) {
        console.log('✅ Fallback: Detected back navigation via lastVisitedPage - redirecting to:', lastVisitedPage);
        
        // Clean up session storage
        sessionStorage.removeItem("redirectUrl");
        sessionStorage.removeItem("originalReferrer");
        sessionStorage.removeItem("lastVisitedPage");
        
        // Redirect to last visited page
        router.push(lastVisitedPage);
        return true;
      }
      
      // Special case: If we're on OTP login and have referrer param, but no originalReferrer in storage
      // This means user came back to OTP login from booking page
      const urlReferrer = searchParams.get("referrer");
      if (urlReferrer && !originalReferrer && !hasRedirectParam) {
        console.log('✅ Special case: Detected return to OTP login - redirecting to URL referrer:', urlReferrer);
        
        // Clean up session storage
        sessionStorage.removeItem("redirectUrl");
        sessionStorage.removeItem("originalReferrer");
        sessionStorage.removeItem("lastVisitedPage");
        
        // Redirect to URL referrer
        router.push(urlReferrer);
        return true;
      }
      
      console.log('❌ Fallback: No back navigation detected');
      return false;
    };

    // Check immediately on mount with a small delay
    const timer = setTimeout(checkForBackNavigation, 200);

    // Also check periodically to catch any missed back navigation
    const interval = setInterval(checkForBackNavigation, 1000);

    // Also check on window focus (when user comes back to tab)
    const handleFocus = () => {
      setTimeout(checkForBackNavigation, 50);
    };

    // Check on visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setTimeout(checkForBackNavigation, 50);
      }
    };

    // Add event listeners
    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [searchParams, router]);

  const generateOtp = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }
    try {
      setLoaderActive(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/generate_otp/`,
        {
          phone: phoneNumber,
        }
      );
      if (response.status === 201) {
        setErrorMessage(
          "You are not registered. Redirecting to Register Page..."
        );
        setTimeout(() => {
          // Preserve the redirect URL for registration
          const currentRedirectUrl = redirectUrl || sessionStorage.getItem("redirectUrl") || "/";
          router.push(
            `/register?phone=${phoneNumber}&redirect=${encodeURIComponent(
              currentRedirectUrl
            )}`
          );
        }, 3000);
      } else {
        setShowOtpModal(true);
      }
    } catch (error) {
      console.error("Error generating OTP:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoaderActive(false);
    }
  };

  const validateOtp = async (
    e?: React.FormEvent<HTMLFormElement>,
    otpString?: string
  ) => {
    if (e) e.preventDefault();
    const enteredOtp = otpString || otp.join("");

    if (enteredOtp.length !== 4) {
      setErrorMessage("Please enter the complete 4-digit OTP.");
      return;
    }

    try {
      setLoaderActive(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/validate_otp/`,
        { otp: enteredOtp, phone: phoneNumber }
      );

      if (response.status === 200) {
        const token = response.data.token;
        login(token);
        
        // Get the redirect URL and clean up session storage
        const redirectUrl = searchParams.get("redirect") || sessionStorage.getItem("redirectUrl");
        sessionStorage.removeItem("redirectUrl");
        sessionStorage.removeItem("originalReferrer");
        
        // Redirect to the intended page
        router.replace(redirectUrl || "/");
      } else {
        setErrorMessage(response.data.error);
      }
    } catch (error) {
      console.error("Error validating OTP:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoaderActive(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus(); // Move to next input
    }

    if (newOtp.join("").length === 4) {
      validateOtp(undefined, newOtp.join("")); // Call validateOtp with OTP string
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      inputRefs.current[index + 1]?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData("text").trim();
    if (/^\d{4}$/.test(pastedData)) {
      setOtp(pastedData.split(""));
      inputRefs.current[3]?.focus();
      validateOtp(undefined, pastedData);
    }
  };

  const handleBackNavigation = () => {
    // If on OTP step, go back to number entry screen
    if (showOtpModal) {
      setShowOtpModal(false);
      setOtp(["", "", "", ""]);
      return;
    }

    // Otherwise, navigate back to the original page or home if no referrer
    const originalReferrer = sessionStorage.getItem("originalReferrer");
    sessionStorage.removeItem("redirectUrl");
    sessionStorage.removeItem("originalReferrer");
    const backUrl = originalReferrer || "/";
    router.push(backUrl);
  };

  return (
    <>
      {loaderActive && <Loader />}
      <section className="login layout_padding3">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-6 col-lg-6 text-center d-none d-md-block">
              <img
                className="w-75"
                src={showOtpModal ? "/otp-screen.svg" : "/login.svg"}
                alt="login"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 border-design p-4 mx-auto">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="fs-4 mb-0 mr-2">
                  {showOtpModal ? "Enter Verification Code" : "Login"}
                </h1>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                  onClick={handleBackNavigation}
                  style={{ fontSize: "14px" }}
                >
                  ← Back
                </button>
              </div>
              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  <i className="bi bi-exclamation-circle-fill me-2"></i>
                  {errorMessage}
                </div>
              )}
              {/* Show OTP modal if showOtpModal is true */}
              {showOtpModal ? (
                <form onSubmit={validateOtp}>
                  <div className="mb-3">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => {
                          inputRefs.current[index] = el;
                        }}
                        type="tel" // Change this from text to tel
                        inputMode="numeric" // Forces numeric keyboard on mobile
                        pattern="\d*" // Ensures only numbers are accepted
                        value={digit}
                        maxLength={1}
                        className="otp-input"
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onPaste={handlePaste}
                        autoFocus={index === 0}
                      />
                    ))}
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
                    <TextField
                      fullWidth
                      label="Enter your phone number"
                      variant="outlined"
                      type="number"
                      name="phone"
                      inputMode="numeric"
                      value={phoneNumber}
                      onChange={(e) => {
                        const value = e.target.value.slice(0, 10); // Restrict to 10 digits
                        if (/^\d{0,10}$/.test(value)) {
                          setPhoneNumber(value);
                          setErrorMessage(""); // Clear error message
                        }
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">+91</InputAdornment>
                        ),
                      }}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <button className="btn btn-lg btn-dark w-100" type="submit">
                      Send OTP
                    </button>
                    <p className="text-end mt-4">
                      Don't have an account?&nbsp;
                      <Link
                        href={`/register?phone=${phoneNumber}`}
                        className="text-warning"
                      >
                        Register here
                      </Link>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .otp-input {
          width: 50px;
          height: 50px;
          font-size: 20px;
          text-align: center;
          border: 2px solid #ccc;
          border-radius: 5px;
          margin: 0 5px;
        }
      `}</style>
    </>
  );
}
