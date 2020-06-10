import React from 'react';
import AppContext from './app-context';

export default class ReviewCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isQuestion: true,
      cardIndex: 0
    };
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
    this.flipCard = this.flipCard.bind(this);
  }

  componentDidMount() {
    if (this.context.cards.length) { this.context.setActiveCard(this.state.cardIndex); }
  }

  nextCard() {
    let localCardIndex = this.state.cardIndex;
    if (this.context.cards.length === localCardIndex + 1) {
      localCardIndex = -1;
    }
    if (this.context.cards.length) {
      this.context.setActiveCard(++localCardIndex);
    }
    this.setState({
      isQuestion: true,
      cardIndex: localCardIndex
    });
  }

  previousCard() {
    let localCardIndex = this.state.cardIndex;
    if (localCardIndex === 0) {
      localCardIndex = this.context.cards.length;
    }
    if (this.context.cards.length) {
      this.context.setActiveCard(--localCardIndex);
    }
    this.setState({
      isQuestion: true,
      cardIndex: localCardIndex
    });
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
