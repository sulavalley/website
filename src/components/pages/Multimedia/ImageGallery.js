import React from 'react';
import { Modal, Form, Input, Button, Image, Segment } from 'semantic-ui-react';
import base from '../../../base';

class ImageGallery extends React.Component {
  state = {
    images: [],
    imageModalIsOpen: false,
    newImage: {
      url: '',
      title: ''
    }
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

  handleChange = event => {
    const { newImage } = this.state;
    this.setState({
      newImage: { ...newImage, [event.target.name]: event.target.value }
    });
  };

  handleSubmit = () => {
    const { newImage } = this.state;
    base
      .push('images', {
        data: { ...newImage }
      })
      .then(() => this.setState({ imageModalIsOpen: false }))
      .catch(() => console.error('Something went terribly wrong'));
  };

  render() {
    const { imageModalIsOpen, images } = this.state;
    const { currentUser } = this.props;
    return (
      <div>
        {currentUser && (
          <Button onClick={() => this.setState({ imageModalIsOpen: true })}>
            Nueva publicación
          </Button>
        )}
        <Segment basic>
          <Image.Group size="medium">
            {images.map((image, i) => (
              <Image rounded key={i} src={image.url} />
            ))}
          </Image.Group>
        </Segment>
        <ImageModal
          open={imageModalIsOpen}
          onClose={() => this.setState({ imageModalIsOpen: false })}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const ImageModal = ({ open, onClose, onSubmit, onChange }) => (
  <Modal closeIcon open={open} onClose={onClose}>
    <Modal.Header>Nueva publicación</Modal.Header>
    <Modal.Content>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Título</label>
          <Input
            onChange={onChange}
            name="title"
            placeholder="Ingrese un título"
          />
        </Form.Field>
        <Form.Field>
          <label>URL</label>
          <Input
            onChange={onChange}
            name="url"
            placeholder="Ingrese un enlace a la imagen"
          />
        </Form.Field>
        <Button type="submit">Publicar</Button>
      </Form>
    </Modal.Content>
  </Modal>
);

export default ImageGallery;
