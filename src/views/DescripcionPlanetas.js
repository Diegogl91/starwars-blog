import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';



const DescripcionPlanetas = () => {
    const { store, actions, setStore } = useContext(Context);
    const { uid } = useParams();
    const { planetsDesc } = store;


    useEffect(async () => {

        const { getPlanetsDesc } = actions;
        await getPlanetsDesc(uid);
        return () => setStore({ planetsDesc: null });
    }, [])
    return (
        <div className="container">
            <br />
            <div className="title"></div>
                <div className="row">
                    {
                        planetsDesc === null ? (
                            <div className="spinner-grow text-secondary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ) : (
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 ">
                                    <h2>{planetsDesc.properties.name}</h2>
                                    <p>Population: {planetsDesc.properties.population}</p>
                                    <p>Climate: {planetsDesc.properties.climate}</p>
                                    <p>Terrain: {planetsDesc.properties.terrain}</p>
                                    <p>Description: {planetsDesc.description}</p>
                                </div>
                            </div>
                        </div>
                )
                }
            </div>
        </div >
    )


}

export default DescripcionPlanetas;