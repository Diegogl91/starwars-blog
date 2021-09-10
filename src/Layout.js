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


const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/Personajes" component={Personajes} />
                <Route exact path="/Naves" component={Naves} />
                <Route exact path="/Planetas" component={Planetas} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(Layout);