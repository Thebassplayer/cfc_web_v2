const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist/landing-cfc",
  images: {
    remotePatterns: [{ hostname: "lh3.googleusercontent.com" }],
  },
};

module.exports = nextConfig;
