import React, { useEffect, useState } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

interface SocialShareButtonsProps {
  url?: string;
  title?: string;
  description?: string;
  image?: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({
  url,
  title = "",
  description = "",
  image = "",
}) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [pageTitle, setPageTitle] = useState("");
  const [pageDescription, setPageDescription] = useState("");
  const [pageImage, setPageImage] = useState("");

  // Ensure we get the complete URL with all parts
  const getCompleteUrl = () => {
    if (typeof window === 'undefined') return '';
    
    // Get the full URL including protocol, hostname, and complete path
    return window.location.href;
  };

  useEffect(() => {
    // Use the URL passed from props, or get the current complete URL
    if (typeof window !== "undefined") {
      // Always ensure we have the full URL with pathname
      const fullUrl = url || getCompleteUrl();
      setCurrentUrl(fullUrl);
      setPageTitle(title || document.title);
      
      // Get meta description if not provided
      const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || 
                             document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '';
      setPageDescription(description || metaDescription);
      
      // Get Open Graph image if available
      const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
      setPageImage(image || ogImage);
      
      // Debug log to check the URL being used
      console.log("Sharing URL:", fullUrl);
    }
  }, [url, title, description, image]);

  const openLinkedInShare = () => {
    // LinkedIn sharing with proper URL encoding
    // Force using window.location.href to ensure we get the complete current URL
    const currentPageUrl = window.location.href;
    console.log("LinkedIn sharing URL:", currentPageUrl);
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentPageUrl)}`;
    window.open(shareUrl, "linkedin-share-dialog", "width=626,height=436");
  };

  const openFacebookShare = () => {
    // Facebook sharing with URL and optional quote
    // Force using window.location.href to ensure we get the complete current URL
    const currentPageUrl = window.location.href;
    console.log("Facebook sharing URL:", currentPageUrl);
    let shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentPageUrl)}`;
    if (pageDescription) {
      shareUrl += `&quote=${encodeURIComponent(pageDescription)}`;
    }
    window.open(shareUrl, "facebook-share-dialog", "width=626,height=436");
  };

  const openTwitterShare = () => {
    // Twitter sharing with title and URL
    let tweetText = pageTitle;
    if (pageDescription && pageDescription !== pageTitle) {
      tweetText = `${pageTitle} - ${pageDescription}`;
    }
    // Ensure URL is included
    tweetText += ` ${currentUrl}`;
    
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(shareUrl, "twitter-share-dialog", "width=626,height=436");
  };

  const openWhatsAppShare = () => {
    // WhatsApp sharing with title and URL
    let message = pageTitle;
    if (pageDescription && pageDescription !== pageTitle) {
      message += `\n\n${pageDescription}`;
    }
    message += `\n\n${currentUrl}`;
    
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(shareUrl, "whatsapp-share-dialog", "width=626,height=436");
  };

  const openEmailShare = () => {
    // Email sharing with proper subject and body
    const subject = pageTitle;
    let body = `I thought you might find this interesting:\n\n${pageTitle}`;
    if (pageDescription && pageDescription !== pageTitle) {
      body += `\n\n${pageDescription}`;
    }
    body += `\n\n${currentUrl}`;
    
    const shareUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = shareUrl;
  };

  return (
    <div
      className="blog-social-share"
      style={{
        display: "flex",
        gap: "16px",
        padding: "12px 0",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <span style={{ marginRight: "8px", fontWeight: "500" }}>Share:</span>

      {/* Twitter */}
      <button
        onClick={openTwitterShare}
        title="Share on Twitter"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          color: "#1DA1F2",
          borderRadius: "4px",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f8ff")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
      >
        <FaTwitter size={20} />
      </button>

      {/* LinkedIn */}
      <button
        onClick={openLinkedInShare}
        title="Share on LinkedIn"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          color: "#0077B5",
          borderRadius: "4px",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f7ff")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
      >
        <FaLinkedin size={20} />
      </button>

      {/* Facebook */}
      <button
        onClick={openFacebookShare}
        title="Share on Facebook"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          color: "#4267B2",
          borderRadius: "4px",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f4ff")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
      >
        <FaFacebook size={20} />
      </button>

      {/* WhatsApp */}
      <button
        onClick={openWhatsAppShare}
        title="Share on WhatsApp"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          color: "#25D366",
          borderRadius: "4px",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0fff4")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
      >
        <FaWhatsapp size={20} />
      </button>

      {/* Email */}
      <button
        onClick={openEmailShare}
        title="Share via Email"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          color: "#EA4335",
          borderRadius: "4px",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#fff5f5")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
      >
        <FaEnvelope size={20} />
      </button>
    </div>
  );
};

export default SocialShareButtons;