/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    instrumentationHook: false,
  },
  webpack(config) {
    config.infrastructureLogging = { level: 'warn' };
    return config;
  },
};

export default nextConfig;
