import React, { Component } from 'react';
import './../css/Header.css';
import logo from './../assets/images/logo.png';
import SignIn from './SignIn';
import { auth } from '../base';
import CurrentUser from './CurrentUser';

class Header extends Component {
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
      <div className="ui header-size menu">
        <img src={logo} alt="logo" />
        <div className="right menu">
          <a className="item" href="/institucionalidad">
            Institucionalidad
          </a>
          <a className="item" href="/municipios">
            Municipios
          </a>
          <a className="item" href="/multimedia">
            Multimedia
          </a>
          <a className="item" href="/sostenibilidad">
            Sostenibilidad
          </a>
          <a className="item" href="/festividades">
            Festividades
          </a>
          <a className="item" href="/actividades">
            Actividades
          </a>
          <a className="item" href="/blog">
            Blog
          </a>
          {!currentUser && <SignIn />}
          {currentUser && <CurrentUser user={currentUser} />}
        </div>
      </div>
    );
  }
}

export default Header;
