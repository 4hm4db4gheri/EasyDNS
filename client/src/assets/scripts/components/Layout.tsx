import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/components.scss"
import "../../styles/reset.scss"

export function Layout() {
  return (
    <>
      <Outlet />
      <div className="footer">
        <p>
          <Link to={`/`}>
            asdfasdfasdzzzzzzzz
          </Link>
        </p>
        <p>
          <Link to={`DNSPage`}>
            asdfasdfasd
          </Link>
        </p>
      </div>
    </>
  );
}
