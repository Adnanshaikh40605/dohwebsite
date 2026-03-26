"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

const DriversJob = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    employment_type: "",
    registration_status: "pending",
    age: "",
    years_of_experience: "",
    reference: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error" | "">("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      mobile: "",
      employment_type: "",
      registration_status: "pending",
      age: "",
      years_of_experience: "",
      reference: "",
    });
  };

  const validateMobileNumber = (mobile: string): boolean => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };

  const handleEnquiry = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation check
    if (!formData.name || !formData.mobile || !formData.employment_type) {
      setAlertMessage("Please fill all mandatory fields.");
      setAlertType("error");
      return;
    }
    if (!validateMobileNumber(formData.mobile)) {
      setAlertMessage("Mobile number must be exactly 10 digits.");
      setAlertType("error");
      return;
    }

    setIsSubmitting(true);
    setAlertMessage("");
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/enquiry/refer_driver/`,
        formData
      );
      // Show success message and reset form
      setAlertMessage("Enquiry submitted successfully!");
      setAlertType("success");
      resetForm();
      resetForm();
    } catch (error: any) {
      if (error.response?.status === 400 && error.response?.data?.msg) {
        // Show error message from server response
        setAlertMessage(error.response.data.msg);
      } else {
        setAlertMessage("An error occurred while submitting the form.");
      }
      setAlertType("error");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage("");
        setAlertType("");
      }, 3000); // Hide after 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [alertMessage]);

  return (
    <div className="container">
      <div className=" driver-container row">
        <div className="driver-banner-text col">
          <h1 className="p-5">जुड़ें हमारे साथ!!!</h1>
        </div>
        <div className="driver-enquiry-form col">
          <form
            onSubmit={handleEnquiry}
            style={{
              background: "#fff8df",
            }}
            className="p-3 h-100"
          >
            <h4 className="text-decoration-underline mb-4 fw-bold">
              Enquiry Form
            </h4>
            <div className="box-driver p-5">
              {/* Alert Div */}
              {alertMessage && (
                <div
                  className={`alert ${
                    alertType === "success" ? "alert-success" : "alert-danger"
                  } d-flex align-items-center`}
                  role="alert"
                >
                  <div>
                    {alertType === "success" ? (
                      <i className="bi bi-check-circle-fill me-2"></i>
                    ) : (
                      <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    )}
                  </div>
                  {alertMessage}
                </div>
              )}
              <div className="row g-3">
                <div className="col-12 col-md-6 col-lg-6">
                  <TextField
                    type="text"
                    label="Driver Name"
                    name="name"
                    id="driver_name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <TextField
                    type="number"
                    label="Driver Number"
                    name="mobile"
                    id="mobile"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <TextField
                    type="number"
                    label="Age"
                    name="age"
                    id="age"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <TextField
                    type="number"
                    label="Experience (in years)"
                    name="years_of_experience"
                    id="years_of_experience"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formData.years_of_experience}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    required
                  >
                    <InputLabel>Employment Type</InputLabel>
                    <Select
                      id="employment_type"
                      name="employment_type"
                      label="Employment Type"
                      value={formData.employment_type}
                      onChange={handleSelectChange}
                    >
                      <MenuItem value="Temporary">Temporary</MenuItem>
                      <MenuItem value="Permanent">Permanent</MenuItem>
                      <MenuItem value="Both">Both</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="col">
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    required
                  >
                    <InputLabel>Reference</InputLabel>
                    <Select
                      id="reference"
                      name="reference"
                      label="Reference"
                      value={formData.reference}
                      onChange={handleSelectChange}
                    >
                      <MenuItem value="Google">Google</MenuItem>
                      <MenuItem value="Facebook">Facebook</MenuItem>
                      <MenuItem value="Youtube">Youtube</MenuItem>
                      <MenuItem value="LinkedIn">LinkedIn</MenuItem>
                      <MenuItem value="SMS">SMS</MenuItem>
                      <MenuItem value="Website">Website</MenuItem>
                      <MenuItem value="Play Store">Play Store</MenuItem>
                      <MenuItem value="Instagram">Instagram</MenuItem>
                      <MenuItem value="Whatsapp">Whatsapp</MenuItem>
                      <MenuItem value="Just Dial">Just Dial</MenuItem>
                      <MenuItem value="Poster">Poster</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                      <MenuItem value="Friend Reference">
                        Friend Reference
                      </MenuItem>
                      <MenuItem value="No Parking Board">
                        No Parking Board
                      </MenuItem>
                      <MenuItem value="Sulekha">Sulekha</MenuItem>
                      <MenuItem value="Rikshaw Poster">Rikshaw Poster</MenuItem>
                      <MenuItem value="Driver Reference">
                        Driver Reference
                      </MenuItem>
                      <MenuItem value="Taxi Poster">Taxi Poster</MenuItem>
                      <MenuItem value="Khalapur Food Mall">
                        Khalapur Food Mall
                      </MenuItem>
                      <MenuItem value="Hoarding">Hoarding</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <button
                className="feedback-btn"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Send Enquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DriversJob;
