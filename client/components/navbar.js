import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout pleas
          </a>
        </div>
      ) : (
        <div className="navbar-container">
          {/* The navbar will show these links before you log in */}
          <div className="left-navbar-container">
            <button className="left-nav-button">
              <Link to="/">Home</Link>
            </button>
          </div>
          <div className="right-navbar-container">
            <button className="right-nav-button">
              <Link to="/login">Login</Link>
            </button>
            <button className="right-nav-button">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    },
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}
