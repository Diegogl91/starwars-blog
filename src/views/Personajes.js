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
        <div className="container">
            <div className="title">Star Wars Characters</div>
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
                                <div className="card mb-3" key={index} style={{ maxWidth: 540 }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={Starwarslogo} className="logo img-fluid rounded-start bg-dark" />
                                        </div>
                                        <div className="col-md-8">
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
