import Link from "next/link";
import { useState } from "react";
import Logout from "../Logout/logout";

function MainHeader() {
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        <img
          src="/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        /> { ` `}
         Event Demo
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setIsVisible(!isVisible)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={isVisible ? "navbar-collapse" : "collapse  navbar-collapse"}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/events">
              All Events
            </Link>
          </li>
          <li className="nav-item">
            <Logout />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainHeader;
