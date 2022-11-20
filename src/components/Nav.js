import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav>
      <Link className="link" to="/" style={{ margin: "5rem" }}>
        homepage
      </Link>
      <Link className="link" to="/shoes" style={{ margin: "1rem" }}>
        shoes
      </Link>

      <h1> welcome to our website</h1>
    </nav>
  );
}

export default Nav;
