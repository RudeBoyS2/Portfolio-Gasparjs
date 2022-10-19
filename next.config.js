/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['es-AR', 'en-US'],
    defaultLocale: 'es-AR',
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
