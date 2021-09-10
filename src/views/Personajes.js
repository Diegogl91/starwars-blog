import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';

const Personajes = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <div className="container">
            <div className="title">Star Wars Characters</div>
            <div className="row">
                {
                    store.characters === null ? (
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) :
                        !!store.characters &&
                        store.characters.results.map((character, index) => {
                            const { name } = character;
                            return (
                                < div className="card mb-3" key={index} >
                                    <div className="row g-0">
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{name}</h5>
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

export default Personajes;