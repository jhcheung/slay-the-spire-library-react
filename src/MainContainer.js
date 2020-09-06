import React, { useState, useEffect } from 'react';
import { fetchCards, fetchKeywords } from './requests';
import { randomItem } from './utilities';
import CardsContainer from './CardsContainer';

function MainContainer() {
  const [cards, setCards] = useState([]);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    const makeRequest = async () => {
      const cardsJSON = await fetchCards();
      if (cardsJSON) {
        setCards(cardsJSON["data"]);
      }

      const keywordsJSON = await fetchKeywords();
      if (keywordsJSON) {
        setKeywords(keywordsJSON["data"])
      }
    }
    makeRequest();
  }, []);

  return <div className="Main">
    { cards.length > 0 && <CardsContainer card={randomItem(cards)} keywords={keywords} /> }
  </div>
}

export default MainContainer;