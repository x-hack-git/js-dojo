import React from "react";
import buttonStyles from "./button.module.css"
import { auth } from "gatsby-theme-firebase";

export default function Logout() {
  return <span className={buttonStyles.logout} onClick={() => auth.signOut()}>logout</span>
}
