import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({repo}) => {
    return (
        <div className="repo-card">
            <p className="repo-icon"><a href={repo.html_url}><i className="fas fa-folder"></i></a></p>
            <p className="repo-title">
                <a href={repo.html_url}>{repo.name}</a>
            </p>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem
