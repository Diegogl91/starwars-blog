import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';

const Personajes = () => {
    const { store, actions } = useContext(Context);
    console.log(store.charactersDesc)

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
                            console.log(index)
                            return (
                                < div className="card mb-3" key={index} >
                                    <div className="row g-0">
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{name}</h5>
                                                {store.charactersDesc.description.map((descripcion, desindex) => {
                                                    const { description } = descripcion;
                                                    return (
                                                        <p key={desindex}> {description}</p>
                                                    )
                                                })
                                                }
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