import React from 'react';

export function Quote(props){

    return (
      <div className="quote">
        <p className='quote-content'>{props.quote}</p>
        <p className='quote-author'>{props.name}</p>
      </div>
    );

}
