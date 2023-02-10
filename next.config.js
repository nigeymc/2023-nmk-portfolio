// next.config.js
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your config here
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**medium.com',
        port: '',
      },
    ],
  },
  webpack: (config) => {
    // This fixes the invalid hook React error which
    // will occur when multiple versions of React is detected
    // This can happen since common project is also using Next (which is using React)
    const reactPaths = {
      react: path.join(__dirname, 'node_modules/react'),
      'react-dom': path.join(__dirname, 'node_modules/react-dom'),
    }
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        ...reactPaths,
      },
    }
    return config
  },
}

module.exports = nextConfig
