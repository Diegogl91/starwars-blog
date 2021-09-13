import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link, withRouter } from 'react-router-dom';
import Starwarslogo from '../img/logo-stacked.png'

const Planetas = () => {
    const { store, actions } = useContext(Context);
    const { planets } = store;
    const {updateFavorites}= actions;


    return (
        <div className="container">
            <div className="title">Star Wars Planets</div>
            <div className="row">
                {
                    planets === null ? (
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) :
                        !!planets &&
                        planets.map((planet, index) => {
                            const { name, uid } = planet;
                            const link = `/planeta/${uid}`
                            return (
                                < div className="card mb-3" key={index} >
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

export default withRouter(Planetas);