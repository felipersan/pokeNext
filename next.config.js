const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // https://nextjs.org/docs/advanced-features/compiler
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
    // ignoreDuringBuilds: true,
  },images: {
    domains: ['raw.githubusercontent.com'],
},
}

module.exports = nextConfig
