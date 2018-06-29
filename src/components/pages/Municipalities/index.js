import React, { Component } from 'react';
import {
  Grid,
  Segment,
  Header,
  Image,
  Divider,
  Container
} from 'semantic-ui-react';
import SulaValleyMap from './SulaValleyMap';
import municipalities from '../../../assets/municipalities.json';

const Municipality = ({ name, description, imgSrc }) => (
  <Segment.Group>
    <Segment raised secondary verticalalign="middle">
      <Header size="huge" textAlign="center">
        {name}
      </Header>
    </Segment>
    <Segment raised>
      <Image
        rounded
        style={{
          margin: '0 auto',
          minWidth: 300,
          minHeight: 225,
          maxWidth: 300,
          maxHeight: 225
        }}
        size="medium"
        src={imgSrc}
      />
      <Divider />
      <Container
        fluid
        text
        textAlign="justified"
        style={{ minHeight: 300, maxHeight: 300, overflowY: 'auto' }}
      >
        <p>{description}</p>
      </Container>
    </Segment>
  </Segment.Group>
);

class Municipalities extends Component {
  state = {
    selectedMunicipality: municipalities['HN.CR.SP']
  };

  onMunicipalityClick = municipality => {
    this.setState({ selectedMunicipality: municipality });
  };

  render() {
    const { selectedMunicipality } = this.state;
    return (
      <Grid stackable verticalAlign="middle" style={{ height: 'inherit' }}>
        <Grid.Row columns={2}>
          <Grid.Column textAlign="center">
            <SulaValleyMap onMunicipalityClick={this.onMunicipalityClick} />
            <em>
              *Mapa obtenido de <a href="https://gadm.org/">gadm.org</a>
            </em>
          </Grid.Column>
          <Grid.Column>
            {selectedMunicipality && (
              <div style={{ padding: '0 20% 0 10%' }}>
                <Municipality
                  name={selectedMunicipality.name}
                  description={selectedMunicipality.description}
                  imgSrc={selectedMunicipality.imgSrc}
                />
              </div>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Municipalities;
