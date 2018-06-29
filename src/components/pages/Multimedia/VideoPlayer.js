import React from 'react';
import { Embed } from 'semantic-ui-react';
import '../../../css/pages/Multimedia.css';
import logo from '../../../assets/images/logo.png';
import propTypes from 'prop-types';

const VideoPlayer = props => (
  <div className="video-player">
    <Embed
      url={props.url}
      placeholder={logo}
      iframe={{
        allowFullScreen: true
      }}
    />
  </div>
);

VideoPlayer.propTypes = {
  url: propTypes.string.isRequired
};

export default VideoPlayer;
