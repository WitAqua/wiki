import { defineConfig } from "vitepress";

export default defineConfig({
  title: "WitAqua Wiki",
  description: "Welcome to WitAqua Wiki!",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    siteTitle: "Wiki",
    logo: "/assets/witaqua.png",
    nav: [{ text: "Website", link: "https://witaqua.org" }],

    sidebar: [
      {
        text: "Home",
        collapsed: false,
        items: [
          { text: "Building WitAqua", link: "/developers/building" },
          { text: "Building WitAqua Wiki", link: "/developers/building-wiki" },
          {
            text: "Adding Your Device to WitAqua OTA",
            link: "/developers/adding-ota",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/WitAqua" },
      { icon: "x", link: "https://x.com/WitAquaROM" },
    ],
  },
});
