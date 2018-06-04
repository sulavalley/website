import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Activities from './pages/Activities';
import Blog from './pages/Blog';
import Festivities from './pages/Festivities';
import Institutionality from './pages/Institutionality';
import Multimedia from './pages/Multimedia';
import Municipalities from './pages/Municipalities';
import Sustainability from './pages/Sustainability';

const FourOhFour = () => <h1>404</h1>;

const Body = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" />
      <Route path="/institucionalidad" component={Institutionality} />
      <Route path="/municipios" component={Municipalities} />
      <Route path="/multimedia" component={Multimedia} />
      <Route path="/sostenibilidad" component={Sustainability} />
      <Route path="/festividades" component={Festivities} />
      <Route path="/actividades" component={Activities} />
      <Route path="/blog" component={Blog} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
);

export default Body;
