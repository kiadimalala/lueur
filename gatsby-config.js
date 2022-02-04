module.exports = {
  siteMetadata: {
    title: `LueurExt`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@pages": "./src/pages",
          "@assets": "./src/images",
          "@components": "src/components",
          "@layouts": "./src/Layouts",
        },
        extensions: ["js"],
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["barlow:200,300,400,600,800", "Mr Dafoe"],
        display: "swap",
      },
    },
  ],
};
