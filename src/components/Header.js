import React, { Component } from 'react';
import './../css/Header.css';
import logo from './../assets/images/logo.png';
import SignIn from './SignIn';
import CurrentUser from './CurrentUser';

class Header extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="ui stackable menu">
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
          <a style={{ display: 'none' }} className="item" href="/festividades">
            Festividades
          </a>
          <a style={{ display: 'none' }} className="item" href="/actividades">
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
