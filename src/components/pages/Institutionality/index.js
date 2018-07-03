import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import image3 from '../../../assets/images/image3.jpg';
import image5 from '../../../assets/images/image5.jpg';
import image22 from '../../../assets/images/image22.jpg';
import image28 from '../../../assets/images/image28.jpg';
import '../../../css/pages/Institutionality.css';

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const Institutionality = () => {
  return (
    <Grid container>
      <Grid.Row>
        <Grid verticalAlign="middle">
          <Grid.Column width={4}>
            <div className="image-container">
              <Image
                className="grid-image"
                rounded
                size="medium"
                src={image3}
              />
            </div>
          </Grid.Column>
          <Grid.Column width={12}>
            <Header textAlign="center" size="huge">
              Misión
            </Header>
            <p>{loremIpsum}</p>
          </Grid.Column>
        </Grid>
      </Grid.Row>

      <Grid.Row>
        <Grid verticalAlign="middle">
          <Grid.Column width={12}>
            <Header textAlign="center" size="huge">
              Visión
            </Header>
            <p>{loremIpsum}</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <div className="image-container">
              <Image
                className="grid-image"
                rounded
                size="medium"
                src={image5}
              />
            </div>
          </Grid.Column>
        </Grid>
      </Grid.Row>

      <Grid.Row>
        <Grid verticalAlign="middle">
          <Grid.Column width={4}>
            <div className="image-container">
              <Image
                className="grid-image"
                rounded
                size="medium"
                src={image22}
              />
            </div>
          </Grid.Column>
          <Grid.Column width={12}>
            <Header textAlign="center" size="huge">
              Objetivos
            </Header>
            <p>{loremIpsum}</p>
          </Grid.Column>
        </Grid>
      </Grid.Row>

      <Grid.Row>
        <Grid verticalAlign="middle">
          <Grid.Column width={12}>
            <Header textAlign="center" size="huge">
              Alcance
            </Header>
            <p>{loremIpsum}</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <div className="image-container">
              <Image
                className="grid-image"
                rounded
                size="medium"
                src={image28}
              />
            </div>
          </Grid.Column>
        </Grid>
      </Grid.Row>
    </Grid>
  );
};

export default Institutionality;
