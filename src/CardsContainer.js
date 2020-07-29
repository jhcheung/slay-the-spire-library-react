import React from 'react';

function colorToClass(color) {
  switch (color) {
    case "Red": return "Red";
    case "Blue": return "Blue";
    case "Green": return "Green";
    case "Purple": return "Purple";
    default: return "N/A";
  }
}

class CardsContainer extends React.Component {

  render() {
    console.log("CardsContainer", this.props.card);

    /*{
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
    return <>
      <img src={this.props.card.attributes.image} alt={this.props.card.attributes.name} />
      <table>
        <tbody>
          <tr>
            <td>Name: </td>
            <td>{this.props.card.attributes.name}</td>
          </tr>
          <tr>
            <td>Class: </td>
            <td>{colorToClass(this.props.card.attributes.color)}</td>
          </tr>
          <tr>
            <td>Rarity: </td>
            <td>{this.props.card.attributes.rarity}</td>
          </tr>
          <tr>
            <td>Card Type: </td>
            <td>{this.props.card.attributes.card_type}</td>
          </tr>
          <tr>
            <td>Cost: </td>
            <td>{this.props.card.attributes.cost}</td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>{this.props.card.attributes.description}</td>
          </tr>
        </tbody>

      </table>
    </>

    // <h2>CardContainer</h2>
  }
}

export default CardsContainer;