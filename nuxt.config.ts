// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss", "~/assets/base.scss", "~/assets/auth.scss"],
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width , initial-scale=1",
      title: "V Social Network",
      meta: [
        {
          name: "Experimental Social Network Application",
          content: "V Social Network",
        },
      ],
    },
  },
  modules: ["nuxt-icon", "@pinia/nuxt"],
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },
});
