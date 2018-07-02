import React from 'react';
import { Tab } from 'semantic-ui-react';
import VideoPlayer from './VideoPlayer';
import ImageGallery from './ImageGallery';

const Multimedia = ({ currentUser }) => (
  <Tab
    panes={[
      {
        menuItem: 'Imágenes',
        render: () => (
          <Tab.Pane>
            <ImageGallery currentUser={currentUser} />
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Vídeos',
        render: () => (
          <Tab.Pane>
            <center>
              <VideoPlayer />
            </center>
          </Tab.Pane>
        )
      }
    ]}
  />
);

export default Multimedia;
