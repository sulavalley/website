import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="ui header-size menu">
            <img src="https://trello-attachments.s3.amazonaws.com/5aff552929693747ec0b088d/5aff5c23f3cddefc5870f975/9641415fc09e4d3aa2b1d3fd734b9541/logo.png" />
            <div className="right menu">
                <a className="item" href="/institucionalidad">Institucionalidad</a>
                <a className="item" href="/municipios">Municipios</a>
                <a className="item" href="/multimedia">Multimedia</a>
                <a className="item" href="/sostenibilidad">Sostenibilidad</a>
                <a className="item" href="/festividades">Festividades</a>
                <a className="item" href="/actividades">Actividades</a>
                <a className="item" href="/blog">Blog</a>
            </div>
        </div>
    );
};

export default Header;