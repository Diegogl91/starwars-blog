import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import injectContext from './store/appContext';
import Naves from './views/Naves';
import Planetas from './views/Planetas';
import Personajes from './views/Personajes';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Descripcion from './views/Descripcion';


const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/personajes" component={Personajes} />
                <Route exact path="/personaje/:uid" component={Descripcion} />
                <Route exact path="/naves" component={Naves} />
                <Route exact path="/planetas" component={Planetas} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(Layout);