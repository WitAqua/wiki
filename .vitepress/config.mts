import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Wiki",
  description: "WitAqua Wiki",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    logo: "/assets/witaqua.png",
    nav: [{ text: "Website", link: "https://witaqua.org" }],

    sidebar: [
      {
        text: "Home",
        collapsed: false,
        items: [{ text: "Building WitAqua", link: "/developers/building" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/WitAqua" },
      { icon: "x", link: "https://x.com/WitAquaROM" },
    ],
  },
});
