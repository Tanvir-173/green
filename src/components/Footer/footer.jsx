// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
// import { faPinterest } from "@fortawesome/free-brands-svg-icons";

// const Footer = () => {
//   return (
//     <footer className="bg-green-50 text-green-800 py-8 mt-8 border-t border-green-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
//         {/* Quick Links */}
//         <div className="flex space-x-6 mb-4 md:mb-0">
//           <a href="/about" className="hover:text-green-900">About</a>
//           <a href="/contact" className="hover:text-green-900">Contact</a>
//           <a href="/privacy" className="hover:text-green-900">Privacy Policy</a>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex space-x-4 mb-4 md:mb-0">
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//               <FontAwesomeIcon icon={faSquareInstagram} />
//           </a>
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//            <FontAwesomeIcon icon={faFacebookF} />
//           </a>
//           <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
//            <FontAwesomeIcon icon={faPinterest} />
//           </a>
//         </div>

//         {/* Copyright */}
//         <div className="text-sm text-green-600">
//           © 2025 GreenNest. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faFacebookF, faPinterest } from "@fortawesome/free-brands-svg-icons";
import logo from "./gree.jpg";

const Footer = () => {
  return (
    <footer className="bg-green-50 text-green-800 py-8 mt-8 border-t border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">

        {/* Logo */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <img 
            src={logo} 
            alt="GreenNest Logo" 
            className="w-16 h-16 object-cover rounded-full shadow-md"
          />
          <h2 className="text-lg font-semibold text-green-900 mt-2">GreenNest</h2>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/about" className="hover:text-green-900">About</a>
          <a href="/contact" className="hover:text-green-900">Contact</a>
          <a href="/privacy" className="hover:text-green-900">Privacy Policy</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0 text-xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSquareInstagram} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-green-600">
          © 2025 GreenNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

