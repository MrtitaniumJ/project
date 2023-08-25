import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WhatsOnYourMind from './components/WhatsOnYourMind';
import AutoMovingCards from './components/AutoMovingCards';

function App() {
  return (
    <div className="App">
      <Navbar userRegistered={false} />
      <div className="content">
        <WhatsOnYourMind />
        <div className="main-section">
          <div className="left-half">
            {/* Add WhatsOnYourMind component here */}
          </div>
          <div className="right-half">
            <AutoMovingCards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
