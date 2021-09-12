import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { IoPlanet } from 'react-icons/io5';
import { GiSpaceship } from 'react-icons/gi';
import Starwarslogo from '../img/logo-stacked.png'
import "../styles.css";

const Navbar = () => {
    return (
        <>
            <ul className="nav justify-content-between bg-dark">
                <div>
                    <img src={Starwarslogo} className=" logo rounded float-start img-fluid"></img>
                </div>
                <div className="nav ">
                    <li className="nav-item">
                        <Link className="nav-link text-white text-center" aria-current="page" to="/">
                            <FaHome /> <br />
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-center" to="/personajes">
                            <i className="fab fa-jedi-order fs-5"></i> / <i class="fab fa-galactic-republic fs-5"></i><br />
                            Characters
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-center" to="/planetas">
                            <IoPlanet className="fs-5" /><br />
                            Planets
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-center" to="/naves">
                            <GiSpaceship className="fs-5" /> <br />
                            Starships
                        </Link>
                    </li>
                </div>
                <div>
                    <li className="nav-item">
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Favorites
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
                </div>

            </ul>
        </>
    )
}

export default withRouter(Navbar);