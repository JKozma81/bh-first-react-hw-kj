import React from 'react';

function Jumbotron() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="main-content-header">
          Válj programozóvá 3+6 hónap alatt!
        </h1>
        <h2>A képzés indulása: 2020. április 14.</h2>
        <p>Jelentkezési határidő: 2020. március 31-ig meghosszabbítva!</p>
        <ul className="list">
          <li>3 hónap elmélet</li>
          <li>6 hónap fizetett gyakorlat</li>
          <li>Karrierlehetőségek</li>
        </ul>
        <a className="btn" href="./">
          TUDJ MEG TÖBBET
        </a>
      </div>
    </div>
  );
}

export default Jumbotron;
