import React from 'react';
import AppContext from './app-context';

export default class CreateCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.context.addCard({
      id: this.context.cards.length + 1,
      question: this.state.question,
      answer: this.state.answer
    });
    this.resetForm();
  }

  handleReset() {
    event.preventDefault();
    this.resetForm();
  }

  resetForm() {
    this.setState({
      question: '',
      answer: ''
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Create New Card</h1>
        <div className="row d-flex justify-content-center">
          <form className="w-75">
            <div className="input-group">
              <label className="w-100" htmlFor="question">Question:</label>
              <textarea
                value={this.state.question}
                className="form-control"
                name="question"
                id="question"
                onChange={this.handleChange}>
              </textarea>
            </div>
            <div className="input-group">
              <label className="w-100" htmlFor="answer">Answer:</label>
              <textarea
                value={this.state.answer}
                className="form-control"
                name="answer"
                id="answer"
                onChange={this.handleChange}>
              </textarea>
            </div>
            <div className="row d-flex justify-content-end mt-2 mr-0">
              <button
                type="button"
                className='btn btn-outline-danger border-0 mr-2'
                onClick={this.handleReset}>
                    Cancel
              </button>
              <button
                type="button"
                className='btn btn-outline-primary border-0'
                onClick={this.handleSubmit}>
                    Save Card
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

CreateCard.contextType = AppContext;
