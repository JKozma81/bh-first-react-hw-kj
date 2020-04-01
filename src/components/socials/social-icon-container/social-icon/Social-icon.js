import React from 'react';
import './social-icon.css';

function SocialIcon() {
  const icons = ['usa', 'facebook', 'insta', 'youtube', 'linkedin'];

  const socialIcons = icons.map((icon, index) => {
    return (
      <li key={index}>
        <a href="./">
          <div className={`social-icon ${icon} bg-image-pozition`}></div>
        </a>
      </li>
    );
  });

  return socialIcons;
}

export default SocialIcon;
