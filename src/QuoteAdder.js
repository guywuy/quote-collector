import React from 'react';
import PropTypes from 'prop-types';

export class QuoteAdder extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev){
    ev.preventDefault();
    let formQuote = document.getElementById('submitted-quote').value;
    let formName = document.getElementById('submitted-quote-name').value;
    this.props.onSubmit(formQuote, formName);
  }

  render() {

    return (
      <div className="quote-adder">
        <h1>Add a quote</h1>
        <form onSubmit={this.handleSubmit} >
          <label htmlFor='submitted-quote'> Quote </label>
          <input type="text" required id="submitted-quote" name="submitted-quote" placeholder="Your quote here"/>
          <label htmlFor='submitted-quote-name'> Author </label>
          <input type="text" required id="submitted-quote-name" name="submitted-quote-name" placeholder="Who said that?"/>
          <input type="submit" id="submit-input"  />
        </form>
      </div>
    );
  }
}

QuoteAdder.propTypes = {
  onSubmit: PropTypes.func
};
