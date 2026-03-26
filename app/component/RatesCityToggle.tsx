"use client";
import React from "react";
import { useRatesCity } from "./RatesCityContext";

const RatesCityToggle: React.FC = () => {
	const { city, setCity } = useRatesCity();

	return (
		<>
			<div className="d-flex justify-content-center my-4">
				<div className="bg-white border rounded-pill p-1 shadow-sm d-inline-flex align-items-center">
					<button
						type="button"
						className={`btn rounded-pill px-4 py-2 fw-semibold ${city === "Mumbai" ? "btn-warning" : "btn-light text-dark"}`}
						aria-selected={city === "Mumbai"}
						onClick={() => setCity("Mumbai")}
					>
						<i className="bi bi-geo-alt-fill me-2" /> Mumbai
					</button>
					<button
						type="button"
						className={`btn rounded-pill px-4 py-2 fw-semibold ${city === "Pune" ? "btn-warning" : "btn-light text-dark"}`}
						aria-selected={city === "Pune"}
						onClick={() => setCity("Pune")}
					>
						<i className="bi bi-geo-alt me-2" /> Pune
					</button>
				</div>
			</div>
			<p className="text-center text-muted mb-4">Showing rates for <span className="fw-semibold text-dark">{city}</span></p>
		</>
	);
};

export default RatesCityToggle;


