"use client";

import React, { useState, useEffect } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { TextField, InputAdornment, IconButton } from "@mui/material";

interface LocationSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSelect: (address: string) => void;
  placeholder?: string;
  error?: boolean;
}

// Wrapper component to ensure Google Maps API is loaded
const PlaceAutocompleteWrapper: React.FC<LocationSearchInputProps> = (props) => {
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    // Check if the Google Maps API is already loaded
    if (typeof window !== 'undefined' && window.google && window.google.maps && window.google.maps.places) {
      setIsGoogleMapsLoaded(true);
      return;
    }

    // Check every 300ms for the API to be loaded (with a timeout)
    const maxAttempts = 20; // 6 seconds total
    let attempts = 0;
    
    const checkInterval = setInterval(() => {
      attempts++;
      
      if (typeof window !== 'undefined' && window.google && window.google.maps && window.google.maps.places) {
        setIsGoogleMapsLoaded(true);
        clearInterval(checkInterval);
      } else if (attempts >= maxAttempts) {
        setLoadError("Google Maps API failed to load. Please refresh the page.");
        clearInterval(checkInterval);
      }
    }, 300);

    return () => clearInterval(checkInterval);
  }, []);

  if (loadError) {
    return <div style={{ color: 'red' }}>{loadError}</div>;
  }

  if (!isGoogleMapsLoaded) {
    return <TextField 
      placeholder={props.placeholder || "Loading location search..."}
      fullWidth
      size="small"
      disabled
    />;
  }

  return <LocationSearchInput {...props} />;
};

const LocationSearchInput: React.FC<LocationSearchInputProps> = ({
  value,
  onChange,
  onSelect,
  placeholder = "Enter 4 letters to search your location",
  error = false,
}) => {
  // Function to bold the text until the first comma
  const highlightUntilComma = (description: string, query: string) => {
    const commaIndex = description.indexOf(",");
    const boldText =
      commaIndex !== -1 ? description.slice(0, commaIndex) : description;
    const remainingText =
      commaIndex !== -1 ? description.slice(commaIndex) : "";

    return (
      <>
        <strong>{boldText}</strong>
        {remainingText}
      </>
    );
  };

  return (
    <PlacesAutocomplete
      value={value}
      onChange={(inputValue) => {
        onChange(inputValue); // Always allow updates
      }}
      onSelect={(address) => {
        onSelect(address);
        // Hide keyboard after selecting a value
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement) activeElement.blur();
      }}
      searchOptions={{ componentRestrictions: { country: "in" } }}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <TextField
            {...getInputProps({
              placeholder: placeholder || "Enter Full Address",
              className: "location-search-input",
              // required: true,
              fullWidth: true,
            })}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: error ? 'red' : 'black',
                  borderRadius: '8px',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: error ? 'red' : '#000000', 
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: error ? 'red' : 'black',
                },
                "& input::placeholder": {
                  color: "black", // Black placeholder text
                  opacity: 1, // Fully visible placeholder
                },
              },
            }}
            size="small"
            variant="outlined"
            aria-label={placeholder}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {value && (
                    <IconButton
                      onClick={() => onChange("")}
                      aria-label="Clear input"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                        style={{ width: "20px", height: "20px" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
          <div className="autocomplete-dropdown-container">
            {value.length >= 4 && loading && <div>Searching...</div>}
            {value.length < 4 && (
              <div
                // style={{
                //   fontSize: "12px",
                //   fontStyle: "italic",
                //   padding: "5px 10px",
                // }}
              >
              </div>
            )}
            {value.length >= 4 &&
              suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#ffce28" : "#f9f9f9",
                  padding: "5px 15px",
                  marginTop: "5px",
                  cursor: "pointer",
                  fontSize: "12px",
                };

                return (
                  <div
                    {...getSuggestionItemProps(suggestion, { style })}
                    key={suggestion.placeId}
                  >
                    <span>
                      {highlightUntilComma(suggestion.description, value)}
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

// Export the wrapper instead of the component directly
export default PlaceAutocompleteWrapper;
