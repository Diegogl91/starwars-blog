import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';
import { imgPlanets } from '../img/index';


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
                            <div className="row d-flex justify-content-center">
                                <div className="card desc col-sm-8 rounded d-flex justify-content-between ">
                                    <div className="card-left">
                                        <h2>{planetsDesc.properties.name}</h2>
                                        <p>Diameter: {planetsDesc.properties.diameter}</p>
                                        <p>Gravity: {planetsDesc.properties.gravity}</p>
                                        <p>Water surface: {planetsDesc.properties.surface_water}</p>
                                        <p>Population: {planetsDesc.properties.population}</p>
                                        <p>Climate: {planetsDesc.properties.climate}</p>
                                        <p>Terrain: {planetsDesc.properties.terrain}</p>
                                        <p>Description: {planetsDesc.description}</p>
                                    </div>
                                    <div className="imagenDescrip" style={{ backgroundImage: `url(${imgPlanets[uid]})` }}></div>
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