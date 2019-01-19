import React, { Component } from 'react';
import Contact from '../contacts/Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  // deleteContact(id) {
  //   const newContacts = this.state.contacts.filter((contact) =>
  //   contact.id !== id);
  //   this.setState({contacts: newContacts})
  // }
  render() {
    return(
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-3">
              <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map( contact => <Contact 
              key={contact.id} 
              contact={contact} 
              /*onDeleteHandeler={this.deleteContact.bind(this, contact.id)}*/
              /> )}
            </React.Fragment>
          );
        }}
      </Consumer>
    );

  }
}

export default Contacts;
