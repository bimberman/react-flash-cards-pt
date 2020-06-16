import React from 'react';
import AppContext from './app-context';

export default class ViewCards extends React.Component {
  render() {
    const cards = this.context.cards.map((card, index) => {
      return (
        <Card key={index} id={card.id} question={card.question} answer={card.answer}/>
      );
    });
    const renderElement = this.context.cards.length
      ? cards
      : <div className="row col-12 mt-5 d-flex justify-content-center">
        <h4>There are no cards in your deck</h4>
      </div>;
    return (
      <div className="container">
        <h1 className="text-center col-12">My Cards</h1>
        <div className="row col-12 m-0 p-0 d-flex justify-content-start">
          {renderElement}
        </div>
      </div>
    );
  }
}

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.context.openModal(this.props.id);
  }

  render() {
    return (
      <div className="container cards">
        <div className="row col-12 p-0 m-0 .bg-dark d-flex justify-content-center">
          <div className="row col-12 bg-dark">
            <label className="h4 col-12 text-white-50 pt-2">Question:</label>
            <label className="col-12 text-white pb-2">{this.props.question}</label>
          </div>
          <div className="row col-12 bg-secondary text-white">
            <label className="h4 col-12 text-white-50 pt-2">Answer:</label>
            <label className="col-12 text-white pb-2">{this.props.answer}</label>
          </div>
          <div className="row col-12 bg-dark trash d-flex justify-content-center">
            <button
              className="bg-transparent border-0 fa fa-trash fa-2x text-muted"
              onClick={this.handleClick}>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ViewCards.contextType = AppContext;
Card.contextType = AppContext;
