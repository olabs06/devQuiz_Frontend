import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar({ setIsLoggedIn }) {
  const navigate = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false);
    navigate.push("/login");
  }

  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/TakeTest"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Take Test
      </NavLink>
      <NavLink
        to="/SetTest"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Set Test
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
      <NavLink
        onClick={handleLogout}
        to="/logout"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Logout
      </NavLink>
    </div>
  );
}

export default Navbar;
