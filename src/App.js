import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesList from './features/campsites/CampsitesList.js';

function App() {
  return (
    <div className="App">
      hello nucamp!
        <Header />
        <CampsitesList />
        <Footer />
    </div>
  );
}

export default App;
