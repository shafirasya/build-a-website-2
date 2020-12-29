import React from "react";

function Header() {
  return (
    <header>
      <div>
        <h1> Your Weather App </h1>
      </div>
      <nav>
        <a href="/?city=Jakarta"> Jakarta </a>
        <a href="/?city=Singapore"> Singapore </a>
        <a href="/?city=Korea"> Korea </a>
        <a href="/?city=Hong%20Kong"> Hong Kong </a>
        <a href="/?city=Japan"> Japan </a>
      </nav>
    </header>
  );
}

export default Header;
