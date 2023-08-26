import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WhatsOnYourMind from './components/WhatsOnYourMind';
import AutoMovingCards from './components/AutoMovingCards';
import PostsSection from './components/PostsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar userRegistered={false} />
      <div className="content">
        <div className="main-section">
          <div className="left-half">
            <WhatsOnYourMind />
            <PostsSection />
          </div>
          <div className="right-half">
            <AutoMovingCards />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
