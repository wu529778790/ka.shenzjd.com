/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "p0.meituan.net",
        // port: "",
        // pathname: "",
      },
    ],
  },
};

export default nextConfig;
