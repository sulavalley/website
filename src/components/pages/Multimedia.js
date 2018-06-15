import React from 'react';
import { Embed } from 'semantic-ui-react';
import '../../css/pages/Multimedia.css';

const Multimedia = () => (
  <center>
    <div className="video-player">
      <Embed
        url="https://www.youtube.com/embed/videoseries?list=UUffHDdNhOCZFvt-f_D4kxFA"
        placeholder="https://trello-attachments.s3.amazonaws.com/5aff552929693747ec0b088d/5aff5c23f3cddefc5870f975/34b908e23ae35dd9a286309203978edd/logo_MRT-VS-HD.png"
        iframe={{
          allowFullScreen: true
        }}
      />
    </div>
  </center>
);

export default Multimedia;
