import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const Nav = () => {

    const user = useContext(UserContext)
    console.log(user)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Pokepedia</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Pokedex</a>
                            <a className="nav-link" href="#">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;

