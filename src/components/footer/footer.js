import React from "react";
import footerStyles from "./footer.module.css"

export default function Header() {
  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.text}>
        Copyright X-HACK 2021 All Rights Reserved.
      </div>
    </div>
  )
}