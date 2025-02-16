/** @type {import('next').NextConfig} **/
const nextConfig = {
  images: {
    domains: ['randomuser.me', 'cdn.sanity.io'], // Correctly combining domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/portraits/**', // Fixed pathname
      },
    ],
  },
};

const rules = [
  {
    permission: 'update',
    grants: ['editor', 'admin'],
  },
];

export { rules };
export default nextConfig;

{/**
  import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here 
  images: {
    remotePatterns: [
      {
          protocol: 'https',
          hostname: 'randomuser.me',
          port: '',
          pathname: '/**',
      },
    ]
  }
};

export default nextConfig; **/}
