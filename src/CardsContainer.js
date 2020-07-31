import React from 'react';
import Image from 'react-graceful-image';
import './CardsContainer.css';

const CARD_HEIGHT = 874;
const CARD_WIDTH = 678;

function colorToClass(color) {
  switch (color) {
    case "Red": return "Ironclad";
    case "Blue": return "Defect";
    case "Green": return "Silent";
    case "Purple": return "Watcher";
    default: return "N/A";
  }
}

/*
// see http://localhost:3000/api/v1/cards/1
{
  "id": "1",
  "type": "card",
  "attributes": {
    "name": "Bash",
    "color": "Red",
    "rarity": "Basic",
    "card_type": "Attack",
    "cost": "2",
    "description": "Deal 8 damage.\nApply 2 Vulnerable.",
    "image": "http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6e8b5ca4aed9399c0f5723379b9d52d6d1c562c6/Bash.png"
  }
}
// dimensions: 678x874
*/

function CardsContainer(props) {
  console.log("CardsContainer", props.card);

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