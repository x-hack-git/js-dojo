import React from "react";
import buttonStyles from "./button.module.css"
import { auth } from "gatsby-theme-firebase";

export default function SignOut() {
  return (
    <span
      className={buttonStyles.logout}
      onClick={() => auth.signOut()}
    >
      Sign out
    </span>
  );
}
