import React from 'react';
import PropTypes from 'prop-types';

export function Quote(props){
    function handleClick(){
      return props.deleteQuote(props.identity)
    }

    return (
      <div className="quote">
      <details>
        <summary>{props.name}</summary>
        <p className='quote-content'>{props.quote}</p>
        <p className='quote-author'>{props.name}</p>
        <button className='quote-delete' onClick={handleClick}>x</button>
        </details>
      </div>
    );

}

Quote.propTypes = {
  quote: PropTypes.string,
  name: PropTypes.string,
  identity: PropTypes.number,
  deleteQuote: PropTypes.func
};
