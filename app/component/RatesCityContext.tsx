"use client";
import React, { createContext, useContext, useState } from "react";

type City = "Mumbai" | "Pune";

type RatesCityContextValue = {
	city: City;
	setCity: (city: City) => void;
};

const RatesCityContext = createContext<RatesCityContextValue | undefined>(undefined);

export const RatesCityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [city, setCity] = useState<City>("Mumbai");
	return (
		<RatesCityContext.Provider value={{ city, setCity }}>
			{children}
		</RatesCityContext.Provider>
	);
};

export const useRatesCity = (): RatesCityContextValue => {
	const ctx = useContext(RatesCityContext);
	if (!ctx) {
		throw new Error("useRatesCity must be used within RatesCityProvider");
	}
	return ctx;
};


