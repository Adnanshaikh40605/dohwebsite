"use client";
import React from "react";
import { useRatesCity } from "./RatesCityContext";

const CityRate: React.FC<{ mumbai: string; pune: string }> = ({ mumbai, pune }) => {
	const { city } = useRatesCity();
	return <>{city === "Pune" ? pune : mumbai}</>;
};

export default CityRate;


