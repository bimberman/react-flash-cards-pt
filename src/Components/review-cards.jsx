import React from 'react';
import AppContext from './app-context';

export default class ReviewCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isQuestion: true
    };
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.cardIndex = 0;
  }

  componentDidMount() {
    if (this.context.cards.length) { this.context.setActiveCard(this.cardIndex); }
  }

  nextCard() {
    if (this.context.cards.length === this.cardIndex + 1) {
      this.cardIndex = -1;
    }
    if (this.context.cards.length) {
      this.context.setActiveCard(++this.cardIndex);
    }
    this.setState({ isQuestion: true });
  }

  previousCard() {
    if (this.cardIndex === 0) {
      this.cardIndex = this.context.cards.length;
    }
    if (this.context.cards.length) {
      this.context.setActiveCard(--this.cardIndex);
    }
    this.setState({ isQuestion: true });
  }

  flipCard() {
    this.setState({ isQuestion: !this.state.isQuestion });
  }

  render() {
    const txt = this.state.isQuestion ? this.context.activeCard.question : this.context.activeCard.answer;
    const bg = this.state.isQuestion ? 'bg-dark' : 'bg-secondary';
    return (
      <div className="container d-flex flex-column align-items-center">
        <h1 className="text-center">Review Cards</h1>
        <div className={`row w-75 ${bg} d-flex justify-content-between`} style={{ height: 300 }}>
          <button onClick={this.previousCard} className="bg-transparent border-0 px-3">
            <i className="bg-transparent fas fa-chevron-left"></i>
          </button>
          <button onClick={this.flipCard} className="bg-transparent border-0 px-3">
            <p className="h1 align-middle d-flex align-items-center" >{txt}</p>
          </button>
          <button onClick={this.nextCard} className="bg-transparent border-0 px-3">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    );
  }
}

ReviewCards.contextType = AppContext;
