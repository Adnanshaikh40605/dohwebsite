"use client";
import React, { useState } from "react";
import SocialShareButtons from "./SocialShareButtons";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  faqs: FAQItem[];
}

interface FaqComponentProps {
  categories?: FAQCategory[];
  faqs?: FAQItem[];
}

const FaqComponent: React.FC<FaqComponentProps> = ({ categories, faqs }) => {
  // If categories provided, we use the complex layout
  // otherwise we use simple list
  const isCategorized = categories && categories.length > 0;

  // State for categorized view
  const [activeCategory, setActiveCategory] = useState<string>(isCategorized ? categories[0].category : "");
  
  // Shared state for open index
  const [openIndex, setOpenIndex] = useState<number | null>(isCategorized ? 0 : null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setOpenIndex(0);
  };

  // Determine which FAQs to show
  const activeFaqs = isCategorized 
    ? (categories.find(cat => cat.category === activeCategory)?.faqs || [])
    : (faqs || []);

  const renderFaqList = () => (
    <div className="d-flex flex-column gap-3">
        {activeFaqs.map((faq, index) => (
        <div 
            className="bg-white rounded-3 overflow-hidden transition-all faq-card-minimal"
            key={index}
            style={{
                boxShadow: openIndex === index ? '0 4px 20px rgba(0,0,0,0.06)' : '0 1px 3px rgba(0,0,0,0.03)',
                border: '1px solid',
                borderColor: openIndex === index ? 'rgba(255, 206, 40, 0.4)' : 'rgba(0,0,0,0.03)',
            }}
        >
            <button
                className="w-100 d-flex justify-content-between align-items-start p-3 p-md-4 bg-transparent border-0 text-start"
                onClick={() => toggleFAQ(index)}
                style={{ cursor: 'pointer' }}
            >
                <span className="fw-medium pe-3" style={{ color: '#1a1c20', fontSize: '1rem', lineHeight: '1.5' }}>
                    {faq.question}
                </span>
                <span 
                    className="flex-shrink-0 d-flex align-items-center justify-content-center mt-1"
                    style={{
                        width: '20px', 
                        height: '20px', 
                        transition: 'transform 0.3s ease',
                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                >
                    <i className="bi bi-chevron-down" style={{ fontSize: '0.85rem', color: '#6c757d' }}></i>
                </span>
            </button>
            
            <div
                className="bg-transparent"
                style={{
                    maxHeight: openIndex === index ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
                    opacity: openIndex === index ? 1 : 0
                }}
            >
                <div className="px-4 pb-4 pt-0 text-secondary" style={{ fontSize: '0.925rem', lineHeight: '1.6' }}>
                    {faq.answer}
                </div>
            </div>
        </div>
        ))}
        <style jsx>{`
            .hover-text-dark:hover {
                color: #2c2e35 !important;
                background-color: rgba(0,0,0,0.02) !important;
            }
            .faq-card-minimal {
                transition: all 0.2s ease;
            }
        `}</style>
    </div>
  );

  if (isCategorized && categories) {
    return (
        <div className="row g-4 justify-content-center">
            {/* Sidebar Navigation */}
            <div className="col-lg-3 col-md-4">
                <div className="sticky-top" style={{ top: '100px', zIndex: 1 }}>
                    <h6 className="text-uppercase text-muted fw-bold mb-3 small ps-2" style={{letterSpacing: '1px', fontSize: '0.75rem'}}>Categories</h6>
                    <div className="d-flex flex-column gap-1">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleCategoryChange(cat.category)}
                                className={`text-start py-2 px-3 border-start border-3 transition-all ${
                                    activeCategory === cat.category 
                                    ? "border-warning bg-white text-dark fw-semibold" 
                                    : "border-transparent text-secondary bg-transparent hover-text-dark"
                                }`}
                                style={{
                                    outline: 'none',
                                    background: activeCategory === cat.category ? '#fff' : 'transparent',
                                    borderColor: activeCategory === cat.category ? '#ffce28' : 'transparent',
                                    borderRadius: '0 8px 8px 0',
                                    borderLeftWidth: '4px !important',
                                    fontSize: '0.95rem',
                                    border: 'none' // reset default button border
                                }}
                            >
                                {cat.category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Content Area */}
            <div className="col-lg-8 col-md-8">
                <h4 className="fw-bold text-dark mb-4" style={{ fontSize: '1.25rem' }}>{activeCategory}</h4>
                {renderFaqList()}
            </div>
        </div>
    );
  }

  // Simple View for Blog posts etc
  return (
    <div className="w-100">
        {renderFaqList()}
    </div>
  );
};

export default FaqComponent;
