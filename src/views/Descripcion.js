import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';
import { imgCharacter } from '../img/index';



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
                            <div className="row d-flex justify-content-center">
                                <div className="card desc col-sm-8 rounded d-flex justify-content-between">
                                    <div className="card-left">
                                        <h2>{charactersDesc.properties.name}</h2>
                                        <p>Height: {charactersDesc.properties.height}</p>
                                        <p>Mass: {charactersDesc.properties.mass}</p>
                                        <p>Skin color: {charactersDesc.properties.skin_color}</p>
                                        <p>Hair color: {charactersDesc.properties.hair_color}</p>
                                        <p>Gender: {charactersDesc.properties.gender}</p>
                                        <p>Eyes color: {charactersDesc.properties.eye_color}</p>
                                        <p>Birth year: {charactersDesc.properties.birth_year}</p>
                                        <p>Description: {charactersDesc.description}</p>
                                    </div>

                                    <div className="imagenDescrip" style={{ backgroundImage: `url(${imgCharacter[uid]})` }}></div>
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



