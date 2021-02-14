import React from "react"
import Header from "../components/header/header"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Header />
      {children}
    </div>
  )
}