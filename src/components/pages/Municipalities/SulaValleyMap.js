import React, { Component } from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from 'react-simple-maps';
import municipalites from '../../../assets/municipalities.json';
import map from '../../../assets/maps/sula-valley.json';

class SulaValleyMap extends Component {
  onGeographyClick = geography => {
    const { HASC_2 } = geography.properties;
    const municipality = municipalites[HASC_2];
    if (municipality === undefined) {
      throw Error(`Municipality with HASC_2 '${HASC_2}' not found.`);
    }
    this.props.onMunicipalityClick(municipality);
  };

  render() {
    return (
      <div>
        <ComposableMap
          projection="mercator"
          projectionConfig={{ scale: 20000 }}
          style={{
            width: '100%',
            height: 'auto'
          }}
        >
          <ZoomableGroup center={[-87.9, 15.35]} disablePanning>
            <Geographies geography={map}>
              {(geographies, projection) =>
                geographies.map((geography, i) => (
                  <Geography
                    key={geography.properties.GID_2}
                    geography={geography}
                    projection={projection}
                    onClick={this.onGeographyClick}
                    style={{
                      default: {
                        fill: '#ECEFF1',
                        stroke: '#016936',
                        strokeWidth: 0.75,
                        outline: 'none'
                      },
                      hover: {
                        fill: '#016936',
                        stroke: '#016936',
                        strokeWidth: 0.75,
                        outline: 'none'
                      },
                      pressed: {
                        fill: '#016936',
                        stroke: '#016936',
                        strokeWidth: 0.75,
                        outline: 'none'
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default SulaValleyMap;
