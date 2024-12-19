/** @type {import('next').NextConfig} */
import withVercelToolbar from "@vercel/toolbar/plugins/next";

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
// const withVercelToolbar = require("@vercel/toolbar/plugins/next")();//this is for commonjs-not needed for esm
// Instead of module.exports = nextConfig, do this:
export default withVercelToolbar()(nextConfig);

// export default nextConfig;
