"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import StarRating from "../component/StarRating";
import { useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const Feedback: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [formErrors, setFormErrors] = useState<{
    driver_rating?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string>("");

  const REASONS: Record<number, string[]> = {
    5: ["Not In Uniform"],
    4: ["Not In Uniform", "Too Talkative"],
    3: [
      "Not In Uniform",
      "Chewing Tobacco",
      "Too Talkative",
    ],
    2: [
      "Not In Uniform",
      "Chewing Tobacco",
      "Too Talkative",
      "Charged Extra Amount",
    ],
    1: [
      "Not In Uniform",
      "Too Talkative",
      "Chewing Tobacco",
      "Rash Driving",
      "Charged Extra Amount",
    ],
  };

  const handleFeedbackChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFeedback(e.target.value);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    setFormErrors((prev) => ({ ...prev, driver_rating: "" })); // Clear rating error on selection
    setSelectedReasons([]); // Clear selected reasons when rating changes
  };

  const handleReasonToggle = (reason: string) => {
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    let errors = {};

    // Validate rating
    if (rating === 0) {
      errors = { ...errors, driver_rating: "Please provide a rating." };
    }

    setFormErrors(errors);

    // If there are no errors, proceed with submission
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      try {
        const token = localStorage.getItem("token");

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/booking/booking_feedback/${bookingId}/`, // Submit feedback with bookingId
          {
            driver_rating: rating,
            feedback_reasons: selectedReasons,
            driver_feedback: feedback,
          }
        );

        if (response.status === 201) {
          console.log("Feedback submitted:", response.data);
          router.push("/thank-you"); // Redirect to a Thank You page after submission
        } else {
          console.log("Error in submitting feedback");
        }
      } catch (error: any) {
        if (error.response) {
          const { status, data } = error.response;

          if (status === 400) {
            setAlertMessage(data.message || "You have already given feedback.");
          } else if (status === 404) {
            setAlertMessage(data.message);
          } else {
            setAlertMessage("An unexpected error occurred. Please try again.");
          }
        } else {
          console.error("Error sending feedback request:", error);
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div
      className={`service-feedback ${rating < 3 ? "feedback-expanded" : ""}`}
    >
      <div className="feedback-container">
        <h1 className="feedback-h1 mb-2 mb-md-3">Give feedback</h1>
        <p className="feedback-para mb-3">
          Your thoughts are valuable in helping improve our service.
        </p>

        <img
          className="feedback-logo"
          src="/logo.svg"
          alt="Driver on hire logo"
          height="40" style={{ width: "130px", height: "auto" }}
        />

        <form onSubmit={handleSubmit}>
          {/* Star Rating Component */}
          <StarRating rating={rating} onChange={handleRatingChange} />
          {!!formErrors.driver_rating && (
            <p className="error-text">{formErrors.driver_rating}</p>
          )}

          <AnimatePresence>
            {rating > 0 && !!REASONS[rating] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div style={{ margin: "10px 0" }}>
                  <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                    What went wrong?
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {REASONS[rating] &&
                      REASONS[rating].map((reason) => (
                        <Chip
                          key={reason}
                          label={reason}
                          onClick={() => handleReasonToggle(reason)}
                          color={
                            selectedReasons.includes(reason)
                              ? "primary"
                              : "default"
                          }
                          variant={
                            selectedReasons.includes(reason)
                              ? "filled"
                              : "outlined"
                          }
                          clickable
                          sx={{
                            height: "auto",
                            "& .MuiChip-label": {
                              display: "block",
                              whiteSpace: "normal",
                            },
                            padding: "5px 0",
                          }}
                        />
                      ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <TextField
            id="feedback-message"
            label="Tell us about your experience...."
            multiline
            size="small"
            rows={4}
            fullWidth
            value={feedback}
            onChange={handleFeedbackChange}
            margin="normal"
            sx={{
              "& .MuiInputBase-root": {
                minHeight: "110px", // Set a fixed height to prevent initial shrinking
                height: "auto",
              },
            }}
          />
          {alertMessage && (
            <div className="alert m-0 alert-danger">
              <i className="bi bi-exclamation-circle-fill me-2"></i>
              {alertMessage}
            </div>
          )}

          <button
            className="feedback-btn"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Send Feedback"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
