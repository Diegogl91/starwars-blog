import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link, withRouter } from 'react-router-dom';
import Starwarslogo from '../img/logo-stacked.png'
import {imgCharacter} from '../img/index';
import "../styles.css";
import { Button } from 'bootstrap';


const Personajes = () => {
    const { store, actions, setStore } = useContext(Context);
    const { characters, favorites } = store;
    const { updateFavorites } = actions;

    let urlImg= '../img/logo-stacked.png'

    return (
        <div className="container">
            <br />
            <div className="title text-light">Star Wars Characters</div>
            <hr />
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
                                <div className="col-lg-4 col-md-12 mb-3" key={index}>
                                    <div className="card mb-3">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="imagen" style={{backgroundImage:`url(${imgCharacter[uid]})`}}>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{name}</h5> <br />
                                                <div className="d-flex justify-content-between">
                                                <Link to={link} class="btn btn-outline-primary">Learn more!!</Link>
                                                <button type="button" class="btn btn-outline-warning" onClick={() => {
                                                    updateFavorites(name, link)
                                                }}><i class="far fa-heart"></i>
                                                </button>
                                                </div>
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
