"use client";

import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";
import BlogHeader from "./blog-header";
import BlogFooter from "./blog-footer";
import LandingHeader from "./landing-header";
import LandingFooter from "./landing-footer";
import AppNotify from "./one_link_app";
import { useEffect, useState } from "react";
import { Noto_Sans_Devanagari } from "next/font/google";
import ShareTooltip from "./ShareTooltip";
import SocialShareButtons from "./SocialShareButtons";
import Breadcrumbs from "./Breadcrumbs";


// declare global {
//   interface Window {
//     Trustpilot?: {
//       loadFromElement: (element: Element | null) => void;
//     };
//   }
// }

const notoSansDevanagari = Noto_Sans_Devanagari({ subsets: ["devanagari"] });

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // const [trustpilotLoaded, setTrustpilotLoaded] = useState(false);

  const [hasFAQ, setHasFAQ] = useState(false);

  useEffect(() => {
    // Check if FAQ section exists (runs after page loads)
    if (pathname?.startsWith("/blog/")) {
      const faqSection = document.querySelector(".faq-container");
      setHasFAQ(!!faqSection);
    }
  }, [pathname]);

  // Feedback route (no header or footer)
  const noHeaderFooterRoutes = ["/feedback", "/thank-you", "/driver-recharge", "/permanent-pricing", "/payment-success", "/payment-pending", "/payment-failure", "/too-many-requests"];

  // Blog routes (BlogHeader and BlogFooter)
  const blogRoutes = ["/blog", "/blog/[slug]"];

  // Routes where ONLY Footer should be shown
  const noFooterOnlyRoutes = ["/otp-login", "/register"];

  const landingPageRoutes = ["/driver-services"];

  const hideAppNotifyRoutes = [
    "/otp-login",
    "/register",
    "/feedback",
    "/thank-you",
  ];
  const shouldShowAppNotify =
    pathname === "/" && !hideAppNotifyRoutes.includes(pathname);

  const isNoHeaderFooterRoute = noHeaderFooterRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const isNoFooterOnlyRoute = noFooterOnlyRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isBlogRoute = blogRoutes.some((route) =>
    pathname.startsWith(route.replace("[slug]", ""))
  );

  const isLandingPageRoute = landingPageRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // useEffect(() => {
  //   // Check if Trustpilot script is already loaded
  //   if (
  //     !document.querySelector(
  //       'script[src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"]'
  //     )
  //   ) {
  //     const script = document.createElement("script");
  //     script.src =
  //       "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
  //     script.async = true;
  //     script.onload = () => {
  //       // Type-safe Trustpilot initialization
  //       const trustpilotWidget = document.querySelector(".trustpilot-widget");
  //       if (window.Trustpilot && trustpilotWidget) {
  //         try {
  //           window.Trustpilot.loadFromElement(trustpilotWidget);
  //           setTrustpilotLoaded(true);
  //         } catch (error) {
  //           console.error("Trustpilot widget initialization failed:", error);
  //         }
  //       }
  //     };
  //     document.body.appendChild(script);
  //   }

  //   return () => {
  //     const script = document.querySelector(
  //       'script[src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"]'
  //     );
  //     if (script) {
  //       document.body.removeChild(script);
  //     }
  //   };
  // }, [pathname]);

  // Apply Hindi font conditionally
  const isHindiPage = pathname.startsWith("/drivers-job");

  return (
    <>
      {/* Conditionally apply the Hindi font */}
      <div className={isHindiPage ? notoSansDevanagari.className : ""}>
        {/* Wrap AppNotify and Header in a container div with position fixed */}
        {!isNoHeaderFooterRoute && (
          <div
            style={{
              position: "sticky",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 1000,
              background: "#ffffff",
            }}
          >
            {shouldShowAppNotify && <AppNotify />}
            {isBlogRoute ? (
              <BlogHeader />
            ) : isLandingPageRoute ? (
              <LandingHeader />
            ) : (
              <Header />
            )}
          </div>
        )}

        {/* Main content (this will have a top margin to avoid being hidden behind fixed elements) */}
        {/* <div>{children}</div> */}
        <div>
          {isBlogRoute && (
            <>
              <Breadcrumbs />
              <ShareTooltip />
            </>
          )}
          {children}
        </div>

        {/* Footer rendering */}
        {/* FOOTER */}
        {!isNoHeaderFooterRoute && !isNoFooterOnlyRoute && (
          <>
            {isBlogRoute ? (
              <BlogFooter />
            ) : isLandingPageRoute ? (
              <LandingFooter />
            ) : (
              <Footer />
            )}
          </>
        )}
      </div>
    </>
  );
}
