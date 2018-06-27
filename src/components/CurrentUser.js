import React from 'react';
import { auth } from '../base';
import { Button } from 'semantic-ui-react';

const CurrentUser = ({ user }) => {
  return (
    <div className="CurrentUser">
      <Button onClick={() => auth.signOut()}>Salir</Button>
    </div>
  );
};

export default CurrentUser;
