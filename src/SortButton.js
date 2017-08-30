import React from 'react';
import PropTypes from 'prop-types';

export function SortButton(props){
  function handleSort(){
    console.log('Clicked button, calling props handleSort');
    return props.handleSort(props.method)
  }
  return (
        <button className='sort-button' onClick={handleSort}>{props.name}</button>
    );

}

SortButton.propTypes = {
  name: PropTypes.string,
  method: PropTypes.string,
  handleSort: PropTypes.func
};
