import baseTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui"

export default {
  ...baseTheme,
  colors: {
    // text: "#333",
    background: "#fdfdf5",
    primary: "tomato",
  },
  fonts: {
    // body: "Georgia, serif",
    // heading: "system-ui, sans-serif",
  },
  styles: {
    h1: {
      fontSize: 40,
      fontFamily: 'heading',
      fontWeight: 'heading',
    },
  }
}