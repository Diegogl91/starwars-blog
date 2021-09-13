import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link, withRouter } from 'react-router-dom';

const Planetas = () => {
    const { store, actions } = useContext(Context);
    const { planets } = store;
    console.log(planets);


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
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <Link to={link}><h5 className="card-title">{name}</h5></Link>
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