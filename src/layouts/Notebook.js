import React from "react";
import Nav from "../components/Nav";
import Aside from "../components/Aside";
// import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
// deckDeckGoHighlightElement();

export default function Notebook({ children, content, sideMenu}) {
  const section = sideMenu[0]?.section
  return (
    <div className="site-container">
      <Nav section={section}></Nav>
      <div className="site-content">
        <Aside sideMenu = {sideMenu}></Aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
