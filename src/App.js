import React from 'react';
import './App.css';
import MainContainer from './MainContainer.js';
import CardsContainer from './CardsContainer.js';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h3 id="title">Slay The Spire Card Library</h3>
          <MainContainer />
          <div>
            <Route path="/cards/:id" component={CardsContainer} />
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
