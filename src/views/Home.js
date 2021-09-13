import React from 'react';
import Starwarslogoyellow from '../img/star-wars-logo (1).png'


const Home = () => {
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src={Starwarslogoyellow}></img>
                </div>
            </div>
        </div>
    )
}

export default Home;