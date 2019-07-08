import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
    return (
        <div className="navbar">
            <Link to='/'><h1 className="navbar-logo"><i className={icon} /> {title} </h1></Link>
            <ul className="links-list">
                <li className="navbar-link">
                    <Link to='/'>Home</Link>
                </li>
                <li className="navbar-link">
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    );
}

Navbar.defaultProps = {
        title: "Github Finder",
        icon: "fab fa-github"
    };

Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

export default Navbar;

