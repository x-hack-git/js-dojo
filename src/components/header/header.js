import React from "react";
import headerStyles from "./header.module.css"
import logo from "../../../static/xhack_logo.png"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header className="">
      <div id="gazou-wide">
        <div>
          <div className={headerStyles.headerContents} id="st-header">
            <div className={headerStyles.logo}>
              <Link to="/">
                <img className={headerStyles.logoImg} src={logo} alt="X-HACK" />
              </Link>
            </div>
          </div>
          <div className={headerStyles.menu}>
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>
          <nav className={headerStyles.headerCategory}>
            <ul className={headerStyles.navLinks}>
              {/* <li>
                <Link to="/tags/vue">Vue</Link>
              </li>
              <li>
                <Link to="/tags/nuxt">Nuxt</Link>
              </li>
              <li>
                <Link to="/tags/react">React</Link>
              </li> */}
              <li>
                <Link to="/tags/next">Next</Link>
              </li>
              <li>
                <Link to="/tags/gatsby">Gatsby</Link>
              </li>
              <li>
                <Link to="/javascript_basics/tutorials">JavaScript</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
