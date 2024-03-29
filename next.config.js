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
    domains: [
      "lh6.googleusercontent.com",
      "lh4.googleusercontent.com",
      "lh3.googleusercontent.com",
      "scontent.ftpe13-1.fna.fbcdn.net",
      "scontent.ftpe13-2.fna.fbcdn.net",
    ],
 
  },
};
