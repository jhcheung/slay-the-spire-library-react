import React, { useState, useEffect } from 'react';
import MainContainer from './MainContainer';
import CardsContainer from './CardsContainer';
import { fetchCard } from './requests';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  useParams
} from "react-router-dom";

// TODO this probably belongs in CardsContainer.js in some way
function Card() {
  const [card, setCard] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      const json = await fetchCard(id);
      if (json) {
        setCard(json["data"]);
      }
    }
    makeRequest();
  }, [id]);

  return <CardsContainer card={card} />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h3 id="title">Slay The Spire Card Library</h3>
          <Switch>
            <Route path="/cards/:id">
              <Card />
            </Route>
            <Route path="/">
              <MainContainer />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;