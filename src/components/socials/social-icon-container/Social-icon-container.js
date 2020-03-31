import React from 'react';
import SocialIcon from '../social-icon/Social-icon';
import './social-icon-container.css';

function SocialIconsContainer() {
  return (
    <ul className="container-flex-row around list-none social-icon-list">
      <SocialIcon />
    </ul>
  );
}

export default SocialIconsContainer;
