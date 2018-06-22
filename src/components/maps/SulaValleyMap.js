import React, { Component } from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from 'react-simple-maps';
import map from '../../assets/maps/sula-valley.json';

const wrapperStyles = {
  width: '100%',
  margin: '0 auto'
};

class SulaValleyMap extends Component {
  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projection="mercator"
          projectionConfig={{ scale: 23000 }}
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
                    style={{
                      default: {
                        fill: '#ECEFF1',
                        stroke: '#008080',
                        strokeWidth: 0.75,
                        outline: 'none'
                      },
                      hover: {
                        fill: '#008080',
                        stroke: '#008080',
                        strokeWidth: 0.75,
                        outline: 'none'
                      },
                      pressed: {
                        fill: '#008080',
                        stroke: '#008080',
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
