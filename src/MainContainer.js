import React from 'react';
import * as requests from './requests';
import CardsContainer from './CardsContainer';

// https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
function randomItem(items){
  return items[Math.floor(Math.random() * items.length)];
}

class MainContainer extends React.Component {
  state = { cards: [] };

  async componentDidMount() {
    const json = await requests.fetchCards();
    if (json) {
      this.setState({ cards: json["data"] });
    }
  }

  render() {
    // console.log("MainContainer", this.state);
    return <>
      { this.state.cards.length > 0 && <CardsContainer card={randomItem(this.state.cards)} /> }
    </>
  }
}

export default MainContainer;