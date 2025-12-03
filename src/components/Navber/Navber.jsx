// import React, { useContext } from "react";
// import { NavLink } from "react-router";
// import { AuthContext } from "../../context/AuthProvider";
// import logo from "./gree.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import dendro from "../../assets/dendro.jpg";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);

//   const handleLogout = async () => {
//     try {
//       await logOut();
//       alert("Logged out successfully!");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="navbar bg-base-100 shadow-sm px-4">
//       {/* Left side: login/logout buttons */}
//       <div className="navbar-start flex items-center space-x-2">
//         {user ? (
//           <button onClick={handleLogout} className="btn btn-sm btn-primary">
//             Logout
//           </button>
//         ) : (
//           <>
//             <NavLink to="/login" className="btn btn-sm btn-primary">
//               Login
//             </NavLink>
//             <NavLink to="/register" className="btn btn-sm btn-secondary">
//               Register
//             </NavLink>
//           </>
//         )}
//       </div>

//       {/* Center: Logo and name */}
//       <div className="navbar-center flex flex-col md:flex-row items-center gap-2">
//         <img className="w-10 h-10" src={logo} alt="Logo" />
//         <p className="btn btn-ghost text-xl normal-case">GreenNest</p>
//       </div>

//       {/* Desktop Menu */}
//       <div className="navbar-end hidden md:flex items-center space-x-6">
//         <NavLink
//           to="/"
//           className="text-green-700 hover:text-green-900 font-medium"
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/plants"
//           className="text-green-700 hover:text-green-900 font-medium"
//         >
//           Plants
//         </NavLink>
//         {user && (
//           <NavLink to="/profile" className="flex items-center">
//             {user?.photoURL ? (
//               <img
//                 src={user.photoURL}
//                 alt="User Profile"
//                 className="w-10 h-10 rounded-full border-2 border-green-700 object-cover"
//                 referrerPolicy="no-referrer"
//                 onError={(e) => (e.currentTarget.src = dendro)}
//               />
//             ) : (
//               <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center">
//                 <FontAwesomeIcon
//                   icon={faUserCircle}
//                   className="text-4xl text-gray-400"
//                 />
//               </div>
//             )}
//           </NavLink>
//         )}
//       </div>

//       {/* Mobile Dropdown (DaisyUI built-in) */}
//       <div className="navbar-end md:hidden flex items-center">
//         <div className="dropdown dropdown-end">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost btn-circle"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </div>

//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/plants">Plants</NavLink>
//             </li>
//             {user && (
//               <li>
//                 <NavLink to="/profile" className="flex items-center gap-2">
//                   {user.photoURL ? (
//                     <img
//                       src={user.photoURL}
//                       alt="User Profile"
//                       className="w-8 h-8 rounded-full border-2 border-green-700 object-cover"
//                       referrerPolicy="no-referrer"
//                       onError={(e) => (e.currentTarget.src = dendro)} // fallback image
//                     />
//                   ) : (
//                     <FontAwesomeIcon
//                       icon={faUserCircle}
//                       className="text-2xl text-gray-400"
//                     />
//                   )}
//                   <span>{user.displayName || "Profile"}</span>
//                 </NavLink>
//               </li>
//             )}

//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import logo from "./gree.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import dendro from "../../assets/dendro.jpg";

const Navbar = () => {
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
    <div className="bg-green-600 sticky top-0 z-50 shadow-lg">
      <div className="navbar max-w-7xl mx-auto px-4">

        
        {/* Left: Logo + Name */}
        <div className="navbar-start flex flex-col md:flex-row items-center md:gap-2 gap-1">
          <img className="w-10 h-10 rounded-md" src={logo} alt="Logo" />
          <p className="text-white text-2xl font-semibold mt-1 md:mt-0">GreenNest</p>
        </div>


        {/* Center: Desktop Menu */}
        <div className="navbar-center hidden md:flex space-x-6">
          <NavLink to="/" className="text-white hover:text-gray-200">Home</NavLink>
          <NavLink to="/plants" className="text-white hover:text-gray-200">All Items</NavLink>
          <NavLink to="/about" className="text-white hover:text-gray-200">About Us</NavLink>
          <NavLink to="/contact" className="text-white hover:text-gray-200">Contact</NavLink>
          <NavLink to="/support" className="text-white hover:text-gray-200">Support</NavLink>
        </div>

        {/* Right: Auth + Profile */}
        <div className="navbar-end space-x-2">

          {!user ? (
            <>
              <NavLink to="/login" className="btn btn-sm bg-white text-green-700 border-none">
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-sm bg-white text-green-700 border-none">
                Register
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/profile" className="flex items-center">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => (e.currentTarget.src = dendro)}
                  />
                ) : (
                  <FontAwesomeIcon icon={faUserCircle} className="text-4xl text-white" />
                )}
              </NavLink>

              <button onClick={handleLogout} className="btn btn-sm bg-white text-green-700 border-none">
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>

          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-white rounded-box w-52">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/plants">All Items</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/support">Support</NavLink></li>

            {!user ? (
              <>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
              </>
            ) : (
              <li>
                <NavLink to="/profile" className="flex items-center gap-2">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-green-600 object-cover"
                      onError={(e) => (e.currentTarget.src = dendro)}
                    />
                  ) : (
                    <FontAwesomeIcon icon={faUserCircle} className="text-2xl" />
                  )}
                  {user.displayName || "Profile"}
                </NavLink>

                <button onClick={handleLogout} className="btn btn-xs bg-green-600 text-white mt-2">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
