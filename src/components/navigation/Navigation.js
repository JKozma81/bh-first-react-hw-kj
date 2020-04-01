import React from 'react';

import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';

function Navigation() {
  return (
    <nav className="d-flex flex-row justify-between padding-sides-30">
      <Logo />
      <Navbar />
    </nav>
  );
}

export default Navigation;
