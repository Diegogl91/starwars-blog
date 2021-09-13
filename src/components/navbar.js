import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, withRouter } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { IoPlanet } from 'react-icons/io5';
import { GiSpaceship } from 'react-icons/gi';
import Starwarslogo from '../img/logo-stacked.png'
import "../styles.css";

const Navbar = () => {
    const { store, actions, setStore } = useContext(Context);
    const { favorites } = store;
    console.log("favoritos", favorites);


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
                <div className="nav">

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
                               
                                {favorites.length === 0 ? (
                                    <li className="dropdown-item">
                                        <button className="dropdown-item" type="button">
                                            No Favorites
                                        </button>
                                    </li>
                                ) : (
                                    favorites.map((t, index) => {
                                        return (

                                            <li className="favorites dropdown-item" key={index}>
                                                <p>{t.name}</p>
                                                <button
                                                    className="boton"
                                                    onClick={() => {
                                                        favorites.splice(index, 1);
                                                        setStore([...favorites]);


                                                    }}>
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </li>

                                        );
                                    })
                                )}
                            </ul>
                        </div>

                    </li>
                </div>

            </ul>
        </>
    )
}

export default withRouter(Navbar);