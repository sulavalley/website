import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../base';
import './../css/Header.css';

class SignIn extends Component {
  render() {
    return (
      <a
        className="item"
        onClick={() => auth.signInWithPopup(googleAuthProvider)}
      >
        Iniciar Sesión
      </a>
    );
  }
}

export default SignIn;
