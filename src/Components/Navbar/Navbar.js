import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid ">
        <a className="navbar-brand text-dark" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item mx-2 ">
              <Link
                className="nav-link active text-dark"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-dark" href="#">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-dark" href="#">
                blog
              </a>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark" to="/dashboard">
                Admin
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {user.name || user.email ? (
            <button className="btn btn-warning">Logout</button>
          ) : (
            <Link to="/login" className="text-dark btn btn-primary">
              Login
            </Link>
          )}

          <div>
            <img
              src={user.photo}
              className="rounded-circle mx-2"
              alt=""
              style={{ height: 30, width: 30 }}
            />
            {user.name}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;