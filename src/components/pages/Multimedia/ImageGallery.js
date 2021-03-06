import React from 'react';
import {
  Modal,
  Form,
  Input,
  Button,
  Image,
  Segment,
  Loader,
  Dimmer,
  Container,
  Divider
} from 'semantic-ui-react';
import base from '../../../base';

class ImageGallery extends React.Component {
  state = {
    images: [],
    imageModalIsOpen: false,
    newImage: {
      url: '',
      title: ''
    },
    loading: false
  };

  loadData = () => {
    this.setState({ loading: true });
    base
      .fetch('images', {
        context: this,
        asArray: true
      })
      .then(data => this.setState({ images: data }))
      .finally(() => this.setState({ loading: false }))
      .catch(() => console.error('Something went terribly wrong'));
  };

  componentDidMount() {
    this.loadData();
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
      .then(() => this.loadData())
      .catch(() => console.error('Something went terribly wrong'));
  };

  render() {
    const { imageModalIsOpen, images, loading } = this.state;
    const { currentUser } = this.props;
    return (
      <Segment basic>
        <Container text textAlign="justified" fluid>
          En esta sección encontraras imágenes sobre las actividades realizadas
          por la MRTVS.
        </Container>
        <Divider />
        <Dimmer active={loading} inverted>
          <Loader size="large">Cargando</Loader>
        </Dimmer>
        {currentUser && (
          <Button
            primary
            onClick={() => this.setState({ imageModalIsOpen: true })}
          >
            Nueva imagen
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
      </Segment>
    );
  }
}

const ImageModal = ({ open, onClose, onSubmit, onChange }) => (
  <Modal closeIcon open={open} onClose={onClose}>
    <Modal.Header>Nueva imagen</Modal.Header>
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
        <Button
          style={{ marginBottom: 15 }}
          floated="right"
          positive
          type="submit"
        >
          Publicar
        </Button>
      </Form>
    </Modal.Content>
  </Modal>
);

export default ImageGallery;
