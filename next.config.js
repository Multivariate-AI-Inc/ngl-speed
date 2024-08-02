const nextConfig = {
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "asokeywordtool.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blogs.nextgrowthlabs.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
module.exports = nextConfig;
