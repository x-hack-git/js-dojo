import React from "react";
import headerStyles from "./header.module.css"

export default function Header() {
  return (
    <header className="">
      <div id="gazou-wide">
        <div id="st-headerbox">
          <div id="st-header">
            <div>
              <a href="https://www.fukulow.info/">
                X-HACK
              </a>
            </div>
            <div>
              <img
                className={headerStyles.headerHyoushi}
                alt="トップの画像"
                src="https://www.fukulow.info/wp-content/uploads/2019/01/pc-header-img.jpg"
              />
            </div>
          </div>
          <div className="header-category">
            <ul className="header-category-ul">
              <li>
                <a href="https://www.fukulow.info/category/fashion/">Fashion</a>
              </li>
              <li>
                <a href="https://www.fukulow.info/category/fashion/buy/">Buy</a>
              </li>
              <li>
                <a href="https://www.fukulow.info/category/camera/">Camera</a>
              </li>
              <li>
                <a href="https://www.fukulow.info/category/gadget/">Gadget</a>
              </li>
              <li>
                <a
                  href="https://www.fukulow.info/onlineshop/"
                >
                  #UnNamedVintages
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
