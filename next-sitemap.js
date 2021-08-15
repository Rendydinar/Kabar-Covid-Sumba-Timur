// Please READ this before used: https://github.com/iamvishnusankar/next-sitemap/issues/61#issuecomment-725999452
module.exports = {
  siteUrl: "https://kabar-covid-sumba-timur.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 1000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
