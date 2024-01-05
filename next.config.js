/** @type {import('next').NextConfig} */

const { hostname } = require('os');
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/sass")],
    prependData: `@import "main.sass"`,
  },
  images:{
    remotePatterns:[{
      hostname: 'cdn.shopify.com',
      protocol: "https"
    }]
  }
};

module.exports = nextConfig;
