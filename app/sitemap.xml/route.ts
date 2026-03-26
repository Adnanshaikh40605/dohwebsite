import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://www.driveronhire.com'
  const currentDate = new Date().toISOString()
   
  // Main pages
  const mainPages = [
    '',
    '/drivers-in-mumbai',
    '/drivers-in-navi-mumbai',
    '/drivers-in-thane',
    '/drivers-in-pune',
    '/contact',
    '/faq',
    '/hourly-drivers',
    '/outstation-drivers',
    '/permanent-drivers',
    '/daily-drivers',
    '/temporary-drivers',
    '/night-drivers',
    '/about',
    '/rates',
    '/blog',
    '/privacy-policy',
    '/drivers-job',
    '/driver-services',
    '/outstation-drop-booking',
    '/otp-login',
    '/register',
    '/permanent-pricing',
  ]

  // Mumbai location pages
  const mumbaiLocations = [
    'bandra', 'marine-lines', 'andheri', 'juhu', 'colaba', 'worli', 'churchgate',
    'dadar', 'powai', 'wadala', 'santacruz', 'borivali', 'kandivali', 'kurla',
    'mira-road', 'sion', 'malad', 'chembur', 'ghatkopar', 'fort', 'cuffe-parade',
    'mazgaon', 'tardeo', 'byculla', 'lower-parel', 'lalbaug', 'parel', 'sewri',
    'jogeshwari', 'goregaon', 'versova', 'vile-parle', 'dahisar', 'mulund',
    'bhandup', 'vikhroli', 'kanjurmarg', 'bhayandar', 'mumbra', 'dombivli',
    'asangaon', 'titwala', 'mankhurd', 'nahur', 'naigaon', 'sandhurst-road',
    'vidya-vihar', 'matunga', 'chinchpokli', 'currey-road', 'virar', 'vasai'
  ]

  // Pune location pages
  const puneLocations = [
    'baner', 'kalyani-nagar', 'hadapsar', 'aundh', 'pimpri', 'koregaon-park', 'pashan',
    'viman-nagar', 'wakad', 'hinjewadi', 'balewadi', 'magarpatta-city', 'bhavdan',
    'undri', 'lohegaon', 'shivaji-nagar', 'deccan-gymkhana', 'warje', 'dhanori',
    'sus-road', 'manjri', 'dhankawadi', 'karve-nagar', 'nibm-road', 'kharadi',
    'mundhwa', 'bund-garden', 'yerwada', 'vishrantwadi', 'pirangut', 'katraj',
    'dhayari', 'narhe', 'sinhagad-road', 'thergaon', 'rahatani', 'bibwewadi',
    'mahalunge', 'nanded-city'
  ]

  // Blog pages
  const blogPages = [
    'sustainable-travel',
    'car-breakdown-emergency-what-to-do-when-your-vehicle-stops-on-the-road',
    'road-trip-snacks',
    'hire-driver-in-pune-for-outstation',
    'one-way-trip-vs-round-trip',
    'how-to-avoid-sleep-while-driving',
    '10-best-road-trips-india',
    'best-times-to-plan-an-outstation-trip',
    'affordable-outstation-trip',
    'safety-features-for-outstation-vehicles',
    'long-distance-driving',
    'best-travel-gadgets',
    'why-hiring-an-outstation-driver-is-the-best-choice-for-long-distance-travel',
    'outstation-drivers',
    'planning-road-trip',
    'benefits-of-hiring-driver-for-weekend-getaway',
    'booking-outstation-driver',
    'outstation-driver-vs-self-driving',
    'traffic-signs',
    'tips-for-comfortable-journey-with-driver-for-outstation-trips',
    'driver-interview-questions-2025',
    'road-trip-mistakes',
    'safety-measures',
    'types-of-trips-require-a-driver',
    'acting-driver-charges-outstation-trips',
    'transforming-modern-journeys',
    'driver-background-check',
    'pune-traffic',
    'nightlife-in-mumbai',
    'places-to-visit-near-pune',
    'travel-packing-checklist',
    'importance-of-background-checks-for-drivers',
    'night-driver-services',
    'corporate-driver-services-for-business-travel',
    'driver-on-hire-in-mumbai',
    'booking-a-driver-after-a-party-is-the-new-adulting-move',
    'why-more-people-prefer-drivers-on-hire-in-india',
    'valentines-day-driving-third-wheel',
    'its-friday-if-youre-drinking-youre-not-driving-simple',
    '2026-travel-trend',
    'trusted-driver-service-for-womens-safety',
    'driver-on-hire-journey-milestone-completed-trips'
  ]


  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  // Add main pages
  mainPages.forEach(page => {
    const url = page === '' ? baseUrl : `${baseUrl}${page}/`
    const priority = page === '' ? '1' : '0.8'
    const changeFreq = 'weekly'
    
    sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  })

  // Add Mumbai location pages
  mumbaiLocations.forEach(location => {
    sitemap += `
  <url>
    <loc>${baseUrl}/drivers-in-mumbai/${location}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  })

  // Add Pune location pages
  puneLocations.forEach(location => {
    sitemap += `
  <url>
    <loc>${baseUrl}/drivers-in-pune/${location}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  })

  // Add blog pages
  blogPages.forEach(blog => {
    sitemap += `
  <url>
    <loc>${baseUrl}/blog/${blog}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  })

  // Add PDF file
  sitemap += `
  <url>
    <loc>${baseUrl}/pdf/travel-packing-checklist-2025.pdf</loc>
    <lastmod>2025-07-16T00:00:00.000Z</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
  </url>`

  sitemap += `
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
