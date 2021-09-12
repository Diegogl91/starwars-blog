import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';



const DescripcionNaves = () => {
    const { store, actions, setStore } = useContext(Context);
    const { uid } = useParams();
    const { starshipsDesc } = store;


    useEffect(async () => {

        const { getStarshipsDesc } = actions;
        await getStarshipsDesc(uid);
        return () => setStore({ starshipsDesc: null });
    }, [])
    return (
        <div className="container">
            <br />
            <div className="title"></div>
                <div className="row">
                    {
                        starshipsDesc === null ? (
                            <div className="spinner-grow text-secondary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ) : (
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 ">
                                    <h2>{starshipsDesc.properties.name}</h2>
                                    <p>Model: {starshipsDesc.properties.model}</p>
                                    <p>Starship Class: {starshipsDesc.properties.starship_class}</p>
                                    <p>Manufacturer: {starshipsDesc.properties.manufacturer}</p>
                                    <p>Length: {starshipsDesc.properties.length}</p>
                                    <p>Crew: {starshipsDesc.properties.crew}</p>
                                    <p>Passengers: {starshipsDesc.properties.passengers}</p>
                                </div>
                            </div>
                        </div>
                )
                }
            </div>
        </div >
    )


}

export default DescripcionNaves;