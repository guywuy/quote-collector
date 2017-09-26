import React from 'react';
import PropTypes from 'prop-types';

export class QuoteEditor extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev){
    ev.preventDefault();
    let newQuote = document.getElementById('edited-quote').value;
    this.props.onSubmit(newQuote);
  }

  render() {
    return (
      <div className="quote-editor">
        <form onSubmit={this.handleSubmit}>
          <input type='text' id='edited-quote' placeholder={this.props.quote} defaultValue={this.props.quote} />
          <input type='submit' id='edit-quote-submit' />
          <button id='cancel-edit' onClick={this.props.unmountEdit} >Cancel</button>
        </form>
      </div>
    );
  }
}

QuoteEditor.propTypes = {
  onSubmit: PropTypes.func,
  quote: PropTypes.string
};
