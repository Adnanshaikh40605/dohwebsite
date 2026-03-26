"use client";
import React, { useState } from "react";
import axios from "axios";
import Loader from "../component/loader";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

type FormField = "name" | "phone_number" | "email" | "required_service" | "message";

type FormData = Record<FormField, string>;

type Errors = Partial<Record<FormField, string>>;

interface ContactFormProps {
  preSelectedService?: string;
  onSuccess?: () => void;
}

function ContactForm({ preSelectedService, onSuccess }: ContactFormProps = {}) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone_number: "",
    email: "",
    required_service: preSelectedService || "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const [loaderActive, setLoaderActive] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
  ) => {
    const name = e.target.name as FormField;
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhoneNumber = (phone: string) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Errors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone_number.trim())
      newErrors.phone_number = "Mobile number is required.";
    else if (!validatePhoneNumber(formData.phone_number))
      newErrors.phone_number = "Enter a valid 10-digit mobile number.";

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(formData.email))
      newErrors.email = "Enter a valid email address.";

    if (!formData.required_service) newErrors.required_service = "Please select a service.";

    if (!formData.message.trim()) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoaderActive(true);
    setErrors({});
    setErrorMessage("");
    setShowAlert(false);

    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/enquiry/send_email/`;

    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log("Success:", response.data);
        setErrorMessage("");
        setShowAlert(true);

        setFormData({
          name: "",
          phone_number: "",
          email: "",
          required_service: preSelectedService || "",
          message: "",
        });

        // Call onSuccess callback if provided (for modal)
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 2000); // Close modal after 2 seconds
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("An error occurred while submitting the form.");
        setShowAlert(true);
      })
      .finally(() => {
        setLoaderActive(false);
        setTimeout(() => {
          setShowAlert(false);
          setErrorMessage("");
        }, 5000);
      });
  };

  return (
    <>
      {loaderActive && <Loader />}
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {showAlert && errorMessage && (
          <div className={`alert alert-danger fade-in`} role="alert">
            <i className="bi bi-exclamation-circle-fill me-2"></i>
            {errorMessage}
          </div>
        )}
        {showAlert && !errorMessage && (
          <div className={`alert alert-success fade-in`} role="alert">
            <i className="bi bi-check-circle-fill me-2"></i>
            Form submitted successfully!
          </div>
        )}

        <div className="row">
          <div className="col mb-3 pe-0">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              size="small"
              value={formData.name}
              onChange={handleChange}
              sx={{ background: "#ffffff" }}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
          </div>
          <div className="col mb-3">
            <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
              name="phone_number"
              size="small"
              value={formData.phone_number}
              onChange={handleChange}
              sx={{ background: "#ffffff" }}
              inputProps={{ maxLength: 10 }}
              error={Boolean(errors.phone_number)}
              helperText={errors.phone_number}
            />
          </div>
        </div>

        <div className="mb-3">
          <FormControl
            fullWidth
            size="small"
            error={Boolean(errors.required_service)}
            sx={{ background: "#ffffff" }}
          >
            <InputLabel>Driver Service</InputLabel>
            <Select
              value={formData.required_service}
              onChange={handleChange}
              name="required_service"
              label="Driver Service"
            >
              <MenuItem value="Daily Drivers">Daily Drivers</MenuItem>
              <MenuItem value="Hourly Drivers">Hourly Drivers</MenuItem>
              <MenuItem value="Temporary Drivers">Temporary Drivers</MenuItem>
              <MenuItem value="Night Drivers">Night Drivers</MenuItem>
              <MenuItem value="Permanent Drivers">Permanent Drivers</MenuItem>
              <MenuItem value="Outstation Drivers">Outstation Drivers</MenuItem>
            </Select>
            {errors.required_service && (
              <p
                style={{
                  color: "#d32f2f",
                  fontSize: "0.75rem",
                  margin: "3px 14px 0",
                }}
              >
                {errors.required_service}
              </p>
            )}
          </FormControl>
        </div>

        <div className="mb-3">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            size="small"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ background: "#ffffff" }}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
        </div>

        <div className="mb-3">
          <TextField
            id="message"
            label="Message"
            multiline
            fullWidth
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            sx={{ background: "#ffffff" }}
            error={Boolean(errors.message)}
            helperText={errors.message}
          />
        </div>

        <div className="mb-3">
          <button className="btn btn-lg btn-dark w-100" type="submit">
            SEND
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
