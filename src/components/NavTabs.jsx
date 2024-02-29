import React from 'react';
import "../styles/navTabs.css"

function NavTabs({ currentPage, handlePageChange }) {
  return (
    
    
    <ul className="nav my-app-nav-ul justify-content-end">
  
      <li className="nav-item ">
        <a
          href="#About"
          onClick={() => handlePageChange('About')}
          className={`nav-link anchorTags ${currentPage === 'About' ? ' nav-link active' : 'nav-link'}`}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={`nav-link anchorTags ${currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}`}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={`nav-link anchorTags ${currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}`}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={`nav-link anchorTags ${currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}`}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;