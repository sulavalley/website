import React from 'react';
import { string } from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

class Project extends React.Component {
  render() {
    const { name } = this.props;
    const { url } = this.props;
    const { description } = this.props;

    return (
      <Card>
        <Image
          src="http://www.hondurastips.hn/wp-content/uploads/2016/03/Portada-El-Caj%C3%B3n.jpg"
          size="medium"
        />
        <Card.Content>
          <Card.Header>Represa Hidroelectrica "El Cajon"</Card.Header>
          <Card.Description>
            La Central Hidroeléctrica Francisco Morazán (también conocida como
            "El Cajón") está situada en el curso del río Comayagua, en el
            departamento de Cortés, Honduras.1​ La represa de El cajón es del
            tipo de arco doble, la cual distribuye parabólicamente el agua hacia
            las paredes de las montañas que actúan como contrafuertes. Es la
            planta hidroeléctrica y de control de inundaciones más grande de
            Honduras. También es la quinta represa más alta de América, la
            decimosexta más alta en el mundo. Además es la represa en arco más
            grande del hemisferio occidental y la sexta en el mundo. A través de
            esta represa se obtiene gran parte de la energía del país en ella
            hay más de 50 mil galones de agua.{' '}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

Project.propTypes = {
  name: string,
  url: string,
  description: string
};

export default Project;
