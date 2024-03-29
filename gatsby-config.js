module.exports = {
  siteMetadata: {
    title: 'Code Notes by Makzan',
    description: "Code Snippets & Notes by Makzan",
    author: 'Makzan',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        gitRepoContentPath: 'https://github.com/makzan/code.makzan.net/tree/master/notes/',
        basePath: '/',
        showThemeInfo: false,
        showDescriptionInSidebar: true,
        showDate: true,
      },
    },
  ],
}
