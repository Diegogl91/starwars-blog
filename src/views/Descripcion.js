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
            <div className="title">Star Wars Characters</div>
            <div className="row">
                {
                    charactersDesc === null ? (
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">

                                    <h2>{charactersDesc.properties.name}</h2>
                                    <h2></h2>
                                    <h2></h2>

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



