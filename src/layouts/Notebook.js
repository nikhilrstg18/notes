import React from "react";
import Nav from "../components/Nav";
import Aside from "../components/Aside";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

export default function Notebook({ children, sideMenu, stack }) {
  return (
    <div className="site-container">
      <Nav section={stack}></Nav>
      <div className="notebook-content">
        <Aside sideMenu={sideMenu}></Aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
