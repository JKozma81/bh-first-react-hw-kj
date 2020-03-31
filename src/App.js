import React from 'react';
import './App.css';
import Socials from './components/socials/Socials';
import Navigation from './components/navigation/Navigation';
import Jumbotron from './components/jumbotron/Jumbotron';

function App() {
  return (
    <div className="App">
      <Socials />
      <Navigation />
      <Jumbotron />
    </div>
  );
}

export default App;
