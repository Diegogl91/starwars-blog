import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link, withRouter } from 'react-router-dom';

const Personajes = () => {
    const { store, actions } = useContext(Context);
    const { characters } = store;
    console.log(characters);


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
                            return (
                                < div className="card mb-3" key={index} >
                                    <div className="row g-0">
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <Link to={`/personaje/${uid}`}><h5 className="card-title">{name}</h5></Link>
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