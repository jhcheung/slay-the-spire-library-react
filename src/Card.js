//copied from App to work on
import React, { useState, useEffect, useParams } from 'react';
import { fetchCard, fetchKeywords } from './requests';
import Image from 'react-graceful-image';
import './App.css';

const CARD_HEIGHT = 874 / 2;
const CARD_WIDTH = 678 / 2;


function Card(props) {
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

  return <div className="Card">
    <Image src={props.card.attributes.image}
         alt={props.card.attributes.name}
         placeholderColor="#282c34"
         width={CARD_WIDTH}
         height={CARD_HEIGHT} />
         </div>;
}

export default Card;