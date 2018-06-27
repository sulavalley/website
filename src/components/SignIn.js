import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../base';
import { Button } from 'semantic-ui-react';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <Button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
          Iniciar Sesión
        </Button>
      </div>
    );
  }
}

export default SignIn;
