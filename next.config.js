/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_API: process.env.APP_API,
    MAILERSEND_TOKEN: process.env.MAILERSEND_TOKEN,
    APP_DOMAIN: process.env.APP_DOMAIN,
  },
  i18n: {
    locales: ['it', 'cs'],
    defaultLocale: 'it',
    localeDetection: false,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    domains: ['kersnerova-strapi.hardart.cz', 'localhost'],
  },
}

module.exports = nextConfig
