"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';
import styles from './instruction-modal.module.css';

interface RechargeInstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RechargeInstructionModal: React.FC<RechargeInstructionModalProps> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={undefined} // Modal forces user to click button
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Background Blobs */}
            <div className={`${styles.blob} ${styles.blob1}`} />
            <div className={`${styles.blob} ${styles.blob2}`} />

            <div className={styles.modalContent}>
              <div className={styles.header}>
                <div className={styles.iconWrapper}>
                  <FaExclamationTriangle size={20} />
                </div>
                <div>
                    <h2 className={styles.titleMain}>Recharge Information</h2>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>Please read carefully</p>
                </div>
              </div>

              {/* Hindi */}
              <div className={styles.section}>
                <span className={styles.langLabel}>Hindi</span>
                <h3 className={styles.messageTitle}>सूचना</h3>
                <p className={styles.messageBody}>
                  कृपया रिचार्ज करने से पहले सभी विवरण ध्यानपूर्वक पढ़ लें।
                  आप जो रिचार्ज अभी कर रहे हैं, उसकी Date आपके पिछले रिचार्ज की End Date से ही अपडेट होगी।
                  यदि कोई समस्या हो तो अपने RM (Relationship Manager) से संपर्क करें।
                </p>
              </div>

              {/* Marathi */}
              <div className={styles.section}>
                <span className={styles.langLabel}>Marathi</span>
                <h3 className={styles.messageTitle}>सूचना</h3>
                <p className={styles.messageBody}>
                  कृपया रिचार्ज करण्यापूर्वी सर्व तपशील काळजीपूर्वक वाचा.
                  आपण सध्या करत असलेला रिचार्ज, आपल्या मागील रिचार्जच्या End Date पासूनच अपडेट होईल.
                  कोणतीही अडचण असल्यास कृपया आपल्या RM (Relationship Manager) शी संपर्क साधा.
                </p>
              </div>

              {/* English */}
              <div className={styles.section}>
                <span className={styles.langLabel}>English</span>
                <h3 className={styles.messageTitle}>Notice</h3>
                <p className={styles.messageBody}>
                  Please read all details carefully before recharging.
                  The recharge you are making now will be updated from the end date of your previous recharge.
                  If you face any issue, please contact your RM (Relationship Manager).
                </p>
              </div>
            </div>

            <div className={styles.footer}>
              <button className={styles.button} onClick={onClose}>
                I Agree / मैं सहमत हूँ / मी सहमत आहे
              </button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RechargeInstructionModal;
