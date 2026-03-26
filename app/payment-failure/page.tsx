"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaTimes, FaCopy, FaCheck } from 'react-icons/fa';
import axios from 'axios';
import styles from '../payment-success/payment.module.css';

const PaymentFailureClient = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id');
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Call status API if order_id exists
    if (orderId) {
      axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/payments/status/?order_id=${orderId}`)
        .catch(err => console.error("Status check failed", err));
    }
  }, [orderId]);

  const handleCopy = () => {
    if (orderId) {
      navigator.clipboard.writeText(orderId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      {/* Background Blobs */}
      <div className={`${styles.blob} ${styles.blobRed} ${styles.blob3} animate-blob`}></div>
      <div className={`${styles.blob} ${styles.blobOrange} ${styles.blob2} animate-blob animation-delay-2000`}></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${styles.card} ${styles.cardRed}`}
      >
        {/* Error Icon */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2 
          }}
          className={`${styles.iconWrapper} ${styles.iconWrapperRed}`}
        >
           <motion.div
             initial={{ rotate: 0 }}
             animate={{ rotate: 90 }}
             transition={{ duration: 0.5, delay: 0.5 }}
             className={styles.absoluteOne}
             style={{ borderColor: '#fee2e2', borderTopColor: '#fecaca' }} /* red-100, red-200 */
           />
           <div className={`${styles.iconInner} ${styles.iconInnerRed}`}>
             <FaTimes color="white" size={30} />
           </div>
        </motion.div>

        {/* Text Content */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={styles.title}
        >
          Payment Failed
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={styles.description}
        >
          We couldn't process your payment. Please try again or use a different payment method.
        </motion.p>

        {/* Order ID Card */}
        {orderId && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className={styles.orderIdBox}
          >
            <p className={styles.orderIdLabel}>Order ID</p>
            <div className={styles.orderIdValueWrapper}>
              <p className={styles.orderIdText}>{orderId}</p>
              <button 
                onClick={handleCopy}
                className={`${styles.copyBtn} ${styles.copyBtnRed}`}
                title="Copy Order ID"
              >
                {copied ? <FaCheck size={14} color="#16a34a" /> : <FaCopy size={14} />}
              </button>
            </div>
          </motion.div>
        )}

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >


          {/* Support Link */}
          <div className={styles.supportLink}>
            <p className={styles.supportText}>
              Need help? <a href="tel:02243439090" className={styles.supportAnchor}>Contact Support</a>
            </p>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default PaymentFailureClient;
