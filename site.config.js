const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Hyunwoo Ryu",
    image: "/profile.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Bioinformatics developer",
    bio: "Biological science & Chemistry & Computer science and so on!",
    email: "ryu@hyunwoo.info",
    linkedin: "",
    github: "Chemical118",
    instagram: "",
  },
  projects: [
    {
      name: `GDBr`,
      href: "https://github.com/Chemical118/GDBr",
    },
    {
      name: `TRIS`,
      href: "https://github.com/Chemical118/TRIS",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Hyunwoo's blog",
    description: "welcome to hyunwoo's blog!",
  },

  // CONFIG configration (required)
  link: "https://blog.hyunwoo.info/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
