import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <ul className="d-flex flex-row justify-between align-items-center list-none main-nav font-bold">
      <li>
        <a href="./" className="decoration-none color-black">
          Rólunk &or;
        </a>
      </li>
      <li>
        <a href="./" className="decoration-none color-black">
          Alapozó képzések &or;
        </a>
      </li>
      <li>
        <a href="./" className="decoration-none color-black">
          Junior képzések &or;
        </a>
      </li>
      <li>
        <a href="./" className="decoration-none color-black">
          Vállalati Képzések &or;
        </a>
      </li>
      <li>
        <a href="./" className="decoration-none color-black">
          Webinar
        </a>
      </li>
      <li>
        <a href="./" className="decoration-none color-black">
          Kapcsolat
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
