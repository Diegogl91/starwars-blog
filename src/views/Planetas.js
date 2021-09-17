import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link, withRouter } from 'react-router-dom';
import {imgPlanets} from '../img/index';

const Planetas = () => {
    const { store, actions } = useContext(Context);
    const { planets } = store;
    const {updateFavorites}= actions;


    return (
        <div className="container">
            <br />
            <div className="title text-light">Star Wars Planets</div><br />
            <span></span>
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
                                < div className="col-md-4 mb-3" key={index} >
                                    <div className="card mb-3">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="imagen bg-dark" style={{backgroundImage:`url(${imgPlanets[uid]})`}}>
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

export default withRouter(Planetas);