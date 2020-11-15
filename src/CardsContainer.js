import React from 'react';
import { colorToClass } from './utilities';
import './CardsContainer.css';
import Keyword from './Keyword';
import ReactHtmlParser from 'react-html-parser';
import Card from './Card'

// const CARD_HEIGHT = 874 / 2;
// const CARD_WIDTH = 678 / 2;

function CardsContainer(props) {

  if (!props.card || !props.card.attributes){
    return <div />
  }

  const options = { transform }

  function transform(node, index) {
    if (node.type === 'tag' && node.name === 'keyword'){
      return <Keyword key={index} name={node.attribs.name} keywords={props.keywords}/>;
    }
  }
  console.log(props)
  return <>
    <Card card={props.card} />
    {/* TODO this should probably go into a component like CardDetail */}
    <table className="CardDetails">
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
          <td>Id: </td>
          <td>{props.card.id}</td>
        </tr>
        <tr>
          <td>Keyword Description:</td>
          <td> {ReactHtmlParser(props.card.attributes.keyword_description, options)} </td>
        </tr>
      </tbody>
    </table>
  </>
}

export default CardsContainer;