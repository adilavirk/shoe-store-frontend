// Next.js configuration file (next.config.js)
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

// Exporting the configuration using CommonJS syntax
export default nextConfig;
