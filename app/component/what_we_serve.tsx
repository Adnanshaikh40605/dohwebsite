"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "./loader";

const WhatWeServe = () => {
  const [loaderActive, setLoaderActive] = useState(false);

  const handleClick = () => {
    setLoaderActive(true);
  };

  const handleRedirect = () => {
    setLoaderActive(false);
  };

  const h3Style = {
    fontSize: "16px",
  };

  useEffect(() => {
    window.addEventListener("load", handleRedirect);
    return () => window.removeEventListener("load", handleRedirect);
  }, []);
  return (
    <>
      {loaderActive && <Loader />}
      <div className="whatWeServe">
        <div className="card-container">
          <div className="service-card">
            <Link href="/hourly-drivers/" onClick={handleClick}>
              <div className="card--display">
                <Image
                  src="/hourly-drivers.svg"
                  loading="lazy"
                  width={70}
                  height={70}
                  style={{ width: "50%", height: "auto" }}
                  alt="Icon representing Hourly Drivers"
                />
                <h3 style={h3Style} className="text-uppercase mt-4">
                  Hourly Drivers
                </h3>
              </div>
              <div className="card--hover">
                <h3
                  style={h3Style}
                  className="text-uppercase p-2 border-bottom border-secondary"
                >
                  Hourly Drivers
                </h3>
                <p>
                  Hourly drivers offer transportation services on an hourly
                  basis. It is suitable for those who need to attend conferences
                  and other events.
                </p>
              </div>
            </Link>
            <div className="card--border"></div>
          </div>
        </div>
        <div className="card-container">
          <div className="service-card">
            <Link href="/outstation-drivers/" onClick={handleClick}>
              <div className="card--display">
                <Image
                  src="/outstation-drivers.svg"
                  loading="lazy"
                  width={70}
                  height={70}
                  style={{ width: "50%", height: "auto" }}
                  alt="Icon representing Outstation Drivers"
                />
                <h3 style={h3Style} className="text-uppercase mt-4">
                  Outstation Drivers
                </h3>
              </div>
              <div className="card--hover">
                <h3
                  style={h3Style}
                  className="text-uppercase p-2 border-bottom border-secondary"
                >
                  Outstation Drivers
                </h3>
                <p>
                  Outstation drivers accompany clients on journeys outside their
                  hometowns, towns, or cities. They are skilled at handling
                  various situations and providing a reliable travel experience.
                </p>
              </div>
            </Link>
            <div className="card--border"></div>
          </div>
        </div>
        <div className="card-container">
          <div className="service-card">
            <Link href="/daily-drivers/" onClick={handleClick}>
              <div className="card--display">
                <Image
                  src="/daily-drivers.svg"
                  loading="lazy"
                  width={70}
                  height={70}
                  style={{ width: "50%", height: "auto" }}
                  alt="Icon representing Daily Drivers"
                />
                <h3 style={h3Style} className="text-uppercase mt-4">
                  Daily Drivers
                </h3>
              </div>
              <div className="card--hover">
                <h3
                  style={h3Style}
                  className="text-uppercase p-2 border-bottom border-secondary"
                >
                  Daily Drivers
                </h3>
                <p>
                  Daily drivers are hired for a single day or specific
                  occasions. They are useful when a dedicated driver is required
                  for events, appointments, or special occasions.
                </p>
              </div>
            </Link>
            <div className="card--border"></div>
          </div>
        </div>
        <div className="card-container">
          <div className="service-card">
            <Link href="/temporary-drivers/" onClick={handleClick}>
              <div className="card--display">
                <Image
                  src="/temporary-drivers.svg"
                  loading="lazy"
                  width={70}
                  height={70}
                  style={{ width: "50%", height: "auto" }}
                  alt="Icon representing Temporary Drivers"
                />
                <h3 style={h3Style} className="text-uppercase mt-4">
                  Temporary Drivers
                </h3>
              </div>
              <div className="card--hover">
                <h3
                  style={h3Style}
                  className="text-uppercase p-2 border-bottom border-secondary"
                >
                  Temporary Drivers
                </h3>
                <p>
                  To cover for unavailable regular drivers or during periods of
                  high demand, they are hired for a short duration to offer
                  flexibility and support when there is a shortage of workforce.
                </p>
              </div>
            </Link>
            <div className="card--border"></div>
          </div>
        </div>
        <div className="card-container">
          <div className="service-card">
            <Link href="/night-drivers/" onClick={handleClick}>
              <div className="card--display">
                <Image
                  src="/night-drivers.svg"
                  loading="lazy"
                  width={70}
                  height={70}
                  style={{ width: "50%", height: "auto" }}
                  alt="Icon representing Night Drivers"
                />
                <h3 style={h3Style} className="text-uppercase mt-4">
                  Night Drivers
                </h3>
              </div>
              <div className="card--hover">
                <h3
                  style={h3Style}
                  className="text-uppercase p-2 border-bottom border-secondary"
                >
                  Night Drivers
                </h3>
                <p>
                  To cover for unavailable regular drivers or during periods of
                  high demand, they are hired for a short duration to offer
                  flexibility and support when there is a shortage of workforce.
                </p>
              </div>
            </Link>
            <div className="card--border"></div>
          </div>
        </div>
        <div className="card-container">
          <div className="service-card">
            <Link href="/permanent-drivers/" onClick={handleClick}>
              <div className="card--display">
                <Image
                  src="/permanent-drivers.svg"
                  loading="lazy"
                  width={70}
                  height={70}
                  style={{ width: "50%", height: "auto" }}
                  alt="Icon representing Permanent Drivers"
                />
                <h3 style={h3Style} className="text-uppercase mt-4">
                  Permanent Drivers
                </h3>
              </div>
              <div className="card--hover">
                <h3
                  style={h3Style}
                  className="text-uppercase p-2 border-bottom border-secondary"
                >
                  Permanent Drivers
                </h3>
                <p>
                  Permanent drivers work for individuals, families, or
                  organisations on a long-term basis. They manage the client's
                  pick-up and drop-off preferences, schedules, and so on.
                </p>
              </div>
            </Link>
            <div className="card--border"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeServe;
