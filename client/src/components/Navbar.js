import React from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";
import { logout } from "../services/auth";

const Navbar = props => {
  const handleLogout = () => {
    //
    console.log("click");
    logout();
    props.clearUser(null);
  };

  return (
    <Nav className="nav justify-content-center" bg="basic">
      {props.user ? (
        <>
          <Link to="/">Welcome {props.user.username}</Link>
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
          <Link to="/settings">
            <img src="/public/images/settings.jpg" alt="" />
          </Link>
        </>
      ) : (
        <React.Fragment>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </React.Fragment>
      )}
    </Nav>
  );
};

export default Navbar;
