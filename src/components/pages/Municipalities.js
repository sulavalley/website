import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import SulaValleyMap from '../maps/SulaValleyMap';

const Municipalities = () => {
  return (
    <Container>
      <Header as="h1">Municipios del Valle de Sula</Header>
      <SulaValleyMap />
      <p>
        <em>
          *Mapa obtenido de <a href="https://gadm.org/">gadm.org</a>
        </em>
      </p>
    </Container>
  );
};

export default Municipalities;
