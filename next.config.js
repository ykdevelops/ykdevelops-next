module.exports = {
  reactStrictMode: true,
  images: {
    // Use remotePatterns instead of domains for better security
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ykdevelops.s3.us-east-2.amazonaws.com',
        pathname: '/**',
      },
    ],
    // Set cache TTL to 31 days (2678400 seconds)
    minimumCacheTTL: 2678400,
    // Use only webp format to reduce transformations
    formats: ['image/webp'],
    // Configure quality allowlist to reduce transformations
    // Lower quality reduces cache writes and faster data transfer
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Quality settings - lower reduces transformations and file size
    // Next.js default is 75, we'll keep reasonable quality
    // Individual images can override via quality prop if needed
  },
}
