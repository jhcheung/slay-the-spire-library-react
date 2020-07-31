import React from 'react';
import './CardsContainer.css';

function colorToClass(color) {
  switch (color) {
    case "Red": return "Red";
    case "Blue": return "Blue";
    case "Green": return "Green";
    case "Purple": return "Purple";
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
} */

function CardsContainer(props) {
  console.log("CardsContainer", props.card);

  return <div className="Card">
    <img src={props.card.attributes.image}
         alt={props.card.attributes.name} />
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