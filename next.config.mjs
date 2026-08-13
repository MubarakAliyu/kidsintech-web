/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for cPanel deployment
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },

  // NOTE: This project lints with Biome (`npm run lint` = `biome check`).
  // Next 16 removed its built-in ESLint step from `build`, so the old
  // `eslint: { ignoreDuringBuilds }` key is no longer recognised (it now
  // emits an "Invalid next.config" warning) and has been removed.

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
