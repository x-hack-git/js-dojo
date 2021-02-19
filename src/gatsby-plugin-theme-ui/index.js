import baseTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui"

export default {
  ...baseTheme,
  fonts: {
    body: `"-apple-system,"BlinkMacSystemFont","Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif,"Segoe UI Emoji"`,
  },
  styles: {
    h1: {
      fontSize: '1.7em',
      mt: 4,
      borderBottom: '1px solid rgba(92,147,187,.17)'
    },
    h2: {
      fontSize: [24],
      mt: '2.3em',
      mb: '.5em',
    },
    h3: {
      mt: '2.25em',
      mb: '.5em'
    },
    h4: {
      fontSize: '1.1em',
      mt: '2.25em',
      mb: '.5em'
    },
    p: {
      mt: 4.8,
      mb: 0
    },
    a: {
      color: '#0f83fd'
    },
    ul: {
      li: {
        margin: '.6rem 0'
      }
    },
    ol: {
      li: {
        margin: '.6rem 0',
      },
    },
    hr: {
      margin: '2.5rem 0',
      borderTop: '2px solid rgba(92,147,187,.17)'
    },
  },
  layout: {
    container: {
      padding: [3, 4],
      maxWidth: `756px`,
    },
  }
}