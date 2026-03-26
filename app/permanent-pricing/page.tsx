"use client";

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { 
  FaShieldAlt, 
  FaCalendarAlt, 
  FaCheckCircle, 
  FaPhoneAlt,
  FaArrowRight,
  FaTimes,
  FaCrown,
  FaHeadset,
  FaBolt,
  FaSearch
} from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import styles from './pricing.module.css';
import PaymentStatusModal from '@/app/component/PaymentStatusModal';
import { AuthContext } from '@/app/context/AuthContext';

interface MembershipPlan {
  id: string;
  name: string;
  amount: number;
  gst: number;
  total: number;
  validity: string;
  days: number;
  isPopular?: boolean;
  isTest?: boolean;
}

const PermanentPricingPage = () => {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext?.isAuthenticated ?? false;

  const [plans] = useState<MembershipPlan[]>([
    {
      id: 'plan_12m',
      name: '12 Months Membership',
      amount: 8000,
      gst: 1440,
      total: 9440,
      validity: '12 Months',
      days: 365,
      isPopular: true
    },
    {
      id: 'plan_6m',
      name: '6 Months Membership',
      amount: 6000,
      gst: 1080,
      total: 7080,
      validity: '6 Months',
      days: 180,
      isPopular: false
    },
    {
      id: 'plan_test',
      name: 'Testing Plan',
      amount: 1,
      gst: 1,
      total: 2,
      validity: 'Trial',
      days: 1,
      isTest: true
    }
  ]);

  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan | null>(null);
  const [showModal, setShowModal] = useState(false);
  
  // Client Form State
  const [clientId, setClientId] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientMobile, setClientMobile] = useState('');
  const [clientGst, setClientGst] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  
  const [isClientFetched, setIsClientFetched] = useState(false);
  const [lookupLoading, setLookupLoading] = useState(false);
  const [gstLoading, setGstLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [errorModal, setErrorModal] = useState<{title: string, msg: string, type: 'error' | 'success'} | null>(null);

  useEffect(() => {
    if (showModal) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      // Reset form when modal closes
      resetForm();
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [showModal]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchUserProfile();
    }
  }, [isAuthenticated]);

  const resetForm = () => {
    setClientId('');
    setClientName('');
    // Removed setClientMobile('') to keep pre-filled data persistent
    setClientGst('');
    setCompanyName('');
    setAddress('');
    setIsClientFetched(false);
  };

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/singleprofile/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      // Changed condition to check for status 200 or 202
      if ((response.status === 200 || response.status === 202) && response.data.data) {
        const phone = response.data.data.phone || '';
        setClientMobile(phone);
        // If pre-filled number is 10 digits, trigger lookup immediately
        if (phone.replace(/\D/g, '').length === 10) {
          handleMobileLookup(phone.replace(/\D/g, ''));
        }
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleMobileLookup = async (mobile: string) => {
    setLookupLoading(true);
    
    // Clear previous fields before search
    setClientId('');
    setClientName('');
    setClientGst('');
    setCompanyName('');
    setAddress('');

    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/permanent/permanent-client-by-mobile/?mobile=${mobile}`);
      
      if (response.data && response.data.id) {
        const d = response.data;
        setClientId(d.id.toString());
        setClientName(d.name || '');
        setClientGst(d.gst_number || '');
        setCompanyName(d.compney_name || ''); // Using user's spelling
        setAddress(d.address || '');
      }
      setIsClientFetched(true);
    } catch (err: any) {
      // Even if not found, we show the form to enter new details
      setIsClientFetched(true);
      if (err.response?.status !== 404 && err.response?.data?.detail !== "No PermanentClient matches the given query.") {
        console.error("Lookup error:", err);
      }
    } finally {
      setLookupLoading(false);
    }
  };

  const handleGstLookup = async (gst: string) => {
    if (gst.length !== 15) return;

    // GST validation regex
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    if (!gstRegex.test(gst)) {
      alert("Invalid GST Number format");
      return;
    }
    
    setGstLoading(true);
    try {
      const response = await axios.get(`/api/gst-lookup?gst=${gst}`);
      
      // Corrected parsing based on user's API response structure
      const details = response.data?.data?.[0];
      if (details) {
        setCompanyName(details.tradeName || details.legalName || '');
        
        const adr = details.principalAddress?.address;
        if (adr) {
          const fullAddress = [
            adr.buildingNumber,
            adr.buildingName,
            adr.floorNumber,
            adr.street,
            adr.location,
            adr.district,
            adr.stateCode,
            adr.pincode
          ].filter(Boolean).join(', ');
          setAddress(fullAddress);
        }
      } else {
        alert("GST details not found in response");
      }
    } catch (err: any) {
      console.error("GST API error:", err);
      // Only alert on real errors, not "not found"
      if (err.response?.status !== 404) {
        alert(err.response?.data?.message || "Error fetching GST details.");
      }
    } finally {
      setGstLoading(false);
    }
  };

  const handlePlanClick = (plan: MembershipPlan) => {
    setSelectedPlan(plan);
    setShowModal(true);
    // If authenticated, always fetch/refresh user details to ensure fields are pre-filled
    if (isAuthenticated) {
      fetchUserProfile();
    }
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) return;
    
    if (!clientName || !clientMobile) {
      alert("Please fill in name and mobile");
      return;
    }

    setProcessing(true);
    try {
      let finalClientId = clientId;

      // Final check: if we don't have a clientId, try fetching one last time by mobile 
      // to avoid duplicates if the lookup was skipped or pending
      if (!finalClientId) {
        try {
          const lookupResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/permanent/permanent-client-by-mobile/?mobile=${clientMobile}`);
          if (lookupResponse.data && lookupResponse.data.id) {
            finalClientId = lookupResponse.data.id.toString();
            setClientId(finalClientId); // Sync state
            setClientName(lookupResponse.data.name || clientName); // Use existing name if available
          }
        } catch (err) {
          // If 404, we continue to create new client
          console.log("No existing client found, proceeding with registration");
        }
      }

      // Step 1: Check if client exists, then PATCH (update) or POST (create)
      if (finalClientId) {
        // Update existing client details
        const updatePayload = {
          name: clientName,
          gst_number: clientGst,
          compney_name: companyName,
          address: address,
        };
        await axios.patch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/permanent/permanent-client/${finalClientId}/`, updatePayload);
      } else {
        // Create new client
        const clientPayload = {
          name: clientName,
          mobile: clientMobile,
          gst_number: clientGst,
          compney_name: companyName,
          address: address,
        };

        const clientResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/permanent/permanent-client/`, clientPayload);
        finalClientId = clientResponse.data?.data?.id;
      }

      // Step 2: Generate payment link
      const paymentPayload = {
        client_id: finalClientId,
        client_name: clientName,
        client_mobile: clientMobile,
        amount: selectedPlan.total.toString()
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/payments/create-permanent-payment-link/`,
        paymentPayload
      );

      if (response.data && response.data.payment_link) {
        window.open(response.data.payment_link, "_self");
      } else {
        setErrorModal({
          title: 'Error',
          msg: 'Failed to generate payment link. Please try again.',
          type: 'error'
        });
      }
    } catch (err: any) {
      console.error("Process failed:", err);
      setErrorModal({
        title: 'Submission Failed',
        msg: err.response?.data?.message || err.message || 'Something went wrong',
        type: 'error'
      });
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className={styles.container}>
      <PaymentStatusModal 
        isOpen={!!errorModal}
        title={errorModal?.title}
        message={errorModal?.msg}
        type={errorModal?.type}
        onClose={() => setErrorModal(null)}
      />

      {/* Header */}
      <div className={styles.headerWrapper}>
        <h1 className={styles.title}>
          Permanent Driver <span className={styles.textGradientGold}>Plans</span>
        </h1>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {plans
          .filter(plan => !plan.isTest || clientMobile === '9372792693' || clientMobile === '8850838058')
          .map((plan) => (
          <div key={plan.id} className={styles.cardWrapper}> 
            
            {plan.isPopular && (
              <div className={styles.mostPopularWrapper}>
                <div className={styles.mostPopularBadge}>
                  <FaCrown size={14} color="#1a1a1a" />
                  <span className={styles.badgeText}>Most Popular</span>
                </div>
              </div>
            )}

            <div className={`${styles.cardContent} ${plan.isPopular ? styles.premiumShadow : ''}`}>
              
              <div className={styles.cardHeader}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
                
                <div className={styles.packageLabel}>
                   <BsStars size={12} color="#FFD700" className="me-1" />
                   <span className={styles.packageLabelText}>PERMANENT</span>
                </div>
                
                <h3 className={styles.planName}>{plan.name}</h3>
              </div>

              <div className={styles.priceSection}>
                <div className={styles.priceWrapper}>
                  <span className={styles.currency}>₹</span>
                  <span className={styles.amount}>{plan.total}</span>
                </div>
                <div className={styles.taxText}>
                  <span>incl. ₹{plan.gst} GST</span>
                </div>
              </div>

              <div className={styles.featuresWrapper}>
                <div className={styles.featuresList}>
                  
                  <div className={styles.featureItem}>
                    <div className={styles.iconBox}>
                      <FaCalendarAlt size={16} color="#FFD700" /> 
                    </div>
                    <div className={styles.featureText}>
                      <p className={styles.featureTitle}>{plan.validity}</p>
                      <p className={styles.featureSubtitle}>Validity Period</p>
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <div className={styles.iconBox}>
                      <FaBolt size={16} color="#FFD700" />
                    </div>
                    <div className={styles.featureText}>
                       <p className={styles.featureTitle}>Free Replacement</p>
                       <p className={styles.featureSubtitle}>Unlimited guarantee</p>
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <div className={styles.iconBoxGreen}>
                      <FaCheckCircle size={16} color="#16a34a" /> 
                    </div>
                    <div className={styles.featureText}>
                       <p className={styles.featureTitle}>Verified Drivers</p>
                       <p className={styles.featureSubtitle}>Police Verification Certificate & Reference Checks</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className={styles.buttonWrapper}>
                 <button 
                   type="button"
                   onClick={() => handlePlanClick(plan)}
                   className={plan.isPopular ? styles.btnPremium : styles.btnStandard}
                 >
                    Select Plan
                 </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h2 className={styles.modalTitle}>Confirm Details</h2>
                <p className={styles.modalSubtitle} style={{ marginBottom: '0.75rem' }}>Verify your information before payment.</p>
              </div>
              <button onClick={() => setShowModal(false)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                <FaTimes size={20} color="#666" />
              </button>
            </div>

            <form onSubmit={handlePayment} style={{ touchAction: 'auto' }}>
              <div className={`${styles.modalFormGrid} ${isClientFetched ? styles.modalFormGridFetched : ''}`}>
                <div className={`${styles.formGroup} ${isClientFetched ? styles.fullWidthOnDesktop : ''}`}>
                  <label className={styles.label}>Mobile Number</label>
                  <input 
                    type="tel" 
                    className={styles.input} 
                    value={clientMobile}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      if (value.length <= 10) {
                        setClientMobile(value);
                        if (value.length === 10) {
                          handleMobileLookup(value);
                        } else {
                          setIsClientFetched(false);
                        }
                      }
                    }}
                    disabled={lookupLoading}
                    placeholder="Enter 10-digit mobile number"
                    maxLength={10}
                    required
                  />
                  {lookupLoading && <p style={{ fontSize: '0.6rem', color: '#fdb931', margin: '2px 0 0' }}>Searching...</p>}
                </div>

                {isClientFetched && (
                  <>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Full Name</label>
                      <input 
                        type="text" 
                        className={styles.input} 
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Full name"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>GST Number</label>
                      <div className={styles.gstInputWrapper}>
                        <input 
                          type="text" 
                          className={styles.input} 
                          value={clientGst}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleGstLookup(clientGst);
                            }
                          }}
                          onChange={(e) => {
                            const val = e.target.value.toUpperCase();
                            if (val.length <= 15) {
                              setClientGst(val);
                              if (val.length === 15) {
                                handleGstLookup(val);
                              }
                            }
                          }}
                          placeholder="15-digit GSTIN"
                          maxLength={15}
                        />
                        <button 
                          type="button" 
                          onClick={() => handleGstLookup(clientGst)}
                          disabled={gstLoading || clientGst.length !== 15}
                          className={styles.gstSearchBtn}
                          style={{ 
                            cursor: clientGst.length === 15 ? 'pointer' : 'not-allowed',
                            color: clientGst.length === 15 ? '#1a171a' : '#ccc'
                          }}
                        >
                          {gstLoading ? (
                            <div className="spinner-border spinner-border-sm" role="status" style={{ width: '14px', height: '14px' }}></div>
                          ) : (
                            <FaSearch size={14} />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Company Name</label>
                      <input 
                        type="text" 
                        className={styles.input} 
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Company name"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Address</label>
                      <input 
                        type="text"
                        className={styles.input} 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Full address"
                      />
                    </div>
                  </>
                )}
              </div>

              <div style={{ backgroundColor: '#f9fafb', padding: '0.5rem 0.75rem', borderRadius: '0.75rem', marginBottom: '0.75rem', border: '1px solid #f1f5f9', marginTop: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Plan: <b>{selectedPlan?.name}</b></span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1a1a1a' }}>Base: ₹{selectedPlan?.amount}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>GST (18%): ₹{selectedPlan?.gst}</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1a1a1a' }}>Total: ₹{selectedPlan?.total}</span>
                </div>
              </div>

              <div className={styles.modalActions} style={{ marginTop: '0.5rem' }}>
                <button type="button" onClick={() => setShowModal(false)} className={styles.btnCancel}>Cancel</button>
                <button type="submit" disabled={processing || (clientMobile.length < 10)} className={styles.btnSubmit}>
                  {processing ? 'Processing...' : 'Proceed to Payment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Support Footer */}
      <div className={styles.supportFooter}>
         <div className={styles.supportBlob1}></div>
         <div className={styles.supportBlob2}></div>
         
         <div className={styles.supportContent}>
            <div className={styles.supportLeft}>
               <div className={styles.headsetIconWrapper}>
                  <FaHeadset size={28} />
               </div>
               <div className={styles.supportTexts}>
                  <p className={styles.supportLabel}>Need help with your membership?</p>
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

export default PermanentPricingPage;
