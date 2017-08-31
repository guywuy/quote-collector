import React, { Component } from 'react';
import {QuoteCollection} from './QuoteCollection';
import {QuoteAdder} from './QuoteAdder';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      "quotes" : [],
      'currentIndex' : 0
    };
    this.handleQuoteSubmit = this.handleQuoteSubmit.bind(this);
    this.handleQuoteDelete = this.handleQuoteDelete.bind(this);
    this.handleQuoteEdit = this.handleQuoteEdit.bind(this);
  }

  componentWillMount(){
    // //Get any quotes from localstorage
    if(!localStorage.getItem('quotes')) {
      this.setState({})
    } else {
      let storedQuotes = JSON.parse(localStorage.getItem('quotes'));
      let lastIndex = storedQuotes.length>0 ? storedQuotes[storedQuotes.length-1].id : -1;
      console.log('Last index = ' + lastIndex);
      this.setState({
        'quotes' : storedQuotes,
        'currentIndex' : lastIndex + 1
      });
    }
  }

  handleQuoteSubmit(quote, author){
    let quoteArray = this.state.quotes.slice();
    quoteArray.push({
      'id' : this.state.currentIndex,
      'name': author,
      'quote': quote
    })

    this.setState({
      'quotes': quoteArray,
      'currentIndex' : this.state.currentIndex + 1
    });
    localStorage.setItem('quotes', JSON.stringify(quoteArray));
  }

  handleQuoteDelete(quoteID){
    //Delete the quote with the specified ID from state and localstorage.
    let quoteArray = this.state.quotes.slice();
    quoteArray = quoteArray.filter(item => {
      return item.id !== quoteID
    });

    this.setState({'quotes': quoteArray});
    localStorage.setItem('quotes', JSON.stringify(quoteArray));
  }

  handleQuoteEdit(quoteID, content){
    //Edit the content of a quote.
    let quoteArray = this.state.quotes.slice();
    quoteArray.forEach((quote)=>{
      if(quote.id===quoteID){
        quote.quote = content;
      }
    })

    this.setState({'quotes': quoteArray});
    localStorage.setItem('quotes', JSON.stringify(quoteArray));
  }

  render() {
    return (
      <div className="App">
        <h1>Quote keeper</h1>
        <QuoteCollection quotes={this.state.quotes} deleteQuote={this.handleQuoteDelete} editQuote={this.handleQuoteEdit} />
        <QuoteAdder onSubmit={this.handleQuoteSubmit} />
      </div>
    );
  }
}

export default App;
