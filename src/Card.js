//copied from App to work on
import React, { useState, useEffect } from 'react';
import CardsContainer from './CardsContainer';
import { fetchCard, fetchKeywords } from './requests';
import './App.css';

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