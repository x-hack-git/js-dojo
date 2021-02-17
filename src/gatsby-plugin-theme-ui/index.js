import baseTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui"

export default {
  ...baseTheme,
  styles: {
    h1: {
      fontSize: [28, 40],
      background: 'linear-gradient(transparent 70%, #FFFF80 70%)',
      display: 'inline'
    },
    h2: {
      fontSize: [24, 32],
      background: 'linear-gradient(transparent 70%, #FFFF80 70%)',
      display: 'inline'
    },
  }
}