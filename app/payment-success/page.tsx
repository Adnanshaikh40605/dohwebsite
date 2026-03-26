"use client";

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaCheck, FaCopy, FaShareAlt } from 'react-icons/fa';
import axios from 'axios';
import confetti from 'canvas-confetti';
import styles from './payment.module.css';
import PaymentStatusModal from '@/app/component/PaymentStatusModal';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FaDownload } from 'react-icons/fa';

const PaymentSuccessClient = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id');
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorModal, setErrorModal] = useState<{title: string, message: string, type: 'success' | 'error' | 'warning'} | null>(null);
  const [amount, setAmount] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const invoiceRef = useRef<HTMLDivElement>(null);
  const [sharing, setSharing] = useState(false);
  const [isGeneratingInvoice, setIsGeneratingInvoice] = useState(false);
  const [clientDetails, setClientDetails] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    
    // Trigger confetti - Multiple bursts
    const fireConfetti = () => {
      const colors = ['#22c55e', '#FFD700', '#ffffff'];
      const count = 40;
      
      // Left burst
      confetti({
        particleCount: count,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
        gravity: 1.2,
        scalar: 0.9,
        drift: 0,
        ticks: 200 // Disappear faster
      });

      // Right burst
      confetti({
        particleCount: count,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
        gravity: 1.2,
        scalar: 0.9,
        drift: 0,
        ticks: 200
      });
    };

    // Burst 3 times for celebration effect
    fireConfetti();
    setTimeout(fireConfetti, 400);
    setTimeout(fireConfetti, 800);
    
    // Call status API if order_id exists
    if (orderId) {
      axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/payments/status/?order_id=${orderId}`)
        .then(response => {
           if (response.data && response.data.amount) {
              const amt = parseFloat(response.data.amount);
              setAmount(amt.toString());
              
              // Fetch client details if amount > 5500 OR if it's the ₹2 Test Plan
              const clientMobile = response.data.client?.mobile || response.data.client_mobile;
              if ((amt > 5500 || amt === 2) && clientMobile) {
                fetchClientDetails(clientMobile);
              }
           }
        })
        .catch(err => {
           console.error("Status check failed", err);
           if (err.response && err.response.status === 404 && err.response.data?.message === "Transaction not found") {
              setErrorModal({
                 title: 'Transaction Not Found',
                 message: 'No transaction found for this order id',
                 type: 'error'
              });
           }
        });
    }
  }, [orderId]);

  const fetchClientDetails = async (mobile: string) => {
    try {
      const resp = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/permanent/permanent-client-by-mobile/?mobile=${mobile}`);
      if (resp.data) {
        setClientDetails(resp.data);
      }
    } catch (err) {
      console.error("Client fetch failed", err);
    }
  };

  const loadImageAsBase64 = async (path: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        // Maintain a good resolution for the logo
        const scale = 4; 
        canvas.width = img.width * scale || 400;
        canvas.height = img.height * scale || 200;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL("image/png"));
        } else {
          reject("Canvas context failed");
        }
      };
      img.onerror = (err) => {
        console.error("Image load error:", err);
        reject(err);
      };
      img.src = path;
    });
  };

  const handleDownloadInvoice = async () => {
    setIsGeneratingInvoice(true);
    try {
      const doc = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4",
        compress: true,
        putOnlyUsedFonts: true,
      });

      // Load Logo
      const logoBase64 = await loadImageAsBase64("/logo.svg");

      // Amount calculations
      // Amount calculations
      const totalAmount = parseFloat(amount || "0");
      let baseAmount = totalAmount / 1.18;
      let gstAmount = baseAmount * 0.09;
      let durationText = "6 Months";
      let monthsToExtend = 6;

      if (totalAmount >= 9440) {
        durationText = "12 Months";
        monthsToExtend = 12;
        baseAmount = 8000; // Use exact values for known plans
        gstAmount = 720;
      } else if (totalAmount >= 7080) {
        durationText = "6 Months";
        monthsToExtend = 6;
        baseAmount = 6000; // Use exact values for known plans
        gstAmount = 540;
      } else if (totalAmount === 2) {
        durationText = "Trial (1 Day)";
        monthsToExtend = 0; // Not a monthly plan
        baseAmount = 1;
        gstAmount = 0.5;
      } else if (totalAmount > 7080 && totalAmount < 9440) {
        // Assume 8 months if it's in between? Or just keep it dynamic
        // If the user specifically mentioned 8 months, let's look for a specific amount if we can.
        // For now, let's keep it based on baseAmount.
        durationText = "8 Months"; 
        monthsToExtend = 8;
      }

      // Border around the page
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(1);
      doc.rect(0, 0, 210, 297);

      // Header
      doc.addImage(logoBase64, "PNG", 10, 10, 40, 20);
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("INVOICE", 105, 20, { align: "center" });

      // Divider Line
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.5);
      doc.line(10, 32, 200, 32);

      // Customer and Invoice Details Section
      doc.rect(10, 40, 190, 54);

      // Left Section (Customer Details)
      doc.setFontSize(10);
      let customerY = 45;
      
      doc.setFont("helvetica", "bold");
      doc.text("Customer Name:", 12, customerY);
      doc.setFont("helvetica", "normal");
      doc.text(String(clientDetails?.name || 'N/A'), 41, customerY);
      customerY += 5;

      if (clientDetails?.compney_name) {
        doc.setFont("helvetica", "bold");
        doc.text("Company Name:", 12, customerY);
        doc.setFont("helvetica", "normal");
        const companyNameWrapped = doc.splitTextToSize(String(clientDetails.compney_name), 60);
        doc.text(companyNameWrapped, 41, customerY);
        customerY += companyNameWrapped.length * 5;
      }

      doc.setFont("helvetica", "bold");
      doc.text("Mobile:", 12, customerY);
      doc.setFont("helvetica", "normal");
      doc.text(String(clientDetails?.mobile || 'N/A'), 25, customerY);
      customerY += 5;

      doc.setFont("helvetica", "bold");
      doc.text("GST No:", 12, customerY);
      doc.setFont("helvetica", "normal");
      doc.text(String(clientDetails?.gst_number || 'N/A'), 27, customerY);
      customerY += 5;

      doc.setFont("helvetica", "bold");
      doc.text("Address:", 12, customerY);
      doc.setFont("helvetica", "normal");
      const addressWrapped = doc.splitTextToSize(String(clientDetails?.address || 'N/A'), 70);
      doc.text(addressWrapped, 28, customerY);

      doc.line(105, 40, 105, 94);

      // Right Section (Invoice Details)
      const rightSectionX = 108;
      doc.setFont("helvetica", "bold");
      doc.text("Invoice No:", rightSectionX, 45);
      doc.setFont("helvetica", "normal");
      doc.text(String(orderId || Math.floor(2000 + Math.random() * 8000)), rightSectionX + 20, 45);

      doc.setFont("helvetica", "bold");
      doc.text("Invoice Date:", rightSectionX, 50);
      doc.setFont("helvetica", "normal");
      doc.text(new Date().toLocaleDateString('en-CA'), rightSectionX + 23, 50);

      doc.line(105, 53, 200, 53);

      doc.setFont("helvetica", "bold");
      doc.text("Obey jobs Pvt Ltd", rightSectionX, 58);
      doc.setFont("helvetica", "normal");
      doc.text("Company Details:", rightSectionX, 63);
      doc.text("GST No: 27AACCO0074H1ZM", rightSectionX, 68);
      doc.text("SAC NO: 999800", rightSectionX, 73);
      doc.text("PAN NO: AACCO0074H", rightSectionX, 78);

      doc.line(105, 81, 200, 81);

      doc.setFont("helvetica", "bold");
      doc.text("Contract Start Date:", rightSectionX, 86);
      doc.text("Contract End Date:", rightSectionX, 91);
      doc.setFont("helvetica", "normal");
      doc.text("", rightSectionX + 35, 86);
      doc.text("", rightSectionX + 34, 91);

      // Table Header
      const tableStartY = 99;
      doc.rect(10, tableStartY - 5, 190, 10);
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      const centerY = tableStartY - 5 + 5 + 2.5;

      const descriptionWidth = 95;
      const colWidth = 23.75;

      doc.text("DESCRIPTION", 12, centerY - 2.5);
      doc.text("DURATION", 12 + descriptionWidth, centerY - 2.5);
      doc.text("SHIFT", 12 + descriptionWidth + colWidth, centerY - 2.5);
      doc.text("RATE", 12 + descriptionWidth + colWidth * 2, centerY - 2.5);
      doc.text("AMOUNT", 12 + descriptionWidth + colWidth * 3, centerY - 2.5);

      [10+descriptionWidth, 10+descriptionWidth+colWidth, 10+descriptionWidth+colWidth*2, 10+descriptionWidth+colWidth*3].forEach(x => {
        doc.line(x, tableStartY - 5, x, tableStartY + 35);
      });

      // Table Content
      doc.setFont("helvetica", "normal");
      doc.text(`Driver Name: N/A`, 12, tableStartY + 12);
      doc.text(`Salary: N/A, Duty: N/A`, 12, tableStartY + 18);

      doc.text(durationText, 12 + descriptionWidth, tableStartY + 12);
      doc.text("Day", 12 + descriptionWidth + colWidth, tableStartY + 12);
      doc.text(String(baseAmount), 12 + descriptionWidth + colWidth * 2, tableStartY + 12);
      doc.text(String(baseAmount), 12 + descriptionWidth + colWidth * 3, tableStartY + 12);

      doc.rect(10, tableStartY + 5, 190, 30);

      // Recruiter Details
      const recruiterRowY = tableStartY + 35;
      doc.rect(10, recruiterRowY, 190, 10);
      doc.text("Recruiter - Isha - 8424054496", 12, recruiterRowY + 6);

      // Summary Section
      const summaryStartY = tableStartY + 45;
      const boxHeight = 28;

      // Bank Details
      doc.rect(10, summaryStartY, 110, boxHeight);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text("Bank Details:", 12, summaryStartY + 5);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text("Bank Name: HDFC Bank", 12, summaryStartY + 10);
      doc.text("Account Name: OBEY JOBS PRIVATE LIMITED", 12, summaryStartY + 15);
      doc.text("Account Number: 50200046815123", 12, summaryStartY + 20);
      doc.text("IFSC Code: HDFC0000103", 12, summaryStartY + 25);

      // Invoice Summary
      const summaryStartX = 120;
      doc.rect(summaryStartX, summaryStartY, 80, boxHeight);
      
      doc.setFont("helvetica", "normal");
      doc.text("GRAND TOTAL", summaryStartX + 2, summaryStartY + 5);
      doc.text(baseAmount.toFixed(2), summaryStartX + 75, summaryStartY + 5, { align: "right" });
      
      doc.text("CGST@9%", summaryStartX + 2, summaryStartY + 10);
      doc.text(gstAmount.toFixed(2), summaryStartX + 75, summaryStartY + 10, { align: "right" });
      
      doc.text("SGST@9%", summaryStartX + 2, summaryStartY + 15);
      doc.text(gstAmount.toFixed(2), summaryStartX + 75, summaryStartY + 15, { align: "right" });

      doc.setFont("helvetica", "bold");
      // Divider above Total
      doc.line(summaryStartX, summaryStartY + 18, summaryStartX + 80, summaryStartY + 18);
      
      doc.text("TOTAL INVOICE AMOUNT", summaryStartX + 2, summaryStartY + 24);
      doc.text(totalAmount.toFixed(2), summaryStartX + 75, summaryStartY + 24, { align: "right" });

      // Border line between the two boxes
      doc.line(summaryStartX, summaryStartY, summaryStartX, summaryStartY + boxHeight);

      // Footer
      const footerStartY = 250;
      doc.setFillColor(0, 0, 0);
      doc.rect(0, footerStartY, 210, 47, "F");
      doc.setTextColor(255);
      doc.setFontSize(10);
      doc.text("OBEY JOBS PVT.LTD", 10, footerStartY + 7);
      doc.text("ANDHERI", 10, footerStartY + 13);
      doc.text("Call Center: 022 - 43439090", 10, footerStartY + 19);
      
      const footerAddress = "101, 1st Floor, B-wing, Aqsa Palace, Gaothan Lane No.4, Next To Paneri Showroom, Near Andheri Rly. Stn., Andheri (w), Mumbai - 400 058";
      const wrappedAddress = doc.splitTextToSize(footerAddress, 190);
      doc.text(wrappedAddress, 10, footerStartY + 26);
      doc.text("Branches: Mumbai | Pune", 10, footerStartY + 40);

      doc.save(`Invoice_${orderId || 'Download'}.pdf`);
    } catch (err) {
      console.error("Invoice generation failed", err);
      alert("Failed to generate invoice. Please try again.");
    } finally {
      setIsGeneratingInvoice(false);
    }
  };

  const handleCopy = () => {
    if (orderId) {
      navigator.clipboard.writeText(orderId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const closeErrorModal = () => {
    // Optionally redirect on close or stay on page
    // window.location.href = '/driver-recharge'; 
    // Usually "Back to App" implies navigation
    window.location.href = '/driver-recharge';
  };

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      
      {/* Error Modal */}
      <PaymentStatusModal 
        isOpen={!!errorModal}
        title={errorModal?.title}
        message={errorModal?.message}
        type={errorModal?.type}
        buttonText="Back to App"
        onClose={closeErrorModal}
        footer={
           <p className={styles.supportText}>
              Need help? <a href="tel:02243439090" className={styles.supportAnchor}>Contact Support</a>
            </p>
        }
      />
      {/* Background Blobs */}
      <div className={`${styles.blob} ${styles.blobGreen} ${styles.blob1} animate-blob`}></div>
      <div className={`${styles.blob} ${styles.blobEmerald} ${styles.blob2} animate-blob animation-delay-2000`}></div>

      <motion.div 
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${styles.card} ${styles.cardGreen}`}
      >
        {/* Success Icon */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2 
          }}
          className={`${styles.iconWrapper} ${styles.iconWrapperGreen}`}
        >
           <motion.div
             initial={{ pathLength: 0 }}
             animate={{ pathLength: 1 }}
             transition={{ duration: 0.5, delay: 0.5 }}
             className={styles.absoluteOne}
             style={{ borderColor: '#dcfce7' }} /* green-100 */
           />
           <div className={`${styles.iconInner} ${styles.iconInnerGreen}`}>
             <FaCheck color="white" size={30} />
           </div>
        </motion.div>

        {/* Text Content */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={styles.title}
        >
          Payment Successful!
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className={styles.paidToText}
        >
          Paid to Driver on Hire
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={styles.description}
        >
          Your plan has been activated successfully.
        </motion.p>

        {/* Amount Pill */}
        {amount && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.4, type: "spring" }}
            className={styles.amountPill}
          >
            <span className={styles.amountText}>
              ₹{parseFloat(amount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </motion.div>
        )}

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
                className={`${styles.copyBtn} ${styles.copyBtnGreen}`}
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
          <button 
            onClick={async () => {
              if (!cardRef.current || sharing) return;
              setSharing(true);

              try {
                // Wait for any animations/renders effectively
                await new Promise(resolve => setTimeout(resolve, 100));

                const canvas = await html2canvas(cardRef.current, {
                  backgroundColor: '#ffffff',
                  scale: 2, // Higher quality
                  useCORS: true,
                  logging: false,
                  ignoreElements: (element: Element) => element.tagName === 'BUTTON' 
                } as any);

                canvas.toBlob(async (blob) => {
                  if (!blob) {
                    setSharing(false);
                    return;
                  }

                  const file = new File([blob], `receipt_${orderId || 'payment'}.png`, { type: 'image/png' });

                  // 1. Try Native Share (Mobile/Supported)
                  if (navigator.share) {
                    try {
                      await navigator.share({
                        files: [file],
                        title: 'Payment Receipt',
                        text: `Payment Receipt for Order #${orderId}`
                      });
                      setSharing(false);
                      return; // Success
                    } catch (err) {
                      console.warn('Native share failed or dismissed, trying clipboard...', err);
                    }
                  }

                  // 2. Try Copy Image to Clipboard (Desktop)
                  try {
                    if (typeof ClipboardItem !== 'undefined') {
                       await navigator.clipboard.write([
                        new ClipboardItem({
                          [blob.type]: blob
                        })
                      ]);
                      alert('Receipt copied to clipboard! \nPaste it in WhatsApp to share.');
                      setSharing(false);
                      return; // Success
                    }
                  } catch (err) {
                     console.warn('Clipboard write failed, falling back to download...', err);
                  }

                  // 3. Fallback: Download Image
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `receipt_${orderId || 'payment'}.png`;
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  URL.revokeObjectURL(url);
                  
                  setSharing(false);
                }, 'image/png');

              } catch (err) {
                console.error('Capture failed:', err);
                setSharing(false);
                // Fallback to clipboard if image fails
                handleCopy();
                alert('Could not generate image. Order ID copied.');
              }
            }}
            className={styles.backBtn}
            disabled={sharing}
          >
            <FaShareAlt size={16} />
            <span>{sharing ? 'Generating...' : 'Share Receipt'}</span>
          </button>

          {/* Download Invoice Button - Visible for membership plans (>5500) or ₹2 Testing Plan */}
          {(amount && (parseFloat(amount || "0") > 5500 || parseFloat(amount || "0") === 2)) && (
            <button 
              onClick={handleDownloadInvoice}
              className={styles.backBtn}
              style={{ marginTop: '0.75rem', backgroundColor: '#1a1a1a', color: '#fff', borderColor: '#1a1a1a' }}
              disabled={isGeneratingInvoice}
            >
              <FaDownload size={16} />
              <span>{isGeneratingInvoice ? 'Generating Invoice...' : 'Download Invoice'}</span>
            </button>
          )}

          {/* Support Link */}
          <div className={styles.supportLink}>
            <p className={styles.supportText}>
              Need help? <a href="tel:02243439090" className={styles.supportAnchor}>Contact Support</a>
            </p>
          </div>
        </motion.div>

      </motion.div>

      {/* Hidden Invoice Template - Visible for membership plans or ₹2 Testing Plan */}
      {(amount && (parseFloat(amount || "0") > 5500 || parseFloat(amount || "0") === 2)) && (
        <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
          <div ref={invoiceRef} style={{ width: '800px', backgroundColor: '#fff', padding: '40px', fontFamily: 'Arial, sans-serif', color: '#000' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #000', paddingBottom: '10px', marginBottom: '20px' }}>
              <img src="/logo.svg" alt="Logo" style={{ height: '80px' }} />
              <h1 style={{ fontSize: '32px', margin: 0, fontWeight: 'bold' }}>INVOICE</h1>
            </div>

            {/* Top Details Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div style={{ border: '1.5px solid #000', padding: '15px' }}>
                <p style={{ margin: '4px 0', fontSize: '14px' }}><b>Customer Name:</b> {clientDetails?.name || 'N/A'}</p>
                <p style={{ margin: '4px 0', fontSize: '14px' }}><b>Company Name:</b> {clientDetails?.compney_name || 'N/A'}</p>
                <p style={{ margin: '4px 0', fontSize: '14px' }}><b>Mobile:</b> {clientDetails?.mobile || 'N/A'}</p>
                <p style={{ margin: '4px 0', fontSize: '14px' }}><b>GST No:</b> {clientDetails?.gst_number || 'N/A'}</p>
                <p style={{ margin: '4px 0', fontSize: '14px' }}><b>Address:</b> {clientDetails?.address || 'N/A'}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                <div style={{ border: '1.5px solid #000', padding: '15px', borderBottom: 'none' }}>
                  <p style={{ margin: '4px 0', fontSize: '14px' }}><b>Invoice No:</b> {Math.floor(2000 + Math.random() * 8000)}</p>
                  <p style={{ margin: '4px 0', fontSize: '14px' }}><b>Invoice Date:</b> {new Date().toLocaleDateString('en-CA')}</p>
                </div>
                <div style={{ border: '1.5px solid #000', padding: '15px', borderBottom: 'none' }}>
                  <p style={{ margin: '0', fontSize: '14px', fontWeight: 'bold' }}>Obey jobs Pvt Ltd</p>
                  <p style={{ margin: '2px 0', fontSize: '12px' }}>Company Details:</p>
                  <p style={{ margin: '2px 0', fontSize: '12px' }}>GST No: 27AACCO0074H1ZM</p>
                  <p style={{ margin: '2px 0', fontSize: '12px' }}>SAC NO: 999800</p>
                  <p style={{ margin: '2px 0', fontSize: '12px' }}>PAN NO: AACCO0074H</p>
                </div>
                <div style={{ border: '1.5px solid #000', padding: '15px' }}>
                  <p style={{ margin: '4px 0', fontSize: '12px' }}><b>Contract Start Date:</b> </p>
                  <p style={{ margin: '4px 0', fontSize: '12px' }}><b>Contract End Date:</b> </p>
                </div>
              </div>
            </div>

            {/* Table */}
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
              <thead>
                <tr style={{ textAlign: 'left', border: '1.5px solid #000' }}>
                  <th style={{ border: '1.5px solid #000', padding: '10px', fontSize: '14px' }}>DESCRIPTION</th>
                  <th style={{ border: '1.5px solid #000', padding: '10px', fontSize: '14px' }}>DURATION</th>
                  <th style={{ border: '1.5px solid #000', padding: '10px', fontSize: '14px' }}>SHIFT</th>
                  <th style={{ border: '1.5px solid #000', padding: '10px', fontSize: '14px' }}>RATE</th>
                  <th style={{ border: '1.5px solid #000', padding: '10px', fontSize: '14px' }}>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ height: '150px', verticalAlign: 'top' }}>
                  <td style={{ border: '1.5px solid #000', padding: '10px', fontSize: '13px' }}>
                    Driver Name: N/A<br />
                    Salary: N/A, Duty: 10 hrs
                  </td>
                  <td style={{ border: '1.5px solid #000', padding: '10px', fontSize: '13px' }}>{
                    (() => {
                      const total = parseFloat(amount || "0");
                      if (total >= 9440) return '12 Months';
                      if (total >= 7080) return '6 Months';
                      if (total === 2) return 'Trial';
                      return '8 Months';
                    })()
                  }</td>
                  <td style={{ border: '1.5px solid #000', padding: '10px', fontSize: '13px' }}>Day</td>
                  <td style={{ border: '1.5px solid #000', padding: '10px', fontSize: '13px' }}>{(parseFloat(amount || "0") / 1.18).toFixed(2)}</td>
                  <td style={{ border: '1.5px solid #000', padding: '10px', fontSize: '13px' }}>{(parseFloat(amount || "0") / 1.18).toFixed(2)}</td>
                </tr>
                <tr style={{ border: '1.5px solid #000' }}>
                  <td colSpan={5} style={{ padding: '10px', fontSize: '13px' }}>Recruiter - Isha - 8424054496</td>
                </tr>
              </tbody>
            </table>

            {/* Bottom Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '0' }}>
              <div style={{ border: '1.5px solid #000', padding: '15px' }}>
                <p style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>Bank Details:</p>
                <p style={{ margin: '2px 0', fontSize: '13px' }}>Bank Name: HDFC Bank</p>
                <p style={{ margin: '2px 0', fontSize: '13px' }}>Account Name: OBEY JOBS PRIVATE LIMITED</p>
                <p style={{ margin: '2px 0', fontSize: '13px' }}>Account Number: 50200046815123</p>
                <p style={{ margin: '2px 0', fontSize: '13px' }}>IFSC Code: HDFC0000103</p>
              </div>
              <div style={{ border: '1.5px solid #000', borderLeft: 'none' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', borderBottom: '1.5px solid #000' }}>
                  <div style={{ padding: '8px 15px', fontSize: '13px', borderRight: '1.5px solid #000' }}>GRAND TOTAL</div>
                  <div style={{ padding: '8px 15px', fontSize: '13px', textAlign: 'right' }}>{(parseFloat(amount || "0") / 1.18).toFixed(2)}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', borderBottom: '1.5px solid #000' }}>
                  <div style={{ padding: '8px 15px', fontSize: '13px', borderRight: '1.5px solid #000' }}>CGST@9%</div>
                  <div style={{ padding: '8px 15px', fontSize: '13px', textAlign: 'right' }}>{((parseFloat(amount || "0") / 1.18) * 0.09).toFixed(2)}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', borderBottom: '1.5px solid #000' }}>
                  <div style={{ padding: '8px 15px', fontSize: '13px', borderRight: '1.5px solid #000' }}>SGST@9%</div>
                  <div style={{ padding: '8px 15px', fontSize: '13px', textAlign: 'right' }}>{((parseFloat(amount || "0") / 1.18) * 0.09).toFixed(2)}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', paddingTop: '10px', paddingBottom: '10px' }}>
                  <div style={{ padding: '2px 15px', fontSize: '14px', fontWeight: 'bold' }}>TOTAL INVOICE AMOUNT</div>
                  <div style={{ padding: '2px 15px', fontSize: '14px', fontWeight: 'bold', textAlign: 'right' }}>{parseFloat(amount || "0").toFixed(2)}</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div style={{ marginTop: '50px', backgroundColor: '#000', color: '#fff', padding: '20px', fontSize: '12px' }}>
              <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>OBEY JOBS PVT.LTD</p>
              <p style={{ margin: '0 0 5px 0' }}>ANDHERI</p>
              <p style={{ margin: '0 0 5px 0' }}>Call Center: 022 - 43439090</p>
              <p style={{ margin: '0 0 5px 0' }}>101, 1st Floor, B-wing, Aqsa Palace, Gaothan Lane No.4, Next To Paneri Showroom, Near Andheri Rly. Stn., Andheri (w), Mumbai - 400 058</p>
              <p style={{ margin: '10px 0 0 0' }}>Branches: Mumbai | Pune</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccessClient;
