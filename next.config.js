/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["ratemyinternship-bucket.s3.us-east-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
