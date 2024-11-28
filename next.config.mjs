/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // compilerOptions: {
  //   target: "ES2020", // or higher
  //   module: "nodenext",
  // },
};

export default nextConfig;
