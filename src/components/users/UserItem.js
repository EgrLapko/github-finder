import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({user: { login, avatar_url }}) => {
        return (
            <div className="card">
                <img src={avatar_url} className="round-img" alt="avatar" />
                <h3 className="card-login">{login}</h3>
                <div>
                    <button className="btn"><Link to={`/user/${login}`}>Open profile</Link></button>
                </div>
            </div>
        );
    };

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
