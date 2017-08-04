import React from 'react';
import {Quote} from './Quote';
import PropTypes from 'prop-types';

export class QuoteCollection extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let quotes = this.props.quotes;
    let quotesDisplay;
    //If there are no quotes, render that message, else render a Quote component for each quote.
    if (quotes===undefined || quotes.length===0 || quotes===null){
      quotesDisplay = <p classList='no-quotes'>"Oops, looks like you don't have any quotes yet".</p>
    } else {
      quotesDisplay = quotes.map(quote=>{
        return <Quote name={quote.name} quote={quote.quote} />
      })
    }
    return (
      <div className="quote-collection">
        <h1>All your quotes</h1>
        {quotesDisplay}
      </div>
    );
  }
}

QuoteCollection.propTypes = {
  quotes: PropTypes.array
};