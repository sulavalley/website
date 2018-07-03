import React from 'react';
import { Embed, Container, Divider } from 'semantic-ui-react';
import '../../../css/pages/Multimedia.css';
import logo from '../../../assets/images/logo.png';

const VideoPlayer = () => (
  <div className="video-player">
    <Container text textAlign="justified" fluid>
      En esta sección encontraras videos sobre las actividades realizadas por la
      MRTVS.
    </Container>
    <Divider />
    <Embed
      url="https://www.youtube.com/embed/videoseries?list=UUffHDdNhOCZFvt-f_D4kxFA"
      placeholder={logo}
      iframe={{ allowFullScreen: true }}
    />
  </div>
);

export default VideoPlayer;
