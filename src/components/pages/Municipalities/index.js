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
    <Segment
      style={{ backgroundColor: '#2185d0' }}
      raised
      verticalalign="middle"
    >
      <Header style={{ color: 'white' }} size="huge" textAlign="center">
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
        <Grid.Row centered columns={1}>
          <Divider hidden />
          <Header as="h1">Municipios del Valle de Sula</Header>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column textAlign="center">
            <SulaValleyMap onMunicipalityClick={this.onMunicipalityClick} />
            <em>Haga clic en un municipio para ver su información.</em>
            <br />
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
