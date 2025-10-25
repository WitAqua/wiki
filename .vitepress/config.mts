import { defineConfig } from "vitepress";

export default defineConfig({
  title: "WitAqua Wiki",
  description: "Welcome to WitAqua Wiki!",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        siteTitle: "Wiki",
        logo: "/assets/witaqua.png",
        sidebar: [
          {
            text: "General",
            items: [
              {
                text: "Building WitAqua",
                link: "/developers/building/witaqua",
              },
              {
                text: "Building WitAqua Wiki",
                link: "/developers/building/witaqua-wiki",
              },
              {
                text: "Adding Your Device to WitAqua OTA",
                link: "/developers/adding-ota",
              },
            ],
          },
          {
            text: "Maintainership",
            items: [
              {
                text: "Requirements",
                link: "/developers/maintainership/requirements",
              },
              {
                text: "Code of Conduct and Guidelines",
                link: "/developers/maintainership/code-of-conduct-and-guidelines",
              },
              {
                text: "Apply",
                link: "/developers/maintainership/apply",
              },
            ],
          },
        ],
        nav: [{ text: "Website", link: "https://witaqua.org" }],
        socialLinks: [
          { icon: "github", link: "https://github.com/WitAqua" },
          { icon: "x", link: "https://x.com/WitAquaROM" },
        ],
      },
    },
    ja: {
      label: "日本語",
      lang: "ja",
      themeConfig: {
        siteTitle: "Wiki",
        logo: "/assets/witaqua.png",
        sidebar: [
          {
            text: "ホーム",
            items: [
              {
                text: "WitAqua をビルド",
                link: "/ja/developers/building/witaqua",
              },
              {
                text: "WitAqua Wikiをビルド",
                link: "/ja/developers/building/witaqua-wiki",
              },
              {
                text: "WitAqua OTAにデバイスを追加する",
                link: "/ja/developers/adding-ota",
              },
            ],
          },
          {
            text: "メンテナーシップ",
            items: [
              {
                text: "必須要件",
                link: "/ja/developers/maintainership/requirements",
              },
              {
                text: "行動規範とガイドライン",
                link: "/ja/developers/maintainership/code-of-conduct-and-guidelines",
              },
              {
                text: "メンテナへの応募",
                link: "/ja/developers/maintainership/apply",
              },
            ],
          },
        ],
        nav: [{ text: "ウェブサイト", link: "https://witaqua.org" }],
        socialLinks: [
          { icon: "github", link: "https://github.com/WitAqua" },
          { icon: "x", link: "https://x.com/WitAquaROM" },
        ],
      },
    },
  },
});
