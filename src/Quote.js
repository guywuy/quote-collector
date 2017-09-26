import React from 'react';
import {QuoteEditor} from './QuoteEditor';
import PropTypes from 'prop-types';

export class Quote extends React.Component{

  constructor(props){
    super(props);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.sendEdit = this.sendEdit.bind(this);
    this.unmountEdit = this.unmountEdit.bind(this);
    this.state={editing : false};
  }
  handleDeleteClick(){
    return this.props.deleteQuote(this.props.identity)
  }
  // Render a text input and button with quote content to edit, when submitted
    // send up to app.
  handleEditClick(){
    this.setState({editing : true});
  }

  unmountEdit(){
    this.setState({editing : false});
  }
  sendEdit(content){
    this.setState({editing : false});
    return this.props.editQuote(this.props.identity, content)
  }



  render(){
    return (
      <div className="quote">
      {this.state.editing && <QuoteEditor onSubmit={this.sendEdit} quote={this.props.quote} unmountEdit={this.unmountEdit} />}
      <p className='quote-content'>{this.props.quote}</p>
      <p className='quote-author'>{this.props.name}</p>
      <button className='quote-button' id='quote-edit' onClick={this.handleEditClick}>edit</button>
      <button className='quote-button' id='quote-delete' onClick={this.handleDeleteClick}>&times;</button>

      </div>
    );
  }
}

Quote.propTypes = {
  quote: PropTypes.string,
  name: PropTypes.string,
  identity: PropTypes.number,
  editQuote: PropTypes.func,
  deleteQuote: PropTypes.func
};
