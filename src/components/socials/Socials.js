import React from 'react';
import './socials.css';
import Contacts from './contacts/Contacts';
import SocialIconsContainer from './social-icon-container/Social-icon-container';

function SocialsContainer() {
  return (
    <div className="container-flex-row between socials padding-sides-30">
      <Contacts />
      <SocialIconsContainer />
    </div>
  );
}

export default SocialsContainer;
