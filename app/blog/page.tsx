import SearchableBlogList from "../component/search-bar";
import Script from "next/script";

// Fetch blog posts
async function getPosts() {
  return [
    // {
    //   id: 2,
    //   title:
    //     "Top Destinations from Mumbai for a Relaxing Driver-Driven Experience",
    //   excerpt:
    //     "The vibrant city of Mumbai, with its bustling streets and ceaseless energy...",
    //   image: "/blog1.webp",
    //   date: "11 Sept, 2023",
    //   readTime: "6 min",
    //   slug: "blog/top-destinations-from-mumbai-for-relaxing-driver-driven-experience/",
    // },
    // {
    //   id: 3,
    //   title:
    //     "Exploring the Nightlife of Your City with a Dedicated Night Driver from Driveronhire.com",
    //   excerpt:
    //     "When the sun sets and the city lights come alive, the possibilities...",
    //   image: "/blog2.webp",
    //   date: "19 Nov, 2023",
    //   readTime: "4 min",
    //   slug: "blog/nightlife-in-mumbai/",
    // },
    // {
    //   id: 4,
    //   title:
    //     "Safety First: The Importance of Background Checks for Professional Drivers",
    //   excerpt: "In the realm of transportation services, ensuring passenger...",
    //   image: "/blog4.webp",
    //   date: "15 Feb, 2024",
    //   readTime: "5 min",
    //   slug: "blog/importance-of-background-checks-for-drivers/",
    // },
    // {
    //   id: 5,
    //   title: "Essential Traffic Signs Every Driver Should Know in India",
    //   excerpt: "Navigating the roads of India can be a thrilling experience...",
    //   image: "/blog5.webp",
    //   date: "17 Feb, 2024",
    //   readTime: "7 min",
    //   slug: "blog/essential-traffic-signs/",
    // },
    // {
    //   id: 6,
    //   title: "Navigating Pune's Traffic: Expert Advice from Driveronhire.com",
    //   excerpt: "Pune, known as the Oxford of the East and the cultural...",
    //   image: "/blog6.webp",
    //   date: "19 Feb, 2024",
    //   readTime: "4 min",
    //   slug: "blog/navigating-pune-traffic/",
    // },
    // {
    //   id: 7,
    //   title:
    //     "Exploring Pune's Hidden Gems: Top Outstation Destinations to Visit",
    //   excerpt: "Nestled in the heart of Maharashtra, Pune is a vibrant city...",
    //   image: "/blog7.webp",
    //   date: "16 March, 2024",
    //   readTime: "4 min",
    //   slug: "blog/explore-pune-hidden-destinations/",
    // },
    {
      id: 8,
      title:
        "Outstation Drivers Made Easy: How To Hire, Benefits, Costs, and Expert Tips",
      excerpt: "Picture this: you're heading out on a long-distance trip...",
      image: "/blog8.webp",
      date: "30 November, 2024",
      readTime: "8 min",
      slug: "blog/outstation-drivers/",
    },
    {
      id: 9,
      title:
        "Why Hiring an Outstation Driver Is the Best Choice for Long-Distance Travel",
      excerpt:
        "Long-distance travel offers the promise of adventure and new experiences....",
      image: "/outstation-driver-for-long-distance travel.webp",
      date: "03 December, 2024",
      readTime: "8 min",
      slug: "blog/why-hiring-an-outstation-driver-is-the-best-choice-for-long-distance-travel/",
    },
    {
      id: 11,
      title:
        "What to Expect When Booking an Outstation Driver: From Pickup to Drop-off",
      excerpt:
        "Booking an outstation driver makes long-distance travel stress-free and enjoyable....",
      image: "/what-to-expect.webp",
      date: "06 December, 2024",
      readTime: "8 min",
      slug: "blog/booking-outstation-driver/",
    },
    {
      id: 12,
      title:
        "7 Key Benefits of Hiring a Driver for a Stress-Free Weekend Getaway",
      excerpt:
        "Weekend getaways are all about unwinding and escaping the daily grind...",
      image: "/Featured Image of 7 Benefits Of Hiring a Drivers.webp",
      date: "07 December, 2024",
      readTime: "4 min",
      slug: "blog/benefits-of-hiring-driver-for-weekend-getaway/",
    },
    {
      id: 13,
      title: "Outstation Driver vs. Self-Driving: Which to Choose?",
      excerpt:
        "Traveling to an outstation destination is always an exciting experience...",
      image: "/Outstation Driver vs. Self-Driving.webp",
      date: "7 December, 2024",
      readTime: "4 min",
      slug: "blog/outstation-driver-vs-self-driving/",
    },
    {
      id: 15,
      title: "Planning a Road Trip? Here Are 10 Must-Know Tips for Travelers",
      excerpt: "Road trips are all about adventure, exploration...",
      image: "/Planning_a_Road_Trip.webp",
      date: "20 December, 2024",
      readTime: "3 min",
      slug: "blog/planning-road-trip/",
    },
    {
      id: 16,
      title: "5 Common Mistakes to Avoid When Planning a Road Trip",
      excerpt: "Road trips are an exciting way to explore new places...",
      image: "/Common-Mistakes-to-Avoid-When-Planning-a-Road-Trip.webp",
      date: "23 December, 2024",
      readTime: "3 min",
      slug: "blog/road-trip-mistakes/",
    },
    {
      id: 17,
      title:
        "Safety Measures Taken by Professional Drivers for Outstation Journeys",
      excerpt: "During long trips, safety is key. It makes the drive easy...",
      image: "/Professional-Drivers-for-Outstation-Journeys.webp",
      date: "26 December, 2024",
      readTime: "3 min",
      slug: "blog/safety-measures/",
    },
    {
      id: 19,
      title: "Types of Trips Requiring a Driver: Simplify Your Journey",
      excerpt: "Getting a chauffeur can simplify your outstation trip",
      image: "/Types-of-Trips-Requiring-a-Driver.webp",
      date: "30 December, 2024",
      readTime: "4 min",
      slug: "blog/types-of-trips-require-a-driver/",
    },
    {
      id: 20,
      title:
        "Acting Driver Charges for Outstation Trips: Is It Worth the Investment?",
      excerpt: "Picture this: You're planning an exciting road trip with your",
      image: "/Acting-Driver-Charges-for-Outstation-Trips.webp",
      date: "02 January, 2025",
      readTime: "3 min",
      slug: "blog/acting-driver-charges-outstation-trips/",
    },
    {
      id: 21,
      title: "Technology in Travel: Transforming Modern Journeys",
      excerpt: "Technology in travel has changed the way we experience",
      image: "/Transforming-Modern-Journeys.webp",
      date: "07 January, 2025",
      readTime: "3 min",
      slug: "blog/transforming-modern-journeys/",
    },
    {
      id: 22,
      title:
        "Essential Gadgets and Apps for Stress-Free Outstation Travel in India",
      excerpt: "Imagine this: You're embarking on an outstation road trip.",
      image: "/Apps-for-Stress-Free-Outstation-Travel.webp",
      date: "10 January, 2025",
      readTime: "4 min",
      slug: "blog/best-travel-gadgets/",
    },
    {
      id: 23,
      title:
        "Long Distance driving is such an exciting experience that can be..",
      excerpt: "Imagine this: You're embarking on an outstation road trip.",
      image: "/long-distance-driving.webp",
      date: "15 January, 2025",
      readTime: "5 min",
      slug: "blog/long-distance-driving/",
    },
    {
      id: 24,
      title: "10 Must-Have Safety Features to Look for in Outstation Vehicles",
      excerpt: "Picture this: a long, scenic road trip with your loved ones...",
      image: "/Safety-Features-to-Look-for-in-Outstation.webp",
      date: "20 January, 2025",
      readTime: "3 min",
      slug: "blog/safety-features-for-outstation-vehicles/",
    },
    {
      id: 25,
      title:
        "How to Plan an Affordable Outstation Trip: Simple Tips for Budget-Friendly Travel",
      excerpt: "Outstation trips offer the perfect escape from routine life...",
      image: "/affordable-outstation-trip.webp",
      date: "25 January, 2025",
      readTime: "3 min",
      slug: "blog/affordable-outstation-trip/",
    },
    {
      id: 26,
      title: "Best Times to Take an Outstation Trip",
      excerpt: "Are you Planning an outstation trip? You know...",
      image: "/best-times-to-an-outstation-trip.webp",
      date: "29 January, 2025",
      readTime: "3 min",
      slug: "blog/best-times-to-plan-an-outstation-trip/",
    },
    {
      id: 27,
      title:
        "10 Best Road Trips in India: Your Ultimate Guide to Scenic Drives",
      excerpt: "India's landscapes are as diverse as its culture...",
      image: "/10-Best-Road-Trips-in-India.webp",
      date: "01 February, 2025",
      readTime: "5 min",
      slug: "blog/10-best-road-trips-india/",
    },
    {
      id: 28,
      title: "How to Avoid Sleep While Driving: A Driver's Guide",
      excerpt: "Every year, thousands of road accidents occur...",
      image: "/avoid-sleep-while-driving.webp",
      date: "05 February, 2025",
      readTime: "5 min",
      slug: "blog/how-to-avoid-sleep-while-driving/",
    },
    {
      id: 29,
      title:
        "One-Way Trip vs. Round Trip: How to Choose the Right Option for Your Journey",
      excerpt: "Choosing between a one-way trip vs. round trip...",
      image: "/one-way-trip-vs-round-trip.webp",
      date: "09 February, 2025",
      readTime: "4 min",
      slug: "blog/one-way-trip-vs-round-trip/",
    },
    {
      id: 30,
      title:
        "Hire Driver in Pune for Outstation: Best Services for a Stress-Free Trip",
      excerpt: "Planning a long journey from Pune? When you...",
      image: "/hire-driver-in-pune-for-outstation.webp",
      date: "11 February, 2025",
      readTime: "4 min",
      slug: "blog/hire-driver-in-pune-for-outstation/",
    },
    {
      id: 31,
      title: "Top 10 Healthy Road Trip Snacks for Outstation Driving",
      excerpt: "Long drives demand snacks that keep you fueled ...",
      image: "/top-10-road-trip-snacks.webp",
      date: "14 February, 2025",
      readTime: "4 min",
      slug: "blog/road-trip-snacks/",
    },
    {
      id: 32,
      title:
        "Car Breakdown Emergency: What to Do When Your Vehicle Stops on the Road",
      excerpt: "A car breakdown can disrupt your day and put you ...",
      image:
        "/car-breakdown-emergency-what-to-do-when-your-vehicle-stops-on-the-road.webp",
      date: "19 February, 2025",
      readTime: "4 min",
      slug: "blog/car-breakdown-emergency-what-to-do-when-your-vehicle-stops-on-the-road/",
    },
    {
      id: 33,
      title:
        "Drive Greener, Explore Better: Your Top 10 Tips for Sustainable Travel in 2025",
      excerpt: "Imagine exploring breathtaking landscapes, immersing ...",
      image: "/Your-Top-10-Tips-for-Sustainable-Travel-in-2025.webp",
      date: "25 February, 2025",
      readTime: "6 min",
      slug: "blog/sustainable-travel/",
    },
    {
      id: 34,
      title:
        "Tips for a Comfortable Journey with a Driver for Outstation Trips",
      excerpt:
        "Embarking on a long-distance journey can be an exciting adventure...",
      image:
        "/tips-for-comfortable-journey-with-driver-for-outstation-trips.webp",
      date: "6 March, 2025",
      readTime: "5 min",
      slug: "blog/tips-for-comfortable-journey-with-driver-for-outstation-trips/",
    },
    {
      id: 35,
      title:
        "Nightlife in Mumbai: Your Ultimate Guide to an Exciting & Safe Night Out",
      excerpt:
        "Mumbai, the city that never sleeps, thrives after dark, with nightlife...",
      image: "/nightlife-in-mumbai.webp",
      date: "10 March, 2025",
      readTime: "4 min",
      slug: "blog/nightlife-in-mumbai/",
    },
    {
      id: 36,
      title:
        "Hiring the Right Hands on the Wheel: 10 Essential Interview Questions for Drivers in Mumbai",
      excerpt:
        "In the bustling metropolis of Mumbai and Pune, a reliable driver is more ...",
      image: "/driver-interview-questions-2025.webp",
      date: "17March, 2025",
      readTime: "4 min",
      slug: "blog/driver-interview-questions-2025/",
    },
    {
      id: 37,
      title: "Traffic Signs in India 2025: Meanings & Safe Driving Guide",
      excerpt:
        "Navigating the roads of India can be a thrilling experience ...",
      image: "/blog5.webp",
      date: "22 Mar, 2025",
      readTime: "7 min",
      slug: "blog/traffic-signs/",
    },
    {
      id: 38,
      title: "Why Driver Background Checks Are Non-Negotiable for Safety",
      excerpt:
        "In today's fast-paced world, ensuring the safety of passengers...",
      image:
        "/Featured_image_Why_Driver_Background_Checks_Are_Non_Negotiable_for_Safety.webp",
      date: "27 March, 2025",
      readTime: "4 min",
      slug: "blog/driver-background-check/",
    },
    {
      id: 39,
      title:
        "Navigating Pune's Traffic: A Data-Backed Guide for a Smoother Commute",
      excerpt:
        "Picture this: the average commuter in Pune spends a staggering...",
      image: "/blog6.webp",
      date: "05 April, 2025",
      readTime: "4 min",
      slug: "blog/pune-traffic/",
    },
    {
      id: 40,
      title: "15 Best Places to Visit Near Pune in 2025",
      excerpt: "Looking for the best places to visit near Pune...",
      image: "/Shree-Someshwar-temple-Mandir.webp",
      date: "16 April, 2025",
      readTime: "4 min",
      slug: "blog/places-to-visit-near-pune/",
    },
    {
      id: 41,
      title: "The Ultimate Travel Packing Checklist: Essentials for Every Trip (2025)",
      excerpt: "We've all been there: halfway to the airport, realizing...",
      image: "/travel-packing-checklist-feature-image.webp",
      date: "25 April, 2025",
      readTime: "4 min",
      slug: "blog/travel-packing-checklist/",
    },
    {
      id: 42,
      title: "Night Driver Services: Safe Travel After Hours Without the Stress",
      excerpt: "Late-night travel doesn’t have to be risky or stressful. Discover how night driver...",
      image: "/night_driver_services_hero.webp",
      date: "07 January, 2026",
      readTime: "3 min",
      slug: "blog/night-driver-services/",
    },
    {
      id: 43,
      title: "Corporate Driver Services for Business Travel: Because Business Trips Deserve Smooth Drives Too",
      excerpt: "Simplify corporate travel with professional driver services. From airport transfers to executive....",
      image: "/corporate-driver-services-for-business-travel.webp",
      date: "10 January, 2026",
      readTime: "3 min",
      slug: "blog/corporate-driver-services-for-business-travel/",
    },
    {
      id: 44,
      title: "Driver on Hire in Mumbai: Reliable Services for Every Journey",
      excerpt: "Tired of driving in Mumbai traffic? Driver on Hire offers professional drivers for city rides, airport transfers...",
      image: "/reliable-services-for-every-journey.webp",
      date: "16 January, 2026",
      readTime: "3 min",
      slug: "blog/driver-on-hire-in-mumbai/",
    },
    {
      id: 45,
      title: "Why Booking a Driver After a Party Is the New Adulting Move",
      excerpt: "Don't let a great night end in stress. Discover why hiring a driver for a day is the...",
      image: "/booking_a_driver_after_a_party.webp",
      date: "23 January, 2026",
      readTime: "4 min",
      slug: "blog/booking-a-driver-after-a-party-is-the-new-adulting-move/",
    },
    {
      id: 46,
      title: "Why More People Prefer Drivers on Hire in India | Convenience & Comfort",
      excerpt: "Tired of traffic jams, parking hassles, and long drives? Learn why more people in India are choosing drivers on hire for convenience, comfort, and stress-free travel.",
      image: "/drivers_preference_india.webp",
      date: "04 February, 2026",
      readTime: "3 min",
      slug: "blog/why-more-people-prefer-drivers-on-hire-in-india/",
    },
    {
      id: 47,
      title: "Valentine’s Day Plans? Don’t Let Driving Be the Third Wheel",
      excerpt: "Valentine’s Day is about moments, not mirrors and traffic jams. If driving stress is already creeping into your plans, it’s time to step back, relax, and let a professional driver take the wheel.",
      image: "/valentines_day_blog.webp",
      date: "12 February, 2026",
      readTime: "4 min",
      slug: "blog/valentines-day-driving-third-wheel/",
    },
    {
      id: 48,
      title: "It’s Friday. If You’re Drinking, You’re Not Driving. Simple | Driver on Hire Mumbai & Pune",
      excerpt: "Friday nights are for fun, not for risk. If you’re drinking, you’re not driving. Here’s why hiring a professional driver is the smartest decision you can make this weekend.",
      image: "/friday-night-drinking-and-driving-simple.webp",
      date: "20 February, 2026",
      readTime: "4 min",
      slug: "blog/its-friday-if-youre-drinking-youre-not-driving-simple/",
    },
    {
      id: 49,
      title: "2026 Travel Trend: Why Hiring a Driver Is the New Luxury in India",
      excerpt: "In 2026, luxury is not about owning a bigger car. It’s about not having to drive it. Here’s why hiring a driver is becoming the preferred travel choice across Indian cities.",
      image: "/2026-travel-trend.webp",
      date: "02 March, 2026",
      readTime: "4 min",
      slug: "blog/2026-travel-trend/",
    },
    {
      id: 50,
      title: "Our Commitment to Women’s Safety - Today, Tomorrow, Always",
      excerpt: "Safety is not a feature. It is a responsibility. At Driver on Hire, we are committed to providing safe, respectful, and reliable travel for women — every single day.",
      image: "/women's-day-blog.webp",
      date: "07 March, 2026",
      readTime: "5 min",
      slug: "blog/trusted-driver-service-for-womens-safety/",
    },
    {
      id: 51,
      title: "From a Simple Idea to 3,46,706 Completed Trips: The Driver on Hire Journey",
      excerpt: "Daily commuting in busy cities can be stressful. Driver on Hire started with a simple idea: make travel easier with reliable drivers. Today, with over 3,46,706 completed bookings, the journey continues to grow.",
      image: "/driver-on-hire-milestone.jpeg",
      date: "19 March, 2026",
      readTime: "5 min",
      slug: "blog/driver-on-hire-journey-milestone-completed-trips/",
    },
  ];

}

export default async function BlogPage() {
  const posts = await getPosts(); // Fetch posts data on the server

  return (
    <>
      {/* Client-side script to update canonical URL */}
      <Script id="update-canonical" strategy="afterInteractive">
        {`
          (function() {
            function updateCanonical() {
              const urlParams = new URLSearchParams(window.location.search);
              const pageParam = urlParams.get('page');
              
              let canonicalUrl = 'https://www.driveronhire.com/blog/';
              if (pageParam) {
                // Update canonical URL for paginated pages
                canonicalUrl = 'https://www.driveronhire.com/blog/?page=' + pageParam;
                
                // Update title with page number
                document.title = 'Driver On Hire Blog | Travel Tips & Driver Service Insights | Page ' + pageParam;
                
                // Update meta description with page number
                const metaDesc = document.querySelector('meta[name="description"]');
                if (metaDesc) {
                  metaDesc.setAttribute('content', 'Explore expert advice on hiring drivers, travel tips, and industry insights. Stay informed with our latest articles for seamless travel experiences | Page ' + pageParam);
                } else {
                  const newMetaDesc = document.createElement('meta');
                  newMetaDesc.setAttribute('name', 'description');
                  newMetaDesc.setAttribute('content', 'Explore expert advice on hiring drivers, travel tips, and industry insights. Stay informed with our latest articles for seamless travel experiences | Page ' + pageParam);
                  document.head.appendChild(newMetaDesc);
                }
              } else {
                // Reset title and description for the first page
                document.title = 'Driver On Hire Blog | Travel Tips & Driver Service Insights';
                
                // Reset meta description for the first page
                const metaDesc = document.querySelector('meta[name="description"]');
                if (metaDesc) {
                  metaDesc.setAttribute('content', 'Explore expert advice on hiring drivers, travel tips, and industry insights. Stay informed with our latest articles for seamless travel experiences.');
                }
              }
              
              // Update canonical link
              let link = document.querySelector('link[rel="canonical"]');
              if (!link) {
                link = document.createElement('link');
                link.rel = 'canonical';
                document.head.appendChild(link);
              }
              link.href = canonicalUrl;
            }
            
            // Run on page load
            if (document.readyState === 'complete') {
              updateCanonical();
            } else {
              window.addEventListener('load', updateCanonical);
            }
            
            // Listen for URL changes
            window.addEventListener('popstate', updateCanonical);
            
            // Listen for custom event from pagination component
            window.addEventListener('urlchange', updateCanonical);
          })();
        `}
      </Script>

      {/* Hero Section */}
      <div className="blog-main container text-center bg-white">
        <h1 className="custom-head" style={{ fontWeight: "900" }}>
          Driveronhire Car Care & Driving Blog
        </h1>
        <p
          className="text-muted"
          style={{ maxWidth: "500px", margin: "20px auto" }}
        >
          Your go-to resource for premium, police-verified drivers on demand,
          available 24/7 or by the hour.
        </p>
      </div>

      {/* Categories and Search */}
      <div className="py-3">
        <SearchableBlogList posts={posts} />
      </div>
    </>
  );
}

export function generateMetadata() {
  // Static metadata for the initial page load
  return {
    title: "Driver On Hire Blog | Travel Tips & Driver Service Insights",
    description:
      "Explore expert advice on hiring drivers, travel tips, and industry insights. Stay informed with our latest articles for seamless travel experiences.",
    alternates: {
      canonical: "https://www.driveronhire.com/blog/",
      languages: {
        'en': 'https://www.driveronhire.com/blog/',
        'x-default': 'https://www.driveronhire.com/blog/',
      },
    },
  };
}
