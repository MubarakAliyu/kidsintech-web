/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for cPanel deployment
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },

  // This project lints with Biome (`npm run lint` = `biome check`), not
  // ESLint — ESLint isn't even a dependency. Next 16 otherwise runs its
  // built-in ESLint during `build` and fails on rules the project doesn't
  // use (and which the pre-existing components already violate). Skip it
  // here so the static export builds; Biome remains the real linter.
  eslint: {
    ignoreDuringBuilds: true,
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
