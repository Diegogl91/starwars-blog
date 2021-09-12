import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link, withRouter } from 'react-router-dom';

const Naves = () => {
    const { store, actions } = useContext(Context);
    const { starships } = store;
    console.log(starships);


    return (
        <div className="container">
            <div className="title">Star Wars starships</div>
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
                            return (
                                < div className="card mb-3" key={index} >
                                    <div className="row g-0">
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <Link to={`/naves/${uid}`}><h5 className="card-title">{name}</h5></Link>
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