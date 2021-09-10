import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            <ul className="nav justify-content-center bg-dark">
                <img></img>
                <li className="nav-item">
                    <Link className="nav-link text-white text-center" aria-current="page" to="/">
                        <FaHome /> <br />
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white text-center" to="/personajes">
                        <i className="fab fa-jedi-order"></i><br />
                        Personajes
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white text-center" to="/planetas">
                        <i className="fas fa-globe"></i> <br />
                        Planetas
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white text-center" to="/naves">
                        <i className="fas fa-rocket"></i> <br />
                        Naves
                    </Link>
                </li>
                <li className="nav-item">
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Favoritos
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Action
                                </a>
                            </li>
                        </ul>
                    </div>

                </li>
            </ul>
        </>
    )
}

export default withRouter(Navbar);