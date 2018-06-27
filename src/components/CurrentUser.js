import React from 'react';
import { auth } from '../base';
import './../css/Header.css';

const CurrentUser = ({ user }) => {
  return (
    <a className="item" onClick={() => auth.signOut()}>
      Salir
    </a>
  );
};

export default CurrentUser;
