import React from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons library
import '../styles.css';

const Navbar = ({ userRegistered }) => {
  return (
    <div className="navbar">
      <div className="top-layer">
        <div className="logo">GLA Connect</div>
        <div className={`user-icon ${userRegistered ? 'registered' : 'not-registered'}`}>
          <FaUser />
        </div>
        <div className="message-icon">
          <FaEnvelope />
        </div>
      </div>
      <div className="bottom-layer">
        <nav className="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li className="dropdown">
              <a href="/">Clubs</a>
              <div className="dropdown-content">
                {/* Add dropdown content here */}
              </div>
            </li>
            <li><a href="/">Exam Center</a></li>
            <li><a href="/">Help Center</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
