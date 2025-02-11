/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
//This allows all sources when using external images. THIS IS DANGEROUS! DON'T DO IT IN THE REAL WORLD: https://nextjs.org/docs/messages/next-image-unconfigured-host
