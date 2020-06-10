import React from 'react';
import AppContext from './app-context';
import CreateCard from './create-card';
import ReviewCards from './review-cards';
import ViewCards from './view-cards';
import Nav from './nav';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      activeCard: {},
      cards: [
        { question: 'What is?', answer: 'stuff' },
        { question: 'Sports?', answer: 'Forever' },
        { question: 'Everyday?', answer: 'I\'m shuffling' }
      ]
    };
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
    this.addCard = this.addCard.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
  }

  setActiveCard(index) {
    this.setState({ activeCard: this.state.cards[index] });
  }

  addCard(card) {
    this.setState({ cards: this.state.cards.concat([card]) });
  }

  saveCards() {
    localStorage.setItem('flash-cards', JSON.stringify(this.state.cards));
  }

  setView(newView) {
    this.setState({ view: newView });
  }

  getView() {
    switch (this.state.view) {
      case 'view-cards':
        return <ViewCards />;
      case 'review-cards':
        return <ReviewCards />;
      case 'create-card':
        return <CreateCard />;
      default:
        return null;
    }
  }

  render() {
    return (
      <AppContext.Provider value={{
        setActiveCard: this.setActiveCard,
        activeCard: this.state.activeCard,
        cards: this.state.cards,
        addCard: this.addCard
      }}>
        <div className="container">
          <Nav setView={this.setView} getView={this.getView}/>
          {this.getView()}
        </div>
      </AppContext.Provider>
    );
  }
}
