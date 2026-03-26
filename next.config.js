// CI/CD Pipeline code reverted
/** @type {import('next').NextConfig} */

const withImages = require("next-images");

module.exports = withImages({
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    return config;
  },
});
// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: "/blog/discover-mumbai-nightlife-safely",
//         destination: "/blog/nightlife-in-mumbai/",
//         permanent: true, // 301 redirect for SEO
//       },
//     ];
//   },
// };
