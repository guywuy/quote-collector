import React from 'react';
import {Quote} from './Quote';
import {SortButton} from './SortButton';
import PropTypes from 'prop-types';

export class QuoteCollection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'sortBy' : 'name'
    }

    this.setSortMethod = this.setSortMethod.bind(this);
  }
  setSortMethod(method){
    this.setState({
      'sortBy' : method
    })
  }
  sortByName(quotes){
    return quotes.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }
  sortById(quotes){
    return quotes.sort(function(a, b) {
      return a.id - b.id
    });
  }

  render() {
    let quotes = this.props.quotes;
    let quotesDisplay;
    //If there are no quotes, render that message, else render a Quote component for each quote.
    if (quotes===undefined || quotes.length===0 || quotes===null){
      quotesDisplay = <p className='no-quotes'>"Oops, looks like you don't have any quotes yet".</p>
    } else {
      this.state.sortBy === 'name' ? this.sortByName(quotes) : this.sortById(quotes);
      quotesDisplay = quotes.map((quote, index)=>{
        return <Quote name={quote.name} quote={quote.quote} identity={quote.id} key={index} deleteQuote={this.props.deleteQuote} />
      })
    }
    return (
      <div className="quote-collection">
        <h2>All your quotes</h2>
        <div className="sort-buttons">
          Sort by:
          <SortButton handleSort={this.setSortMethod} name='date added' method='id' />
          <SortButton handleSort={this.setSortMethod} name='author' method='name' />
        </div>
        {quotesDisplay}
      </div>
    );
  }
}

QuoteCollection.propTypes = {
  quotes: PropTypes.array,
  deleteQuote: PropTypes.func
};
