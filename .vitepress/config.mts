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
        siteTitle: "ウィキ",
        logo: "/assets/witaqua.png",
        sidebar: [
          {
            text: "ホーム",
            items: [
              {
                text: "WitAqua をビルドする",
                link: "/ja/developers/building/witaqua",
              },
              {
                text: "WitAqua ビルド Wiki",
                link: "/ja/developers/building/witaqua-wiki",
              },
              {
                text: "WitAqua OTA にデバイスを追加する",
                link: "/ja/developers/adding-ota",
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
