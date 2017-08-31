import React from 'react';
import {Quote} from './Quote';
import {SortButton} from './SortButton';
import PropTypes from 'prop-types';

export class QuoteCollection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'sortBy' : 'name',
      'sortDir' : 'asc'
    }

    this.setSortMethod = this.setSortMethod.bind(this);
  }
  setSortMethod(method, switchDir=false){
    this.setState((prevState) => {
      // If we need to switch the direction of sort, update state with direction
      // as well as method, else just update method
      if (switchDir){
        let sortDir = prevState.sortDir === 'asc' ? 'desc' : 'asc';
        return {
          'sortBy' : method,
          'sortDir' : sortDir
        }
      } else {
        return {'sortBy' : method}
      }
    });
  }

  sortByName(quotes){
    let sortDirection = this.state.sortDir;
    console.log('Sorting by name, direction = ' + sortDirection);
    return quotes.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        if(sortDirection==='asc'){
          return -1;
        } else {
          return 1;
        }
      }
      if (nameA > nameB) {
        if(sortDirection==='asc'){
          return 1;
        } else {
          return -1;
        }
      }

      // names must be equal
      return 0;
    });
  }
  sortById(quotes){
    let sortDirection = this.state.sortDir;
    return quotes.sort(function(a, b) {
      if(sortDirection==='asc'){
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
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
        return <Quote name={quote.name} quote={quote.quote} identity={quote.id} key={index} deleteQuote={this.props.deleteQuote} editQuote={this.props.editQuote} />
      })
    }
    return (
      <div className="quote-collection">
        <h2>All your quotes</h2>
        <div className="sort-buttons">
          Sort by:
          <SortButton handleSort={this.setSortMethod} name='date added' method='id' direction={this.state.sortDir} />
          <SortButton handleSort={this.setSortMethod} name='author' method='name' direction={this.state.sortDir} />
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
