import React, { useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);
    const { getUser, loading, user, repos, getUserRepos } = githubContext;

    useEffect(() => {
        getUser(match.params.login); 
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    }, []); // <--------- empty brackets added to prevent infinite refreshing

    const {name, avatar_url, location, bio, blog, login, html_url, 
    followers, following, public_repos, public_gists, hireable, company} = user;

    if(loading) return <Spinner />
    return (
        <React.Fragment>
            <button className="btn back-btn"><Link to='/'>Go back</Link></button>
            
            <div className="user-page">
                <div className="user-info">
                    <div className="user-avatar">
                        <img src={avatar_url} className="avatar-img" alt="avatar" />
                        <h1>{name}</h1>
                        <p>{location}</p>
                        <p> 
                            Hireable: {''}
                            {hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger"/> }
                        </p>
                    </div>
                    <div className="user-bio">
                        {bio && 
                            <React.Fragment>
                                <h3>Bio</h3>
                                <p className="biography">{bio}</p>
                            </React.Fragment>
                        }
                        <ul className="user-general-info">
                            <li>
                                {login && 
                                <React.Fragment>
                                    <p>Username: <span>{login}</span></p>
                                </React.Fragment>}
                            </li>

                            <li>
                                {company && 
                                <React.Fragment>
                                    <p>Company: <span>{company}</span></p>
                                </React.Fragment>}
                            </li>

                            <li>
                                {blog && 
                                <React.Fragment>
                                    <p>Website: <span>{blog}</span></p>
                                </React.Fragment>}
                            </li>
                            
                        </ul>
                        <a href={html_url} className="btn">Open Github Profile</a>
                        <div className="badges-info">
                            <div className="badge badge-red">Followers: {followers}</div>
                            <div className="badge badge-green">Following: {following}</div>
                            <div className="badge badge-blue">Public Repos: {public_repos}</div>
                            <div className="badge badge-yellow">Public Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>        
            </div>

            {/* BADGES HERE */}
            

            <Repos repos={repos} />
        </React.Fragment>      
    )
}

export default User
