import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom'
const Nav = () => {

    const user = useContext(UserContext)
    console.log('Nav', user)
    // Below we will use Link from react router to replace all of our anchor tages, we replace the href from <a> to 'to'
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Pokepedia</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="pokedex">Pokedex</Link>
                            <Link className="nav-link" to="login">Login</Link>
                            <Link className="nav-link" to="favorites">Favorites</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;

