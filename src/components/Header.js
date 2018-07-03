import React, { Component } from 'react';
import './../css/Header.css';
import logo from './../assets/images/logo.png';
import SignIn from './SignIn';
import CurrentUser from './CurrentUser';
import { Menu, Image } from 'semantic-ui-react';

class Header extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <Menu stackable>
        <Menu.Item position="left">
          <Image src={logo} size="small" />
        </Menu.Item>
        <Menu.Item />
        <Menu.Item href="/Institucionalidad">Institucionalidad</Menu.Item>
        <Menu.Item href="/Municipios">Municipios</Menu.Item>
        <Menu.Item href="/Multimedia">Multimedia</Menu.Item>
        <Menu.Item href="/Sostenibilidad">Sostenibilidad</Menu.Item>
        {/* <Menu.Item href="/Festividades">Festividades</Menu.Item>
        <Menu.Item href="/Actividades">Actividades</Menu.Item> */}
        <Menu.Item href="/Blog">Blog</Menu.Item>
        {!currentUser && <SignIn />}
        {currentUser && <CurrentUser user={currentUser} />}
      </Menu>
    );
  }
}

export default Header;
