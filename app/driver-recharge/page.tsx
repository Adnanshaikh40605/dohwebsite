"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams, notFound } from 'next/navigation';
import axios from 'axios';
import { 
  FaShieldAlt, 
  FaCalendarAlt, 
  FaBolt, 
  FaCheckCircle, 
  FaCrown,
  FaHeadset,
  FaPhoneAlt,
  FaArrowRight
} from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import styles from './recharge.module.css';
import PaymentStatusModal from '@/app/component/PaymentStatusModal';
import RechargeInstructionModal from './RechargeInstructionModal';

interface RechargePlan {
  id: number;
  plan_name: string;
  total_amount: number;
  tax_amount: number;
  no_of_days: number;
  no_of_booking: number;
  package_booking_type: string;
  for_app: boolean;
}

interface ModalMessage {
  title: string;
  msg: string;
  type: 'error' | 'success' | 'warning';
}

const DriverRechargePage = () => {
  const searchParams = useSearchParams();
  const driverIdParam = searchParams.get('driver_id');

  if (!driverIdParam) {
    notFound();
  }

  const [plans, setPlans] = useState<RechargePlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [processing, setProcessing] = useState<number | null>(null);
  const [modalMessage, setModalMessage] = useState<ModalMessage | null>(null);
  const [showInstructionModal, setShowInstructionModal] = useState(false);

  // Helper to persist logs across reloads
  const logToSession = (label: string, data: any) => {
    if (typeof window === 'undefined') return;
    
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = { timestamp, label, data };
    
    // Console log immediately
    console.log(`[${timestamp}] ${label}`, data);

    try {
      const existingLogs = JSON.parse(sessionStorage.getItem('payment_debug_logs') || '[]');
      existingLogs.push(logEntry);
      sessionStorage.setItem('payment_debug_logs', JSON.stringify(existingLogs));
    } catch (e) {
      console.error('Failed to save log to session storage', e);
    }
  };

  useEffect(() => {
    // Show instruction modal every time page loads
    setShowInstructionModal(true);

    // 1. Replay logs from session storage so user sees history after refresh
    if (typeof window !== 'undefined') {
      try {
        const savedLogs = JSON.parse(sessionStorage.getItem('payment_debug_logs') || '[]');
        if (savedLogs.length > 0) {
          console.group('--- PREVIOUS SESSION / PERSISTED LOGS ---');
          savedLogs.forEach((log: any) => {
            console.log(`%c[${log.timestamp}] ${log.label}`, 'color: #ffd700; font-weight: bold;', log.data);
          });
          console.groupEnd();
        }
      } catch (e) {
        console.error('Error reading debug logs', e);
      }
      
      // 2. Log current URL params (HDFC Callback)
      const urlParams = new URLSearchParams(window.location.search);
      const entries = Object.fromEntries(urlParams.entries());
      if (Object.keys(entries).length > 0) {
         logToSession('PAGE RELOADED - HDFC Callback Params:', entries);
      }
    }

    const fetchPlans = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/recharge_plan/`);
        logToSession('API Response [GET recharge-plans]:', response.data);
        
        let plansData = [];
        
        if (Array.isArray(response.data)) {
          plansData = response.data;
        } else if (response.data && Array.isArray(response.data.data)) {
           plansData = response.data.data;
        }

        if (plansData.length > 0) {
          const currentDriverId = (driverIdParam || '').trim();
          
          // Filter plans based on driver ID and test keywords
          const filteredPlans = plansData.filter((p: RechargePlan) => {
            // Rule 1: Plan must be marked for app
            if (!p.for_app) return false;

            const planNameLower = p.plan_name.toLowerCase();
            const isTestPlan = planNameLower.includes('test');
            
            if (isTestPlan) {
              // Rule 2: Test plans are visible ONLY to driver 29309
              return currentDriverId === '29309';
            }
            
            // Standard app plans are visible to everyone
            return true;
          });
          
          // Sort plans: Platinium Test -> Platinium -> Gold -> Bronze
          const sortedPlans = filteredPlans.sort((a: RechargePlan, b: RechargePlan) => {
            const getOrder = (name: string) => {
               const n = name.toLowerCase();
               if (n.includes('test') && (n.includes('platinium') || n.includes('platinum'))) return 0;
               if (n.includes('test')) return 1; // Any other test plan
               if (n === 'platinium' || n === 'platinum') return 2;
               if (n === 'gold') return 3;
               if (n === 'bronze') return 4;
               return 999;
            };

            const orderA = getOrder(a.plan_name);
            const orderB = getOrder(b.plan_name);
            
            if (orderA !== orderB) return orderA - orderB;
            return a.total_amount - b.total_amount;
          });

          setPlans(sortedPlans);
          
          // Log what we found for debugging
          logToSession('Plans successfully filtered & sorted', {
            driver_id: currentDriverId,
            plan_count: sortedPlans.length,
            visible_tests: sortedPlans.filter((p: RechargePlan) => p.plan_name.toLowerCase().includes('test')).map((p: RechargePlan) => p.plan_name)
          });
        } else {
          setError('Failed to load plans');
        }
      } catch (err) {
        setError('Error fetching recharge plans. Please check your connection.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handleBuyPlan = async (plan: RechargePlan) => {
    setProcessing(plan.id);
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const driverId = urlParams.get('driver_id');
      
      const payload: { recharge_plan_id: number; driver_id?: string } = { recharge_plan_id: plan.id };
      if (driverId) {
        payload.driver_id = driverId;
        logToSession('Extracted driver_id:', driverId);
      } else {
        logToSession('No driver_id found in URL', null);
      }
      
      logToSession('Initiating Payment - POST Payload:', payload);
      
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/payments/create-payment-link/`, payload);
      logToSession('API Response [POST create-payment-link]:', response.data);

      if (response.data && response.data.payment_link) {
        // Clear logs before starting new flow if desired, or keep history. Keeping history for now.
        // sessionStorage.removeItem('payment_debug_logs'); 
        window.open(response.data.payment_link, "_self");
      } else {
        setModalMessage({
           title: 'Payment Link Error',
           msg: 'Could not generate a payment link. Please try again.',
           type: 'error'
        });
      }
    } catch (err: any) {
      console.error('Payment initiation failed:', err);
      const data = err.response?.data;
      const errorMsg = data?.message || data?.detail || data?.error || err.message || 'Failed to initiate payment. Please check your connection.';
      setModalMessage({
           title: 'Payment Failed',
           msg: errorMsg,
           type: 'error'
      });
    } finally {
      setProcessing(null);
    }
  };

  const closeModal = () => setModalMessage(null);
  
  const closeInstructionModal = () => {
    setShowInstructionModal(false);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: 'white' }}>
        <div className="spinner-border text-warning" role="status" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
     return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1rem' }}>Connection Issue</h3>
          <p style={{ color: '#666', marginBottom: '1.5rem' }}>{error}</p>
          <button onClick={() => window.location.reload()} className="btn btn-dark" style={{ borderRadius: '50px', padding: '0.5rem 2rem' }}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      
      {/* Modal */}
      <RechargeInstructionModal 
        isOpen={showInstructionModal}
        onClose={closeInstructionModal}
      />

      <PaymentStatusModal 
        isOpen={!!modalMessage}
        title={modalMessage?.title}
        message={modalMessage?.msg}
        type={modalMessage?.type}
        onClose={closeModal}
      />

      {/* Header */}
      <div className={styles.headerWrapper}>
        {/* <div className={styles.smallPill}>
          <span style={{ fontSize: '1.2rem', color: '#FFD700' }}>💳</span> 
          <span className={styles.smallPillText}>Recharge &amp; Start Earning</span>
        </div> */}
        
        <h1 className={styles.title}>
          Driver Recharge <span className={styles.textGradientGold}>Plans</span>
        </h1>
        
        {/* <p className={styles.subtitle}>
          Choose the perfect plan to boost your earnings. Instant activation &amp; secure payments guaranteed.
        </p> */}

        {/* <div className={styles.trustBadge}>
          <div className={styles.shieldIconWrapper}>
            <FaShieldAlt style={{ color: '#16a34a', fontSize: '1.25rem' }} />
          </div>
          <div className={styles.trustTextContainer}>
            <p className={styles.trustTitle}>100% Secure Payment</p>
            <p className={styles.trustSubtitle}>Powered by HDFC Gateway</p>
          </div>
        </div> */}
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {plans.map((plan) => {
          const isLocal = plan.package_booking_type.toLowerCase().includes('local');
          const isPopular = plan.plan_name === 'Platinium'; // Platinium is popular

          return (
            <div key={plan.id} className={styles.cardWrapper}> 
              
              {isPopular && (
                <div className={styles.mostPopularWrapper}>
                  <div className={styles.mostPopularBadge}>
                    <FaCrown size={14} color="#1a1a1a" />
                    <span className={styles.badgeText}>Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`${styles.cardContent} ${isPopular ? styles.premiumShadow : ''}`}>
                
                {/* Header */}
                <div className={styles.cardHeader}>
                  <div className={styles.blob1}></div>
                  <div className={styles.blob2}></div>
                  
                  <div className={styles.packageLabel}>
                     <BsStars size={12} color="#FFD700" className="me-1" />
                     <span className={styles.packageLabelText}>{plan.package_booking_type}</span>
                  </div>
                  
                  <h3 className={styles.planName}>{plan.plan_name}</h3>
                </div>

                {/* Price */}
                <div className={styles.priceSection}>
                  <div className={styles.priceWrapper}>
                    <span className={styles.currency}>₹</span>
                    <span className={styles.amount}>{plan.total_amount}</span>
                  </div>
                  <div className={styles.taxText}>
                    <span>incl. ₹{plan.tax_amount} GST</span>
                  </div>
                </div>

                {/* Features */}
                <div className={styles.featuresWrapper}>
                  <div className={styles.featuresList}>
                    
                    {/* Validity */}
                    <div className={styles.featureItem}>
                      <div className={styles.iconBox}>
                        <FaCalendarAlt size={16} color="#FFD700" /> 
                      </div>
                      <div className={styles.featureText}>
                        <p className={styles.featureTitle}>{plan.no_of_days} Days</p>
                        <p className={styles.featureSubtitle}>Validity Period</p>
                      </div>
                    </div>

                    {/* Bookings */}
                    <div className={styles.featureItem}>
                      <div className={styles.iconBox}>
                        <FaBolt size={16} color="#FFD700" />
                      </div>
                      <div className={styles.featureText}>
                         <p className={styles.featureTitle}>
                           {plan.no_of_booking > 100 ? 'Unlimited' : plan.no_of_booking} Duties
                         </p>
                         <p className={styles.featureSubtitle}>
                           {plan.package_booking_type.toLowerCase().includes('local') 
                             ? 'Local Duties Only' 
                             : 'Local + Outstation + Drop'}
                         </p>
                      </div>
                    </div>

                    {/* Activation */}
                    <div className={styles.featureItem}>
                      <div className={styles.iconBoxGreen}>
                        <FaCheckCircle size={16} color="#16a34a" /> 
                      </div>
                      <div className={styles.featureText}>
                         <p className={styles.featureTitle}>Instant Activation</p>
                         <p className={styles.featureSubtitle}>Start earning immediately</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Button */}
                <div className={styles.buttonWrapper}>
                   <button 
                     type="button"
                     onClick={() => handleBuyPlan(plan)}
                     disabled={processing === plan.id}
                     className={isPopular ? styles.btnPremium : styles.btnStandard}
                   >
                      {processing === plan.id ? 'Processing...' : 'Select Plan'}
                   </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Support Footer - Matches User Snippet Structure */}
      <div className={styles.supportFooter}>
         <div className={styles.supportBlob1}></div>
         <div className={styles.supportBlob2}></div>
         
         <div className={styles.supportContent}>
            <div className={styles.supportLeft}>
               <div className={styles.headsetIconWrapper}>
                  <FaHeadset size={28} />
               </div>
               <div className={styles.supportTexts}>
                  <p className={styles.supportLabel}>Need help with your recharge?</p>
                  <h3 className={styles.supportAction}>Contact Support</h3>
               </div>
            </div>
            
            <button 
               type="button"
               onClick={() => window.open('tel:02243439090', '_self')}
               className={styles.supportBtn}
            >
               <FaPhoneAlt size={16} />
               <span>022-4343-9090</span>
               <FaArrowRight size={18} />
            </button>
         </div>
      </div>

    </div>
  );
};

export default DriverRechargePage;
