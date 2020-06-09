import React from 'react';
import AppContext from './app-context';

export default class ViewCards extends React.Component {
  render() {
    const cards = this.context.cards.map((card, index) => {
      return (
        <Card key={index} question={card.question} answer={card.answer}/>
      );
    });
    return (
      <div className="container">
        <h1 className="text-center">My Cards</h1>
        <div className="row d-flex flex-row justify-content-around">
          {cards}
        </div>
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <div className="container col-3">
        <div className="row .bg-dark d-flex flex-column">
          <div className="row bg-dark px-3">
            <label className="w-100 text-white-50 pt-2">Question:</label>
            <label className="w-100 text-white pb-2">{this.props.question}</label>
          </div>
          <div className="row bg-secondary text-white px-3">
            <label className="w-100 text-white-50 pt-2">Answer:</label>
            <label className="w-100 text-white pb-2">{this.props.answer}</label>
          </div>
        </div>
      </div>
    );
  }
}

ViewCards.contextType = AppContext;
