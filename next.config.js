/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: "bottom-right",
  },
  // Disable all development-only features
  experimental: {
    disableOptimizedLoading: true,
  },
};

module.exports = nextConfig;
