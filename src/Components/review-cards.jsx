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
    if (!this.context.cards.length) {
      return (
        <div className="container d-flex flex-column align-items-center">
          <h1 className="text-center">Review Cards</h1>
          <div className="row col-12 mt-5 d-flex justify-content-center">
            <h4>There are no cards in your deck</h4>
          </div>
        </div>
      );
    }
    return (
      <div className="container d-flex flex-column align-items-center review">
        <h1 className="text-center">Review Cards</h1>
        <div
          className={`row w-100 ${bg} d-flex justify-content-between align-items-center`}
          style={{ minHeight: 300, maxHeight: 1000 }}>
          <button onClick={this.previousCard} className="bg-transparent border-0 px-3">
            <i className="bg-transparent text-white fa fa-chevron-left fa-2x" aria-hidden="true"></i>
          </button>
          <div
            onClick={this.flipCard}
            type="button"
            style={{ minHeight: 300, maxHeight: 1000 }}
            className=
              "bg-transparent
               col-10
               border-0
               my-3
               px-0
               d-flex
               justify-content-center">
            <p className="h4 text-white align-middle d-flex align-self-center" >{txt}</p>
          </div>
          <button onClick={this.nextCard} className="bg-transparent border-0 px-3">
            <i className="bg-transparent text-white fa fa-chevron-right fa-2x" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}

ReviewCards.contextType = AppContext;
