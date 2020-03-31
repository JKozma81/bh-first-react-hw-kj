import React from 'react';

import Logo from '../logo/Logo';
import Navbar from '../navbar/Navbar';

function Navigation() {
  return (
    <nav className="container-flex-row between padding-sides-30">
      <Logo />
      <Navbar />
    </nav>
  );
}

export default Navigation;
