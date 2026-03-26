"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
}

export default function AutoBlogSchema() {
  const pathname = usePathname();
  const [schemaData, setSchemaData] = useState<any>(null);

  useEffect(() => {
    // Only run on blog pages
    if (!pathname.startsWith('/blog/')) {
      return;
    }

    // Extract slug from URL
    const slug = pathname.replace('/blog/', '').replace(/\/$/, '');
    
    // Blog posts data from your getPosts() function
    const posts: BlogPost[] = [
      {
        id: 8,
        title: "Outstation Drivers Made Easy: How To Hire, Benefits, Costs, and Expert Tips",
        excerpt: "Picture this: you're heading out on a long-distance trip...",
        image: "/blog8.webp",
        date: "30 November, 2024",
        readTime: "8 min",
        slug: "outstation-drivers",
      },
      {
        id: 9,
        title: "Why Hiring an Outstation Driver Is the Best Choice for Long-Distance Travel",
        excerpt: "Long-distance travel offers the promise of adventure and new experiences....",
        image: "/outstation-driver-for-long-distance travel.webp",
        date: "03 December, 2024",
        readTime: "8 min",
        slug: "why-hiring-an-outstation-driver-is-the-best-choice-for-long-distance-travel",
      },
      {
        id: 11,
        title: "What to Expect When Booking an Outstation Driver: From Pickup to Drop-off",
        excerpt: "Booking an outstation driver makes long-distance travel stress-free and enjoyable....",
        image: "/what-to-expect.webp",
        date: "06 December, 2024",
        readTime: "8 min",
        slug: "booking-outstation-driver",
      },
      {
        id: 12,
        title: "7 Key Benefits of Hiring a Driver for a Stress-Free Weekend Getaway",
        excerpt: "Weekend getaways are all about unwinding and escaping the daily grind...",
        image: "/Featured Image of 7 Benefits Of Hiring a Drivers.webp",
        date: "07 December, 2024",
        readTime: "4 min",
        slug: "benefits-of-hiring-driver-for-weekend-getaway",
      },
      {
        id: 13,
        title: "Outstation Driver vs. Self-Driving: Which to Choose?",
        excerpt: "Traveling to an outstation destination is always an exciting experience...",
        image: "/Outstation Driver vs. Self-Driving.webp",
        date: "7 December, 2024",
        readTime: "4 min",
        slug: "outstation-driver-vs-self-driving",
      },
      {
        id: 14,
        title: "How to Choose the Best Outstation Driver Service Easily",
        excerpt: "Finding the right driver for your outstation trip is more...",
        image: "/Choose-the-Best-Outstation-Driver-Service.webp",
        date: "17 December, 2024",
        readTime: "4 min",
        slug: "outstation-driver-service",
      },
      {
        id: 15,
        title: "Planning a Road Trip? Here Are 10 Must-Know Tips for Travelers",
        excerpt: "Road trips are all about adventure, exploration...",
        image: "/Planning_a_Road_Trip.webp",
        date: "20 December, 2024",
        readTime: "3 min",
        slug: "planning-road-trip",
      },
      {
        id: 16,
        title: "5 Common Mistakes to Avoid When Planning a Road Trip",
        excerpt: "Road trips are an exciting way to explore new places...",
        image: "/Common-Mistakes-to-Avoid-When-Planning-a-Road-Trip.webp",
        date: "23 December, 2024",
        readTime: "3 min",
        slug: "road-trip-mistakes",
      },
      {
        id: 17,
        title: "Safety Measures Taken by Professional Drivers for Outstation Journeys",
        excerpt: "During long trips, safety is key. It makes the drive easy...",
        image: "/Professional-Drivers-for-Outstation-Journeys.webp",
        date: "26 December, 2024",
        readTime: "3 min",
        slug: "safety-measures",
      },
      {
        id: 18,
        title: "Top 10 Qualities to Look for in a Professional Outstation Driver",
        excerpt: "When planning an outstation trip, choosing the right driver can",
        image: "/Top-10-Qualities-to-Look-for-in-a-Professional-Outstation-Driver.webp",
        date: "28 December, 2024",
        readTime: "4 min",
        slug: "professional-outstation-driver",
      },
      {
        id: 19,
        title: "Types of Trips Requiring a Driver: Simplify Your Journey",
        excerpt: "Getting a chauffeur can simplify your outstation trip",
        image: "/Types-of-Trips-Requiring-a-Driver.webp",
        date: "30 December, 2024",
        readTime: "4 min",
        slug: "types-of-trips-require-a-driver",
      },
      {
        id: 20,
        title: "Acting Driver Charges for Outstation Trips: Is It Worth the Investment?",
        excerpt: "Picture this: You're planning an exciting road trip with your",
        image: "/Acting-Driver-Charges-for-Outstation-Trips.webp",
        date: "02 January, 2025",
        readTime: "3 min",
        slug: "acting-driver-charges-outstation-trips",
      },
      {
        id: 21,
        title: "Technology in Travel: Transforming Modern Journeys",
        excerpt: "Technology in travel has changed the way we experience",
        image: "/Transforming-Modern-Journeys.webp",
        date: "07 January, 2025",
        readTime: "3 min",
        slug: "transforming-modern-journeys",
      },
      {
        id: 22,
        title: "Essential Gadgets and Apps for Stress-Free Outstation Travel in India",
        excerpt: "Imagine this: You're embarking on an outstation road trip.",
        image: "/Apps-for-Stress-Free-Outstation-Travel.webp",
        date: "10 January, 2025",
        readTime: "4 min",
        slug: "best-travel-gadgets",
      },
      {
        id: 23,
        title: "Long Distance driving is such an exciting experience that can be..",
        excerpt: "Imagine this: You're embarking on an outstation road trip.",
        image: "/long-distance-driving.webp",
        date: "15 January, 2025",
        readTime: "5 min",
        slug: "long-distance-driving",
      },
      {
        id: 24,
        title: "10 Must-Have Safety Features to Look for in Outstation Vehicles",
        excerpt: "Picture this: a long, scenic road trip with your loved ones...",
        image: "/Safety-Features-to-Look-for-in-Outstation.webp",
        date: "20 January, 2025",
        readTime: "3 min",
        slug: "safety-features-for-outstation-vehicles",
      },
      {
        id: 25,
        title: "How to Plan an Affordable Outstation Trip: Simple Tips for Budget-Friendly Travel",
        excerpt: "Outstation trips offer the perfect escape from routine life...",
        image: "/affordable-outstation-trip.webp",
        date: "25 January, 2025",
        readTime: "3 min",
        slug: "affordable-outstation-trip",
      },
      {
        id: 26,
        title: "Best Times to Take an Outstation Trip",
        excerpt: "Are you Planning an outstation trip? You know...",
        image: "/best-times-to-an-outstation-trip.webp",
        date: "29 January, 2025",
        readTime: "3 min",
        slug: "best-times-to-plan-an-outstation-trip",
      },
      {
        id: 27,
        title: "10 Best Road Trips in India: Your Ultimate Guide to Scenic Drives",
        excerpt: "India's landscapes are as diverse as its culture...",
        image: "/10-Best-Road-Trips-in-India.webp",
        date: "01 February, 2025",
        readTime: "5 min",
        slug: "10-best-road-trips-india",
      },
      {
        id: 28,
        title: "How to Avoid Sleep While Driving: A Driver's Guide",
        excerpt: "Every year, thousands of road accidents occur...",
        image: "/avoid-sleep-while-driving.webp",
        date: "05 February, 2025",
        readTime: "5 min",
        slug: "how-to-avoid-sleep-while-driving",
      },
      {
        id: 29,
        title: "One-Way Trip vs. Round Trip: How to Choose the Right Option for Your Journey",
        excerpt: "Choosing between a one-way trip vs. round trip...",
        image: "/one-way-trip-vs-round-trip.webp",
        date: "09 February, 2025",
        readTime: "4 min",
        slug: "one-way-trip-vs-round-trip",
      },
      {
        id: 30,
        title: "Hire Driver in Pune for Outstation: Best Services for a Stress-Free Trip",
        excerpt: "Planning a long journey from Pune? When you...",
        image: "/hire-driver-in-pune-for-outstation.webp",
        date: "11 February, 2025",
        readTime: "4 min",
        slug: "hire-driver-in-pune-for-outstation",
      },
      {
        id: 31,
        title: "Top 10 Healthy Road Trip Snacks for Outstation Driving",
        excerpt: "Long drives demand snacks that keep you fueled ...",
        image: "/top-10-road-trip-snacks.webp",
        date: "14 February, 2025",
        readTime: "4 min",
        slug: "road-trip-snacks",
      },
      {
        id: 32,
        title: "Car Breakdown Emergency: What to Do When Your Vehicle Stops on the Road",
        excerpt: "A car breakdown can disrupt your day and put you ...",
        image: "/car-breakdown-emergency-what-to-do-when-your-vehicle-stops-on-the-road.webp",
        date: "19 February, 2025",
        readTime: "4 min",
        slug: "car-breakdown-emergency-what-to-do-when-your-vehicle-stops-on-the-road",
      },
      {
        id: 33,
        title: "Drive Greener, Explore Better: Your Top 10 Tips for Sustainable Travel in 2025",
        excerpt: "Imagine exploring breathtaking landscapes, immersing ...",
        image: "/Your-Top-10-Tips-for-Sustainable-Travel-in-2025.webp",
        date: "25 February, 2025",
        readTime: "6 min",
        slug: "sustainable-travel",
      },
      {
        id: 34,
        title: "Tips for a Comfortable Journey with a Driver for Outstation Trips",
        excerpt: "Embarking on a long-distance journey can be an exciting adventure...",
        image: "/tips-for-comfortable-journey-with-driver-for-outstation-trips.webp",
        date: "6 March, 2025",
        readTime: "5 min",
        slug: "tips-for-comfortable-journey-with-driver-for-outstation-trips",
      },
      {
        id: 35,
        title: "Nightlife in Mumbai: Your Ultimate Guide to an Exciting & Safe Night Out",
        excerpt: "Mumbai, the city that never sleeps, thrives after dark, with nightlife...",
        image: "/nightlife-in-mumbai.webp",
        date: "10 March, 2025",
        readTime: "4 min",
        slug: "nightlife-in-mumbai",
      },
      {
        id: 36,
        title: "Hiring the Right Hands on the Wheel: 10 Essential Interview Questions for Drivers in Mumbai",
        excerpt: "In the bustling metropolis of Mumbai and Pune, a reliable driver is more ...",
        image: "/driver-interview-questions-2025.webp",
        date: "17March, 2025",
        readTime: "4 min",
        slug: "driver-interview-questions-2025",
      },
      {
        id: 37,
        title: "Traffic Signs in India 2025: Meanings & Safe Driving Guide",
        excerpt: "Navigating the roads of India can be a thrilling experience ...",
        image: "/blog5.webp",
        date: "22 Mar, 2025",
        readTime: "7 min",
        slug: "traffic-signs",
      },
      {
        id: 38,
        title: "Why Driver Background Checks Are Non-Negotiable for Safety",
        excerpt: "In today's fast-paced world, ensuring the safety of passengers...",
        image: "/Featured_image_Why_Driver_Background_Checks_Are_Non_Negotiable_for_Safety.webp",
        date: "27 March, 2025",
        readTime: "4 min",
        slug: "driver-background-check",
      },
      {
        id: 39,
        title: "Navigating Pune's Traffic: A Data-Backed Guide for a Smoother Commute",
        excerpt: "Picture this: the average commuter in Pune spends a staggering...",
        image: "/blog6.webp",
        date: "05 April, 2025",
        readTime: "4 min",
        slug: "pune-traffic",
      },
      {
        id: 40,
        title: "15 Best Places to Visit Near Pune in 2025",
        excerpt: "Looking for the best places to visit near Pune...",
        image: "/Shree-Someshwar-temple-Mandir.webp",
        date: "16 April, 2025",
        readTime: "4 min",
        slug: "places-to-visit-near-pune",
      },
      {
        id: 41,
        title: "The Ultimate Travel Packing Checklist: Essentials for Every Trip (2025)",
        excerpt: "We've all been there: halfway to the airport, realizing...",
        image: "/travel-packing-checklist-feature-image.webp",
        date: "25 April, 2025",
        readTime: "4 min",
        slug: "travel-packing-checklist",
      },
      {
        id: 42,
        title: "Night Driver Services: Safe Travel After Hours Without the Stress",
        excerpt: "Late-night travel doesn’t have to be risky or stressful. Discover how night driver...",
        image: "/night_driver_services_hero.webp",
        date: "07 January, 2026",
        readTime: "3 min",
        slug: "night-driver-services",
      },
      {
        id: 43,
        title: "Corporate Driver Services for Business Travel: Because Business Trips Deserve Smooth Drives Too",
        excerpt: "Simplify corporate travel with professional driver services. From airport transfers to executive....",
        image: "/corporate-driver-services-for-business-travel.webp",
        date: "10 January, 2026",
        readTime: "3 min",
        slug: "corporate-driver-services-for-business-travel",
      },
      {
        id: 44,
        title: "Driver on Hire in Mumbai: Reliable Services for Every Journey",
        excerpt: "Tired of driving in Mumbai traffic? Driver on Hire offers professional drivers for city rides, airport transfers...",
        image: "/reliable-services-for-every-journey.webp",
        date: "16 January, 2026",
        readTime: "3 min",
        slug: "driver-on-hire-in-mumbai",
      },
      {
        id: 45,
        title: "Why Booking a Driver After a Party Is the New Adulting Move",
        excerpt: "Don't let a great night end in stress. Discover why hiring a driver for a day is the...",
        image: "/booking_a_driver_after_a_party.webp",
        date: "23 January, 2026",
        readTime: "4 min",
        slug: "booking-a-driver-after-a-party-is-the-new-adulting-move",
      },
      {
        id: 46,
        title: "Why More People Prefer Drivers on Hire in India | Convenience & Comfort",
        excerpt: "Tired of traffic jams, parking hassles, and long drives? Learn why more people in India are choosing drivers on hire for convenience, comfort, and stress-free travel.",
        image: "/drivers_preference_india.webp",
        date: "04 February, 2026",
        readTime: "3 min",
        slug: "why-more-people-prefer-drivers-on-hire-in-india",
      },
      {
        id: 47,
        title: "Valentine’s Day Plans? Don’t Let Driving Be the Third Wheel",
        excerpt: "Valentine’s Day is about moments, not mirrors and traffic jams. If driving stress is already creeping into your plans, it’s time to step back, relax, and let a professional driver take the wheel.",
        image: "/valentines_day_blog.webp",
        date: "12 February, 2026",
        readTime: "4 min",
        slug: "valentines-day-driving-third-wheel",
      },
      {
        id: 48,
        title: "It’s Friday. If You’re Drinking, You’re Not Driving. Simple | Driver on Hire Mumbai & Pune",
        excerpt: "Friday nights are for fun, not for risk. If you’re drinking, you’re not driving. Here’s why hiring a professional driver is the smartest decision you can make this weekend.",
        image: "/friday-night-drinking-and-driving-simple.webp",
        date: "20 February, 2026",
        readTime: "4 min",
        slug: "its-friday-if-youre-drinking-youre-not-driving-simple",
      },
      {
        id: 49,
        title: "2026 Travel Trend: Why Hiring a Driver Is the New Luxury in India",
        excerpt: "In 2026, luxury is not about owning a bigger car. It’s about not having to drive it. Here’s why hiring a driver is becoming the preferred travel choice across Indian cities.",
        image: "/2026-travel-trend.webp",
        date: "02 March, 2026",
        readTime: "4 min",
        slug: "2026-travel-trend",
      },
      {
        id: 50,
        title: "Our Commitment to Women’s Safety - Today, Tomorrow, Always",
        excerpt: "Safety is not a feature. It is a responsibility. At Driver on Hire, we are committed to providing safe, respectful, and reliable travel for women — every single day.",
        image: "/women's-day-blog.webp",
        date: "07 March, 2026",
        readTime: "5 min",
        slug: "trusted-driver-service-for-womens-safety",
      },
      {
        id: 51,
        title: "From a Simple Idea to 3,46,706 Completed Trips: The Driver on Hire Journey",
        excerpt: "Daily commuting in busy cities can be stressful. Driver on Hire started with a simple idea: make travel easier with reliable drivers. Today, with over 3,46,706 completed bookings, the journey continues to grow.",
        image: "/driver-on-hire-milestone.png",
        date: "19 March, 2026",
        readTime: "5 min",
        slug: "driver-on-hire-journey-milestone-completed-trips",
      },

    ];

    // Find the blog post by slug
    const post = posts.find(p => p.slug === slug);
    
    if (!post) {
      return;
    }

    // Extract meta title and description from the page
    const getMetaContent = (name: string) => {
      const meta = document.querySelector(`meta[name="${name}"]`) || 
                   document.querySelector(`meta[property="${name}"]`);
      return meta ? meta.getAttribute('content') : null;
    };

    // Get title from page title tag or fallback to post title
    const pageTitle = document.title || post.title;

    // Get description from meta or fallback to post excerpt
    const metaDescription = getMetaContent('description') || 
                           getMetaContent('og:description') || 
                           post.excerpt;

    // Convert date to ISO format
    const formatDate = (dateStr: string) => {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) {
        return new Date().toISOString();
      }
      return date.toISOString();
    };

    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `https://www.driveronhire.com/blog/${slug}#blogposting`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.driveronhire.com/blog/${slug}`
      },
      "headline": pageTitle,
      "description": metaDescription,
      "image": `https://www.driveronhire.com${post.image}`,
      "datePublished": formatDate(post.date),
      "publisher": {
        "@id": "https://www.driveronhire.com/#localbusiness"
      },
      "author": {
        "@type": "Organization",
        "name": "DriverOnHire",
        "url": "https://www.driveronhire.com/"
      },
      "url": `https://www.driveronhire.com/blog/${slug}`,
      "inLanguage": "en",
      "isAccessibleForFree": true,
      "isPartOf": {
        "@type": "Blog",
        "name": "DriverOnHire Blog",
        "url": "https://www.driveronhire.com/blog/"
      },
      "timeRequired": `PT${post.readTime.replace(/\s*min\s*/, 'M')}`
    };

    setSchemaData(schema);
  }, [pathname]);

  if (!schemaData) {
    return null;
  }

  return (
    <Script
      id="auto-blog-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
} 