import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Activities from './pages/Activities';
import Blog from './pages/Blog';
import Festivities from './pages/Festivities';
import Institutionality from './pages/Institutionality';
import Multimedia from './pages/Multimedia';
import Municipalities from './pages/Municipalities';
import Sustainability from './pages/Sustainability';
import './../css/App.css';
import { auth } from '../base';
import SignIn from './SignIn';
import CurrentUser from './CurrentUser';

const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  state = {
    currentUser: null
  };
  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });
    });
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <div className="app-header">
          <Header />
          {!currentUser && <SignIn />}
          {currentUser && <CurrentUser user={currentUser} />}
        </div>
        <div className="app-page-body">
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
