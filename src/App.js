import React, { useState, useEffect } from 'react';
import MainContainer from './MainContainer';
import CardsContainer from './CardsContainer';
import { fetchCard, fetchKeywords } from './requests';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  useParams
} from "react-router-dom";

// TODO this probably belongs in CardsContainer.js in some way
// TODO restructure to not share code with CardsContainer.js -- maybe make Card component that's shared between tthis and CardsContainer.js
function Card() {
  const [card, setCard] = useState({});
  const [keywords, setKeywords] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      const json = await fetchCard(id);
      if (json) {
        setCard(json["data"]);
      }

      const keywordsJSON = await fetchKeywords();
      if (keywordsJSON) {
        setKeywords(keywordsJSON["data"])
      }
    }
    makeRequest();
  }, [id]);

  return <CardsContainer card={card} keywords={keywords} />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h3 id="title">Slay The Spire Card Library</h3>
        </header>

          <Switch>
            <Route path="/cards/:id">
              <Card />
            </Route>
            <Route path="/">
              <MainContainer />
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;