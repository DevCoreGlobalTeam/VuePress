module.exports = {
  title: "Al3x Vue Press",
  description: "Elementos a compartir",
  configureWebpack: {
    resolve: {
      alias: {
        "@images": "assets/images",
      },
    },
  },
  themeConfig: {
    logo: "/assets/images/logo-100i.png",
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Repos", link: "/views/repos/" },
      { text: "Guia", link: "/views/guia/" },
      { text: "Autor", link: "/views/autor/" },
    ],
  },
};
