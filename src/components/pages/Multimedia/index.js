import React from 'react';
import { Tab } from 'semantic-ui-react';
import VideoPlayer from './VideoPlayer';
import ImageGallery from './ImageGallery';

const panes = [
  {
    menuItem: 'Imágenes',
    render: () => (
      <Tab.Pane>
        <ImageGallery />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Vídeos',
    render: () => (
      <Tab.Pane>
        <VideoPlayer
          url={
            'https://www.youtube.com/embed/videoseries?list=UUffHDdNhOCZFvt-f_D4kxFA'
          }
        />
      </Tab.Pane>
    )
  }
];

const Multimedia = () => (
  <center>
    <Tab panes={panes} />
  </center>
);

export default Multimedia;
