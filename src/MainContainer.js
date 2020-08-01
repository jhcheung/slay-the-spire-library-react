import React, { useState, useEffect } from 'react';
import { fetchCards } from './requests';
import { randomItem } from './utilities';
import CardsContainer from './CardsContainer';

function MainContainer() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const makeRequest = async () => {
      const json = await fetchCards();
      if (json) {
        setCards(json["data"]);
      }
    }
    makeRequest();
  }, []);

  return <div className="Main">
    { cards.length > 0 && <CardsContainer card={randomItem(cards)} /> }
  </div>
}

export default MainContainer;