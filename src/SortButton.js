import React from 'react';
import PropTypes from 'prop-types';

export function SortButton(props){
  function handleSort(ev){

    let thisButton = ev.target;
    //if this is active, send second parameter of 'true' to reverse sort direction
    if (thisButton.classList.contains('active')){
      console.log("Button was already active");
      return props.handleSort(props.method, true);
    } else {
      //if it is not active, add active class and remove from other button
      Array.from(document.getElementsByClassName("sort-button")).forEach(function(item) {
         item.classList.remove('active');
      });
      thisButton.classList.add('active');
    }

    return props.handleSort(props.method)
  }
  return (
        <button className='sort-button' onClick={handleSort}>&#8597; {props.name}</button>
    );

}

SortButton.propTypes = {
  name: PropTypes.string,
  method: PropTypes.string,
  handleSort: PropTypes.func
};
