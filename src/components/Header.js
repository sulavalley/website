import React from 'react';
import './../css/Header.css';

const Header = () => {
  return (
    <div className="ui header-size menu">
      <img src={require('./../assets/images/logo.png')} alt="logo" />
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
      </div>
    </div>
  );
};

export default Header;
