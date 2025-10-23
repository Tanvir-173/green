import React, { useState, useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import logo from "./gree.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import dendro from "../../assets/dendro.jpg"; 

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logOut();
      alert("Logged out successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start flex items-center space-x-2">
        {user ? (
          <button onClick={handleLogout} className="btn btn-sm btn-primary">
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/login" className="btn btn-sm btn-primary">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-sm btn-secondary">
              Register
            </NavLink>
          </>
        )}
      </div>

      <div className="navbar-center flex flex-col md:flex-row">
        <img className="w-10 h-10" src={logo} alt="Logo" />
        <p className="btn btn-ghost text-xl normal-case">GreenNest</p>
      </div>

      <div className="navbar-end hidden md:flex items-center space-x-6">
        <NavLink to="/" className="text-green-700 hover:text-green-900 font-medium">
          Home
        </NavLink>
        <NavLink to="/plants" className="text-green-700 hover:text-green-900 font-medium">
          Plants
        </NavLink>
        {user && (
          <NavLink to="/profile" className="flex items-center">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-10 h-10 rounded-full border-2 border-green-700 object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => (e.currentTarget.src = dendro)}
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="text-6xl text-gray-400 mb-0"
                />
              </div>
            )}
          </NavLink>
        )}
      </div>

      {/* Mobile dropdown */}
      <div className="navbar-end md:hidden flex items-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          {dropdownOpen && (
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li><NavLink to="/" onClick={() => setDropdownOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/plants" onClick={() => setDropdownOpen(false)}>Plants</NavLink></li>
              {user && <li><NavLink to="/profile" onClick={() => setDropdownOpen(false)}>{user.displayName || "Profile"}</NavLink></li>}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
