import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link, withRouter } from 'react-router-dom';
import { imgPlanets, imgShips } from '../img/index';

const Naves = () => {
    const { store, actions } = useContext(Context);
    const { starships } = store;
    const { updateFavorites } = actions;




    return (
        <div className="container">
            <br />
            <div className="title text-light"><h1>Star Wars Starships</h1></div>
            <hr />
            <div className="row">
                {
                    starships === null ? (
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) :
                        !!starships &&
                        starships.map((starship, index) => {
                            const { name, uid } = starship;
                            const link = `/naves/${uid}`
                            return (
                                < div className="col-md-4 mb-3" key={index} >
                                    <div className="card mb-3">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="imagen bg-dark" style={{ backgroundImage: `url(${imgShips[uid]})` }}>
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

export default withRouter(Naves);