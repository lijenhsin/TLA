module.exports = {
  i18n: {
    locales: ["en", "zh_TW"],
    defaultLocale: "en",
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  images: {
    domains: ['lh6.googleusercontent.com','lh4.googleusercontent.com'],
  },
};
