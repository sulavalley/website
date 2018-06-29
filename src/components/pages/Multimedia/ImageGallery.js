import React from 'react';
import Gallery from 'react-grid-gallery';
import '../../../css/pages/Multimedia.css';
import NewImage from './NewImage';
import base from '../../../base';

class ImageGallery extends React.Component {
  state = {
    images: []
  };

  componentDidMount() {
    base.fetch('images', {
      context: this,
      asArray: true,
      then(data) {
        this.setState({ images: data });
      }
    });
  }

  render() {
    return (
      <div className="image-gallery">
        <NewImage />
        <Gallery images={this.state.images} />
      </div>
    );
  }
}

export default ImageGallery;
