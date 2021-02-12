import React from "react";
import headerStyles from "./header.module.css"
import logo from "../../../static/xhack_logo.png"

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
                <a href="">Vue</a>
              </li>
              <li>
                <a href="">React</a>
              </li>
              <li>
                <a href="">Gatsby</a>
              </li>
              <li>
                <a href="">Nuxt</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
