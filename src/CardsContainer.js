import React from 'react';
import Image from 'react-graceful-image';
import { colorToClass } from './utilities';
import './CardsContainer.css';

const CARD_HEIGHT = 874 / 2;
const CARD_WIDTH = 678 / 2;

function CardsContainer(props) {
  console.log("CardsContainer", props.card);

  if (!props.card || !props.card.attributes){
    return <div />
  }

  return <div className="Card">
    <Image src={props.card.attributes.image}
           alt={props.card.attributes.name}
           placeholderColor="#282c34"
           width={CARD_WIDTH}
           height={CARD_HEIGHT} />
    <table>
      <tbody>
        <tr>
          <td>Name: </td>
          <td>{props.card.attributes.name}</td>
        </tr>
        <tr>
          <td>Class: </td>
          <td>{colorToClass(props.card.attributes.color)}</td>
        </tr>
        <tr>
          <td>Rarity: </td>
          <td>{props.card.attributes.rarity}</td>
        </tr>
        <tr>
          <td>Card Type: </td>
          <td>{props.card.attributes.card_type}</td>
        </tr>
        <tr>
          <td>Cost: </td>
          <td>{props.card.attributes.cost}</td>
        </tr>
        <tr>
          <td>Description:</td>
          <td>{props.card.attributes.description}</td>
        </tr>
      </tbody>
    </table>
  </div>
}

export default CardsContainer;