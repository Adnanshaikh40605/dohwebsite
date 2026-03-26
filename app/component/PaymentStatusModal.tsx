"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaTimes, FaExclamationTriangle } from 'react-icons/fa';
import styles from './PaymentStatusModal.module.css';

interface PaymentStatusModalProps {
  isOpen: boolean;
  type?: 'success' | 'error' | 'warning';
  title?: string;
  message?: string;
  onClose: () => void;
  buttonText?: string;
  footer?: React.ReactNode;
}

const PaymentStatusModal: React.FC<PaymentStatusModalProps> = ({ 
  isOpen, 
  type = 'error', 
  title, 
  message, 
  onClose, 
  buttonText, 
  footer 
}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheck size={24} />;
      case 'error':
        return <FaTimes size={24} />;
      case 'warning':
        return <FaExclamationTriangle size={24} />;
      default:
        return <FaTimes size={24} />;
    }
  };

  const getButtonText = () => {
    switch (type) {
        case 'success':
            return 'Continue';
        case 'error':
             return 'Try Again';
        default:
            return 'Close';
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Blobs */}
            <div className={`${styles.blob} ${styles.blob1}`} />
            <div className={`${styles.blob} ${styles.blob2}`} />

            {/* Icon */}
            <motion.div 
              className={`${styles.iconWrapper} ${styles[type] || styles.error}`}
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              {getIcon()}
            </motion.div>

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.message}>{message}</p>
              
              <button 
                className={`${styles.button} ${styles[type] || styles.error}`}
                onClick={onClose}
              >
                {buttonText || getButtonText()}
              </button>

              {/* Custom Footer */}
              {footer && (
                <div style={{ marginTop: '1.5rem', borderTop: '1px solid #f0f0f0', paddingTop: '1rem' }}>
                   {footer}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentStatusModal;
