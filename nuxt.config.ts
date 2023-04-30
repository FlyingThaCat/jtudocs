export default defineNuxtConfig({
  extends: '@nuxt-themes/docus'
})

export default {
  head: {
    script: [
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5130840829479969",
        async: true,
        crossorigin: "anonymous"
      },
    ],
  },
}
