import React from 'react';
import './jumbotron.css';

function Jumbotron() {
  return (
    <div className="jumbotron-bg bg-image-pozition d-flex flex-row justify-center width-100">
      <div className="d-flex flex-column justify-center align-items-center color-white jumbotron-content">
        <h1 className="color-green jumbotron-header">
          Válj programozóvá 3+6 hónap alatt!
        </h1>
        <h2 className="magrin-bottom-0 margin-top-0">
          A képzés indulása: 2020. április 14.
        </h2>
        <p className="magrin-bottom-0 margin-top-0 font-20">
          Jelentkezési határidő: 2020. március 31-ig meghosszabbítva!
        </p>
        <ul className="d-flex flex-row justify-between conditions font-bold font-20 width-100">
          <li>3 hónap elmélet</li>
          <li>6 hónap fizetett gyakorlat</li>
          <li>Karrierlehetőségek</li>
        </ul>
        <a
          className="btn d-flex flex-row justify-center align-items-center font-bold decoration-none color-white"
          href="./"
        >
          TUDJ MEG TÖBBET
        </a>
      </div>
    </div>
  );
}

export default Jumbotron;
