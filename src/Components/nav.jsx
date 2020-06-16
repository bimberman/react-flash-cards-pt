import React from 'react';

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeView: this.props.getViewStr()
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ activeView: event.target.dataset.view });
    this.props.setView(event.target.dataset.view);
  }

  currentlyActive(str) {
    return str === this.state.activeView ? 'active' : '';
  }

  render() {

    return (
      <div className="container">
        <nav className="row nav nav-pills d-flex justify-content-end mt-2">
          <a
            className=
              {`text-center
              nav-item
              nav-link
              btn
              btn-outline-primary
              border-0
              ${this.currentlyActive('view-cards')}`}
            type='button'
            data-view={'view-cards'}
            onClick={this.handleClick}>
              View Cards
          </a>
          <a
            className=
              {`text-center
              nav-item
              nav-link
              btn
              btn-outline-primary
              border-0
              ${this.currentlyActive('review-cards')}`}
            type='button'
            data-view={'review-cards'}
            onClick={this.handleClick}>
            Review
          </a>
          <a
            className=
              {`text-center
              nav-item
              nav-link
              btn
              btn-outline-primary
              border-0
              ${this.currentlyActive('create-card')}`}
            type='button'
            data-view={'create-card'}
            onClick={this.handleClick}>
                Create Card
          </a>
        </nav>
      </div>
    );
  }
}
