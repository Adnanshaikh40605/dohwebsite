"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Return early if not in blog section
  if (!pathname.startsWith("/blog")) return null;
  
  // Split the path into segments and filter out empty strings
  const segments = pathname.split("/").filter(Boolean);
  
  // Create breadcrumb items
  const breadcrumbs = [];
  
  // Always add Home as the first breadcrumb
  breadcrumbs.push({
    label: "Home",
    href: "/",
    isLast: false
  });
  
  // Add Blog as the second breadcrumb
  breadcrumbs.push({
    label: "Blog",
    href: "/blog",
    isLast: segments.length === 1 // If only "blog" segment, it's the last item
  });
  
  // Check if we're on a paginated blog page
  if (segments.length >= 3 && segments[1] === "page") {
    breadcrumbs.push({
      label: `Page ${segments[2]}`,
      href: `/blog/page/${segments[2]}`,
      isLast: segments.length === 3 // If it's just /blog/page/X, it's the last item
    });
  }
  
  // If we're on a blog post page (not pagination)
  if (segments.length >= 2 && segments[1] !== "page") {
    const slug = segments.slice(1).join("/");
    const label = decodeURIComponent(segments[segments.length - 1])
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    
    breadcrumbs.push({
      label,
      href: `/blog/${slug}`,
      isLast: true
    });
  }

  return (
    <nav aria-label="breadcrumb" className="container my-3">
      <ol className="breadcrumb bg-white px-0 mb-0">
        {breadcrumbs.map((crumb, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${crumb.isLast ? "active" : ""}`}
            aria-current={crumb.isLast ? "page" : undefined}
          >
            {crumb.isLast ? (
              crumb.label
            ) : (
              <Link href={crumb.href} className="text-decoration-none text-primary">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
