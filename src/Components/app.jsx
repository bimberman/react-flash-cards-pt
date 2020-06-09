import React from 'react';
import CreateCard from './create-card';
import ReviewCards from './review-cards';
import ViewCards from './view-cards';
import Nav from './nav';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards'
    };
    this.setView = this.setView.bind(this);
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
      <div className="container">
        <Nav setView={this.setView} getView={this.getView}/>
        {this.getView()}
      </div>
    );
  }
}
