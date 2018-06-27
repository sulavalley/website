import React from 'react';
import propTypes from 'prop-types';
import base from '../base';
import { Button, Form } from 'semantic-ui-react';

class NewImage extends React.Component {
  state = {
    caption: '',
    src: ''
  };

  addImage() {
    base.push('images', {
      data: {
        caption: this.state.caption,
        src: this.state.src,
        thumbnail: this.state.src,
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      then(err) {
        if (!err) {
          alert('La imagen ha sido añadida');
        } else {
          alert('Ha ocurrido un error');
        }
      }
    });
    this.setState({ caption: '', src: '' });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.addImage();
  };

  render() {
    const { caption } = this.state;
    const { src } = this.state;

    return (
      <Form>
        <br />
        <Form.Field>
          <label>Nombre de la imagen</label>
          <input
            type="text"
            value={caption}
            placeholder="Nombre de la imagen"
            onChange={event => this.setState({ caption: event.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label>Imagen</label>
          <input
            type="url"
            value={src}
            placeholder="Enlace de la imagen"
            onChange={event => this.setState({ src: event.target.value })}
          />
        </Form.Field>
        <Button type="submit" onClick={this.handleSubmit}>
          Crear
        </Button>
      </Form>
    );
  }
}

NewImage.propTypes = {
  caption: propTypes.string.isRequired,
  src: propTypes.string.isRequired
};

export default NewImage;
