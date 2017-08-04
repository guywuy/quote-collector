import React from 'react';

export class QuoteAdder extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev){
    ev.preventDefault();
    let formQuote = document.getElementById('submitted-quote').value;
    let formName = document.getElementById('submitted-quote-name').value;
    console.log(formName);
    this.props.passUpData(formQuote, formName);
  }

  render() {

    return (
      <div className="quote-adder">
        <h1>Add a quote</h1>
        <form onSubmit={this.handleSubmit} >
        <label> Quote
            <input type="text" required id="submitted-quote" name="submitted-quote" placeholder="Your quote here"/>
          </label>
          <label> Author
            <input type="text" required id="submitted-quote-name" name="submitted-quote-name" />
          </label>
          <input type="submit" id="submit-input"  />
        </form>
      </div>
    );
  }
}
