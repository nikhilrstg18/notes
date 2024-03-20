import React from "react";
import Nav from "../components/Nav";
import "../styles/global.css";

export default function Site({ children }) {
  return (
    <div className="site-container">
      <Nav></Nav>
      <div className="site-content">
        <main>{children}</main>
      </div>
    </div>
  );
}
