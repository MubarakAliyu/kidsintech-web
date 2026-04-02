/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for cPanel deployment
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },

  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },

  // Fix workspace root detection for Turbopack (dev only)
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
