import React from 'react';
import './socials.css';
import Contacts from './contacts/Contacts';
import SocialIconsContainer from './social-icon-container/Social-icon-container';

function SocialsContainer() {
  return (
    <div className="d-flex flex-row justify-between align-items-center socials padding-sides-30">
      <Contacts />
      <SocialIconsContainer />
    </div>
  );
}

export default SocialsContainer;
