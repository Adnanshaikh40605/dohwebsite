"use client";
import React, { useEffect, useState } from "react";
import SocialShareButtons from "./SocialShareButtons";

const BlogShareButtons: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [pageTitle, setPageTitle] = useState<string>('');
  const [pageDescription, setPageDescription] = useState<string>('');
  const [pageImage, setPageImage] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Get current page URL
      setCurrentUrl(window.location.href);
      
      // Get page title
      setPageTitle(document.title);
      
      // Get meta description
      const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || 
                             document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '';
      setPageDescription(metaDescription);
      
      // Get Open Graph image
      const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
      setPageImage(ogImage);
    }
  }, []);

  return (
    <div className="blog-share-container" style={{ margin: '20px 0' }}>
      <SocialShareButtons 
        url={currentUrl}
        title={pageTitle}
        description={pageDescription}
        image={pageImage}
      />
    </div>
  );
};

export default BlogShareButtons; 