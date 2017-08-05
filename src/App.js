import React, { Component } from 'react';
import {QuoteCollection} from './QuoteCollection';
import {QuoteAdder} from './QuoteAdder';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      "quotes" : []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    // //Get any quotes from localstorage
    if(!localStorage.getItem('quotes')) {
      this.setState({})
    } else {
      this.setState({
        'quotes' : JSON.parse(localStorage.getItem('quotes'))
      });
    }
  }

  handleSubmit(quote, author){
    let newArray = this.state.quotes.slice();
    newArray.push({
      'name': author,
      'quote': quote
    })

    this.setState({'quotes': newArray});
    localStorage.setItem('quotes', JSON.stringify(newArray));
  }

  render() {
    return (
      <div className="App">
        <h1>Quote keeper</h1>
        <QuoteCollection quotes={this.state.quotes} />
        <QuoteAdder passUpData={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
