import React, { Component } from 'react';

export default class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.normalizeText = this.normalizeText.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  normalizeText(str) {
    return str.length > 240
      ? str.substr(0, 239).concat(String.fromCharCode(8230))
      : str;
  }

  handleDeleteClick() {
    this.props.deleteCard(this.props.activeCard.id);
    this.props.close();
  }

  render() {
    const questionTxt = this.props.activeCard.question
      ? this.normalizeText(this.props.activeCard.question)
      : '';
    const answerTxt = this.props.activeCard.answer
      ? this.normalizeText(this.props.activeCard.answer)
      : '';
    if (this.props.isOpen) {
      return (
        <div className="delete-modal" onClick={this.props.close}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div type="button" onClick={this.props.close} className="basic-modal-close text-center p-0">X</div>
            <h3 className="text-center">Are you sure you want to delete this card?</h3>
            <p><b>Question:</b> {questionTxt}</p>
            <p><b>Answer:</b> {answerTxt}</p>
            <div className="row d-flex justify-content-end mr-2">
              <button
                type="button"
                className="btn btn-outline-secondary col-2 mx-2 border-0"
                onClick={this.props.close}>
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-outline-danger col-2 mx-2 border-0"
                onClick={this.handleDeleteClick}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      );
    }
    return <div className="d-none"></div>;
  }
}
