/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "staticali.wi-fi.cn",
        // port: "",
        // pathname: "",
      },
    ],
  },
};

export default nextConfig;
