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
import { auth } from '../base';
import './../css/App.css';
import FullPost from './pages/Blog/FullPost';

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
      <div
        style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}
      >
        <Header currentUser={currentUser} />
        <div style={{ flex: 1 }}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Institutionality} />
              <Route path="/institucionalidad" component={Institutionality} />
              <Route path="/municipios" component={Municipalities} />
              <Route
                path="/multimedia"
                render={() => <Multimedia currentUser={currentUser} />}
              />
              <Route
                path="/sostenibilidad"
                render={() => <Sustainability currentUser={currentUser} />}
              />
              <Route path="/festividades" component={Festivities} />
              <Route path="/actividades" component={Activities} />
              <Route
                exact
                path="/blog"
                render={() => <Blog currentUser={currentUser} />}
              />
              <Route path="/blog/:id" component={FullPost} />
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
