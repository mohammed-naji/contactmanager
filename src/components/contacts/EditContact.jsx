import React, { Component } from 'react';
import { Consumer } from '../../context';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name:  '',
    email: '',
    phone: ''
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const {name, email, phone} = this.state;
    const updateContact = {name, email, phone};

    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);

    dispatch({ type: 'UPDATE_CONTACT', payload: res.data });
    
    this.setState({
      name: '',
      email: '',
      phone: ''
    })
    this.props.history.push('/');
  }

  render() {
    const { name, email, phone } = this.state;
    return(
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
      
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter Name.."
                      value={name}
                      onChange={this.onChange}
                      required
                    />
                  </div>
      
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email.."
                      value={email}
                      onChange={this.onChange}
                      required
                    />
                  </div>
      
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                      type="text" 
                      id="phone"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone.."
                      value={phone}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <input type="submit" value="Update Contact" className="btn btn-block btn-success btn-lg" />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
