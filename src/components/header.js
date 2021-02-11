import React from "react";

export default function Header() {
  return (
    <header>
      <div id="headbox-bg">
        <div class="clearfix" id="headbox">
          <nav id="s-navi" class="pcnone">
            <dl class="acordion">
              <dt class="trigger">
                <p>
                  <span class="op">
                    <i class="fa fa-bars"></i>
                  </span>
                </p>
              </dt>

              {/* <dd class="acordion_tree">
                <div class="menu">
                  <ul>
                    <li class="page_item page-item-6830">
                      <a href="https://www.fukulow.info/profile/">
                        DRESS CODE.管理人Fukulowについて。
                      </a>
                    </li>
                    <li class="page_item page-item-14651">
                      <a href="https://www.fukulow.info/onlineshop/">
                        STORE｜#UnNamedVintages
                      </a>
                    </li>
                    <li class="page_item page-item-14634">
                      <a href="https://www.fukulow.info/ipad-feature/">
                        特集：iPad Proはここまでできる。iPad
                        ProをPCのように使いこなすための知識まとめ。
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="clear"></div>
              </dd> */}
            </dl>
          </nav>
          <div id="header-l">
            <h1 class="descr"></h1>
          </div>
        </div>
      </div>

      <div id="gazou-wide">
        <div id="st-headerbox">
          <div id="st-header">
            <div>
              <a href="https://www.fukulow.info/">
                <img
                  class="head-logo"
                  src="https://www.fukulow.info/wp-content/uploads/2019/01/dresscode_logo.png"
                />
              </a>
            </div>
            <div>
              <img
                class="header-hyoushi"
                src="https://www.fukulow.info/wp-content/uploads/2019/01/pc-header-img.jpg"
              />
            </div>
          </div>
          <div class="header-category">
            <ul class="header-category-ul">
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
            <div class="header-search">
              <div id="search">
                <form
                  method="get"
                  id="searchform"
                  action="https://www.fukulow.info/"
                >
                  <label class="hidden" for="s">
                    {" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Search"
                    value=""
                    name="s"
                    id="s"
                  />
                  <input
                    type="image"
                    src="https://www.fukulow.info/wp-content/themes/dresscode_pc/images/search.png"
                    alt="検索"
                    id="searchsubmit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
