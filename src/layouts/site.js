import React from "react";
import Aside from "../components/Aside";
import Nav from "../components/Nav";
import "../styles/global.css";

export default function Site({ children }) {
  return (
    <div className="site-container">
      <Nav></Nav>
      <div className="site-content">
        <Aside></Aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
