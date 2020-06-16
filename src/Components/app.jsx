import React from 'react';
import AppContext from './app-context';
import CreateCard from './create-card';
import ReviewCards from './review-cards';
import ViewCards from './view-cards';
import Nav from './nav';
import DeleteModal from './delete-modal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      activeCard: {},
      modalIsOpen: false,
      cards: this.props.cards
    };
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
    this.addCard = this.addCard.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
    this.getViewStr = this.getViewStr.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  setActiveCard(index) {
    this.setState(prevState => {
      return { ...prevState, activeCard: this.state.cards[index] };
    });
  }

  componentDidUpdate() {
    this.saveCards();
  }

  addCard(card) {
    this.setState(prevState => {
      return { ...prevState, cards: this.state.cards.concat([card]) };
    });
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

  getViewStr() {
    return this.state.view;
  }

  openModal(id) {
    const index = this.state.cards.findIndex(card => card.id === id);
    this.setState(prevState => {
      return {
        ...prevState,
        activeCard: this.state.cards[index],
        modalIsOpen: true
      };
    });
  }

  closeModal() {
    this.setState(prevState => {
      return {
        ...prevState,
        modalIsOpen: false
      };
    });
  }

  deleteCard(id) {
    const index = this.state.cards.findIndex(card => card.id === id);
    const cards = this.state.cards.filter((card, currentIndex) => currentIndex !== index);
    this.setState(prevState => {
      return {
        ...prevState,
        cards: cards
      };
    });
  }

  render() {
    return (
      <AppContext.Provider value={{
        setActiveCard: this.setActiveCard,
        activeCard: this.state.activeCard,
        cards: this.state.cards,
        addCard: this.addCard,
        openModal: this.openModal
      }}>
        <div className="container col-12">
          <Nav setView={this.setView} getViewStr={this.getViewStr}/>
          {this.getView()}
          <DeleteModal
            isOpen={this.state.modalIsOpen}
            activeCard={this.state.activeCard}
            deleteCard={this.deleteCard}
            close={this.closeModal}/>
        </div>
      </AppContext.Provider>
    );
  }
}
