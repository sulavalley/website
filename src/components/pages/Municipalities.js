import React, { Component } from 'react';
import { Grid, Segment, Item } from 'semantic-ui-react';
import SulaValleyMap from '../maps/SulaValleyMap';

const Municipality = ({ name, description, imgSrc }) => (
  <Segment>
    <Item.Group>
      <Item>
        <Item.Image size="medium" src={imgSrc} />
        <Item.Content>
          <Item.Header>{name}</Item.Header>
          <Item.Description>
            <p>{description}</p>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  </Segment>
);

class Municipalities extends Component {
  state = {
    selectedMunicipality: null
  };

  onMunicipalityClick = municipality => {
    this.setState({ selectedMunicipality: municipality });
  };

  render() {
    const { selectedMunicipality } = this.state;
    return (
      <div>
        <h1>Municipios del Valle de Sula</h1>
        <Grid stackable>
          <Grid.Row columns={2}>
            <Grid.Column textAlign="center">
              <Segment basic>
                <SulaValleyMap onMunicipalityClick={this.onMunicipalityClick} />
                <em>
                  *Mapa obtenido de <a href="https://gadm.org/">gadm.org</a>
                </em>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              {selectedMunicipality && (
                <Municipality
                  name={selectedMunicipality.name}
                  description={selectedMunicipality.description}
                  imgSrc={selectedMunicipality.imgSrc}
                />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Municipalities;
