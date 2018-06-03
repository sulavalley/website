import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Actividades from './pages/Actividades'
import Blog from './pages/Blog';
import Festividades from './pages/Festividades';
import Institucionalidad from './pages/Institucionalidad';
import Multimedia from './pages/Multimedia';
import Municipios from './pages/Municipios';
import Sostenibilidad from './pages/Sostenibilidad';

const FourOhFour = () => <h1>404</h1>;

const Body = () => (
    <BrowserRouter>
        <div className="app">
            <Switch>
                <Route exact path="/" />
                <Route path="/institucionalidad" component={Institucionalidad} />
                <Route path="/municipios" component={Municipios} />
                <Route path="/multimedia" component={Multimedia} />
                <Route path="/sostenibilidad" component={Sostenibilidad} />
                <Route path="/festividades" component={Festividades} />
                <Route path="/actividades" component={Actividades} />
                <Route path="/blog" component={Blog} />
                <Route component={FourOhFour} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default Body;