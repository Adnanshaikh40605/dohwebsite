"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function DynamicOgUrl() {
  const pathname = usePathname();
  useEffect(() => {
    const canonicalUrl =
      pathname === "/"
        ? "https://www.driveronhire.com/"
        : `https://www.driveronhire.com${pathname}${pathname.endsWith("/") ? "" : "/"}`;
    let meta = document.querySelector('meta[property="og:url"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("property", "og:url");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", canonicalUrl);
  }, [pathname]);
  return null;
} 