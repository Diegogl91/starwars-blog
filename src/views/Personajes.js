import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link, withRouter } from 'react-router-dom';
import Starwarslogo from '../img/logo-stacked.png'
import "../styles.css";
import { Button } from 'bootstrap';


const Personajes = () => {
    const { store, actions, setStore } = useContext(Context);
    const { characters, favorites } = store;
    const { updateFavorites } = actions;


    return (
        <div className="container pagina">
            <br />
            <div className="title text-light">Star Wars Characters</div><br />
            <span></span>
            <div className="row">
                {
                    characters === null ? (
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) :
                        !!characters &&
                        characters.map((character, index) => {
                            const { name, uid } = character;
                            const link = `/personaje/${uid}`;
                            return (
                                <div className="col-md-6 mb-3" key={index}>
                                    <div className="card mb-3">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <img src={Starwarslogo} className="img-top rounded-start bg-dark" />
                                            <div className="card-body">
                                                <h5 className="card-title">{name}</h5> <br />
                                                <Link to={link} class="btn btn-primary">Learn more!!</Link>
                                                <button type="button" class="btn btn-outline-warning" onClick={() => {
                                                    updateFavorites(name, link)
                                                }}><i class="far fa-heart"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </div >
    )
}

export default withRouter(Personajes);
