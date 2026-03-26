"use client";

import Image from "next/image";
import Link from "next/link";

const FeaturedMedia = () => {
  const mediaLogos = [
      {
        name: "Lokmattimes",
        logo: "/article-logo/lokmattimes-main-logo.png",
        description: "Regional News",
        url: "https://www.lokmattimes.com/national/indias-drink-driving-crisis-driveronhire-expands-late-night-services-to-save-lives-a475/",
      },
      {
        name: "Times Now",
        logo: "/article-logo/Times_Now_logo.png",
        description: "Bizz Impact",
        url: "https://www.timesnownews.com/bizz-impact/stuck-in-traffic-indias-executives-are-hiring-drivers-to-stay-productive-article-153363840",
      },
    {
      name: "Mid-Day",
      logo: "/article-logo/mid-day.png",
      description: "Leading Mumbai Daily",
      url: "https://www.mid-day.com/buzz/article/drowsy%E2%80%AFdriving-crisis-driver%E2%80%AFon%E2%80%AFhire-launches-national-road-safety-campaign-sleep%E2%80%AFwell-travel%E2%80%AFwell-6655",
    },
    {
      name: "APN News",
      logo: "/article-logo/apnnews.png",
      description: "National News Network",
      url: "https://www.apnnews.com/park-right-drive-right-road-safety-campaign/",
    },
    {
      name: "Republic",
      logo: "/article-logo/republic.png",
      description: "Digital News Platform",
      url: "https://www.republicworld.com/initiatives/driver-on-hire-promotes-awareness-against-mobile-usage-while-driving",
    },
  ];

  return (
    <div className="featured-media-static">
      {mediaLogos.map((media, index) => (
        <Link
          href={media.url}
          key={index}
          className="media-logo-static"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={media.logo}
            alt={`${media.name} Logo`}
            className="media-img"
          />
          {/* <span>{media.description}</span> */}
        </Link>
      ))}
    </div>
  );
};

export default FeaturedMedia;
