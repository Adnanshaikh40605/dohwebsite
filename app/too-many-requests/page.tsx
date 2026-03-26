"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaClock, FaArrowLeft, FaSyncAlt } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function TooManyRequestsContent() {
  const searchParams = useSearchParams();
  const driverId = searchParams.get('driver_id');
  const retryAfter = searchParams.get('retry_after');
  
  // Use the time passed from middleware, fallback to 300 if missing
  const initialSeconds = retryAfter ? parseInt(retryAfter) : 300;
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    // If the URL param changes (e.g. user refreshed and middleware recalculated), update state
    if (retryAfter) {
      setSeconds(parseInt(retryAfter));
    }
  }, [retryAfter]);

  useEffect(() => {
    // If we can get the actual time from a cookie/param, we would, but 5 mins is a safe label
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="card shadow border-0 bg-white p-4 text-center mx-3"
        style={{ maxWidth: '400px', borderRadius: '1rem' }}
      >
        <div className="mb-3">
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="d-inline-block p-3 rounded-circle bg-warning bg-opacity-10"
          >
            <FaClock size={40} className="text-warning" />
          </motion.div>
        </div>

        <h1 className="fw-bold mb-2" style={{ fontSize: '1.5rem', color: '#1a1a1a' }}>
          Hold on a second!
        </h1>
        
        <p className="text-muted mb-3 px-2 small">
          To ensure your data is processed securely and to prevent any duplicate transactions, 
          this page is temporarily locked. Please try again after the countdown.
        </p>

        <div className="bg-light rounded-pill py-2 px-4 d-inline-block mb-3">
          <span className="fw-bold text-dark fs-5">
            {formatTime(seconds)}
          </span>
        </div>

        <div className="d-grid gap-2">
          {seconds === 0 ? (
            <Link 
              href={`/driver-recharge${driverId ? `?driver_id=${driverId}` : ''}`} 
              className="btn btn-warning btn-lg rounded-pill d-flex align-items-center justify-content-center gap-2 py-3 fw-bold shadow-sm"
              style={{ color: '#1a1a1a', backgroundColor: '#FFD700', borderColor: '#FFD700' }}
            >
              <FaSyncAlt size={16} />
              <span>Go Back to Recharge</span>
            </Link>
          ) : (
             <div className="text-muted small py-2">
               Please wait for the timer to complete...
             </div>
          )}
          
          <p className="small text-muted mt-3 mb-0">
            Need urgent help? <a href="tel:02243439090" className="text-decoration-none fw-bold">Contact Support</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function TooManyRequests() {
  return (
    <Suspense fallback={
      <div className="container min-vh-100 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    }>
      <TooManyRequestsContent />
    </Suspense>
  );
}
