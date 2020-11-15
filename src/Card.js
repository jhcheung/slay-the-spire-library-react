//copied from App to work on
import React /*, { useState, useEffect } */ from 'react';
// import { fetchCard, fetchKeywords } from './requests';
import Image from 'react-graceful-image';
import './Card.css';

const CARD_HEIGHT = 874 / 2;
const CARD_WIDTH = 678 / 2;


function Card(props) {
  // const [card, setCard] = useState({});
  // const [keywords, setKeywords] = useState({});

  // TODO instead of fetch and render from App.js, render here instead
  // useEffect(() => {
  //   const makeRequest = async () => {
  //     const json = await fetchCard(props.id);
  //     if (json) {
  //       setCard(json["data"]);
  //     }

  //     const keywordsJSON = await fetchKeywords();
  //     if (keywordsJSON) {
  //       setKeywords(keywordsJSON["data"])
  //     }
  //   }
  //   makeRequest();
  // }, [props.id]);

  return <>
    <Image className="Card"
        src={props.card.attributes.image}
        alt={props.card.attributes.name}
        placeholderColor="#282c34"
        width={CARD_WIDTH}
        height={CARD_HEIGHT} />
        </>;
}

export default Card;