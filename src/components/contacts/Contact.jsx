import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Contact extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  //   this.onShowClick = this.onShowClick.bind(this)
  // }
  state = {
    showContatcInfo: false
  };

  onShowClick = () => {
    this.setState({ showContatcInfo: !this.state.showContatcInfo });
  }
  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: 'DELETE_CONTACT', payload: id })
  }

  render() {
    const { id, name, email, phone } = this.props.contact;
    const classes = this.state.showContatcInfo ? "fas fa-chevron-up" : "fas fa-chevron-down";
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div className="card card-body mb-3">
              <h4>
              { name } 
              <i className={classes} onClick={this.onShowClick}></i>
              <i className="fas fa-times" style={{float: 'right', color: 'red'}} onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
              <Link to={`/contact/edit/${id}`}><i className="fas fa-edit" style={{float: 'right', color: 'black'}}></i></Link>
              </h4>
              {this.state.showContatcInfo ? 
              <ul className="list-group">
                <li className="list-group-item">Email: { email }</li>
                <li className="list-group-item">Phone: { phone }</li>
              </ul> : null }
            </div>
          )
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact;
