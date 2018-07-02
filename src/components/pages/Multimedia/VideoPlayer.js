import React from 'react';
import { Embed } from 'semantic-ui-react';
import '../../../css/pages/Multimedia.css';
import logo from '../../../assets/images/logo.png';

const VideoPlayer = () => (
  <div className="video-player">
    <Embed
      url="https://www.youtube.com/embed/videoseries?list=UUffHDdNhOCZFvt-f_D4kxFA"
      placeholder={logo}
      iframe={{ allowFullScreen: true }}
    />
  </div>
);

export default VideoPlayer;
