import React from "react";

function Header() {
  return (
    <header>
      <div id="header-content">
        <div id="logo">
          <a className="links" href="https://github.com/Sulistiangga56">
            Angga Sulistiangga
          </a>
        </div>
        <div style={{ float: "right" }}>
          <a
            className="links"
            href="https://instagram.com/panggilgaaaja"
          >
            Report A Problem
          </a>
          <a className="links" href="mailto:anggasulistiangga@gmail.com">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
