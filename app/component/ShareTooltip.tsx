import React, { useEffect, useState } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaCopy,
} from "react-icons/fa";

interface Position {
  top: number;
  left: number;
}

const ShareTooltip: React.FC = () => {
  const [selection, setSelection] = useState("");
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 });
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [pageTitle, setPageTitle] = useState("");
  const [pageImage, setPageImage] = useState("");

  // Get the full current URL with all components
  const getCompleteUrl = () => {
    if (typeof window === 'undefined') return '';
    
    // Get the full URL including protocol, hostname, and complete path
    return window.location.href;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Make sure we capture the complete URL every time
      const fullUrl = getCompleteUrl();
      setCurrentUrl(fullUrl);
      setPageTitle(document.title);
      
      // Get Open Graph image if available
      const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
      setPageImage(ogImage);
      
      // Debug log to check the URL being used
      console.log("ShareTooltip URL:", fullUrl);
    }

    const handleMouseUp = () => {
      const selectedText = window.getSelection()?.toString().trim() || "";

      if (selectedText.length >= 6) {
        const range = window.getSelection()?.getRangeAt(0);
        if (!range) return;

        const rect = range.getBoundingClientRect();
        setPosition({
          top: rect.top + window.scrollY - 50,
          left: rect.left + window.scrollX + rect.width / 2,
        });
        setSelection(selectedText);
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".share-tooltip")) {
        setVisible(false);
        window.getSelection()?.removeAllRanges();
      }
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCopy = () => {
    const textToCopy = `"${selection}" ${currentUrl}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openTwitterShare = () => {
    // Twitter format: "selected text" URL
    const tweetText = `"${selection}" ${currentUrl}`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(shareUrl, "twitter-share-dialog", "width=626,height=436");
  };

  const openLinkedInShare = () => {
    // LinkedIn sharing - ensure we use the complete URL
    // Force using window.location.href to ensure we get the complete current URL
    const currentPageUrl = window.location.href;
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentPageUrl)}`;
    window.open(shareUrl, "linkedin-share-dialog", "width=626,height=436");
  };

  const openFacebookShare = () => {
    // Facebook sharing with quote parameter
    // Force using window.location.href to ensure we get the complete current URL
    const currentPageUrl = window.location.href;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentPageUrl)}&quote=${encodeURIComponent(`"${selection}"`)}`;
    window.open(shareUrl, "facebook-share-dialog", "width=626,height=436");
  };

  const openWhatsAppShare = () => {
    // WhatsApp format: "selected text" - URL
    const message = `"${selection}" - ${currentUrl}`;
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(shareUrl, "whatsapp-share-dialog", "width=626,height=436");
  };

  const openEmailShare = () => {
    // Email format with selected text in subject and body
    const subject = `"${selection}" - ${pageTitle}`;
    const body = `I wanted to share this quote with you:\n\n"${selection}"\n\nFrom: ${currentUrl}`;
    const shareUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = shareUrl;
  };

  if (!visible) return null;

  return (
    <div
      className="share-tooltip"
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: "translateX(-50%)",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "8px 10px",
        display: "flex",
        gap: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        zIndex: 9999,
        alignItems: "center",
      }}
    >
      {/* Twitter */}
      <button
        onClick={openTwitterShare}
        title="Share on Twitter"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          color: "#1DA1F2",
        }}
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
          padding: 0,
          color: "#0077B5",
        }}
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
          padding: 0,
          color: "#4267B2",
        }}
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
          padding: 0,
          color: "#25D366",
        }}
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
          padding: 0,
          color: "#EA4335",
        }}
      >
        <FaEnvelope size={20} />
      </button>

      {/* Copy selected text */}
      <button
        onClick={handleCopy}
        title="Copy selected text with URL"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          color: "#6e6e6e",
        }}
      >
        <FaCopy size={20} />
      </button>

      {copied && (
        <span
          style={{
            position: "absolute",
            bottom: "-25px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#333",
            color: "#fff",
            padding: "2px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            whiteSpace: "nowrap",
          }}
        >
          Copied!
        </span>
      )}
    </div>
  );
};

export default ShareTooltip;