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
    //TODO
    //Get any quotes from localstorage
    if (Math.random()>0.5){
    this.setState({
      quotes: [
        {
          name: 'Einstein',
          quote: 'We are all but figments of tomorrow'
        },
        {
          name: 'Hawking',
          quote: 'We are all but figments of never'
        }
      ]
    })
  }
  }

  handleSubmit(quote, author){
    let newArray = this.state.quotes.slice();
    newArray.push({
      'name': author,
      'quote': quote
    })
    this.setState({quotes: newArray});
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
