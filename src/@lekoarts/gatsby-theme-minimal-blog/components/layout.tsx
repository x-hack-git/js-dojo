/** @jsx jsx */
import React from "react"
import { Global } from "@emotion/core"
import { Box, Container, jsx } from "theme-ui"
import "typeface-ibm-plex-sans"
import SEO from "./seo"
// import Header from "./header"
// import Footer from "./footer"
import Header from "../../../components/header/header"
import Footer from "../../../components/footer/footer"
// import MainVisual from "./main-visual"
import CodeStyles from "../styles/code"
import SkipNavLink from "./skip-nav"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: theme.colors.text,
          color: theme.colors.background,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
      })}
    />
    <SEO />
    {/* <SkipNavLink>Skip to content</SkipNavLink> */}
    <Header />
    {/* <MainVisual url="https://id.js-dojo.com/assets/img/mv-game.png" />  */}
    <Container>
      <Box id="skip-nav" sx={{ ...CodeStyles }} className={className}>
        {children}
      </Box>
    </Container>
    <Footer />
  </React.Fragment>
)

export default Layout