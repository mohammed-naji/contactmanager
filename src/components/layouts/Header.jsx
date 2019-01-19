import React from 'react'
import { Link } from 'react-router-dom';
const Header = props => {
  return (
    <nav className="navbar-expand-sm navbar navbar-dark bg-danger mb-5 py-0">
      <a href='/' className="navbar-brand">{props.branding}</a>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
          <Link to="" className="nav-link">
          <i className="fas fa-home"></i> Home
          </Link>
          </li>

          <li className="nav-item">
          <Link to="/contact/add" className="nav-link">
          <i className="fas fa-plus"></i> Add
          </Link>
          </li>

          <li className="nav-item">
          <Link to="/about" className="nav-link">
          <i className="fas fa-question"></i> About
          </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  branding: 'Contact Manager'
}

export default Header
