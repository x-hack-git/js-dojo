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
              <a href="">
                <img className={headerStyles.logoImg} src={logo} alt="X-HACK" />
              </a>
            </div>
          </div>
          <div className={headerStyles.menu}>
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>
          <nav className="header-category">
            <ul className={headerStyles.navLinks}>
              <li>
                <Link to="/vue">Vue</Link>
              </li>
              <li>
                <Link to="/nuxt">Nuxt</Link>
              </li>
              <li>
                <Link to="/react">React</Link>
              </li>
              <li>
                <Link to="/next">Next</Link>
              </li>
              <li>
                <Link to="/gatsby">Gatsby</Link>
              </li>
              <li>
                <Link to="/javascript">JavaScript</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
