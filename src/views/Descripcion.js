import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';



const Descripcion = () => {
    const { store, actions, setStore } = useContext(Context);
    const { uid } = useParams();
    const { charactersDesc } = store;
    console.log("desc", charactersDesc)

    useEffect(async () => {

        const { getCharactersDesc } = actions;
        await getCharactersDesc(uid);
        return () => setStore({ charactersDesc: null });
    }, [])
    return (
        <div className="container">
            <br />
            <div className="title"></div>
            <div className="row">
                {
                    charactersDesc === null ? (
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-light ">
                                    <h2>{charactersDesc.properties.name}</h2>
                                    <p>Peso: {charactersDesc.properties.height}</p>
                                    <p>Color de Cabello: {charactersDesc.properties.hair_color}</p>
                                    <p>Color de Ojos: {charactersDesc.properties.eye_color}</p>
                                    <p>Fecha de nacimiento: {charactersDesc.properties.birth_year}</p>
                                    <p>Descripcion: {charactersDesc.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    )


}

export default Descripcion;



