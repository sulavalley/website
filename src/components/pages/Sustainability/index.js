import React, { Component } from 'react';
import {
  Modal,
  Form,
  Input,
  Button,
  TextArea,
  Item,
  Divider,
  Dimmer,
  Loader,
  Segment
} from 'semantic-ui-react';
import Project from './Project';
import base from '../../../base';

class Sustainability extends Component {
  state = {
    projects: [],
    projectModalIsOpen: false,
    newProject: {
      name: '',
      url: '',
      description: ''
    },
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    base
      .fetch('projects', {
        context: this,
        asArray: true
      })
      .then(data => this.setState({ projects: data }))
      .finally(() => this.setState({ loading: false }))
      .catch(() => console.error('Something went terribly wrong'));
  }

  handleChange = event => {
    const { newProject } = this.state;
    this.setState({
      newProject: { ...newProject, [event.target.name]: event.target.value }
    });
  };

  handleSubmit = () => {
    const { newProject } = this.state;
    base
      .push('projects', {
        data: { ...newProject }
      })
      .then(() => this.setState({ projectModalIsOpen: false }))
      .catch(() => console.error('Something went terribly wrong'));
  };

  render() {
    const { projectModalIsOpen, projects, loading } = this.state;
    const { currentUser } = this.props;
    return (
      <Segment basic>
        <Dimmer active={loading} inverted>
          <Loader size="large">Cargando</Loader>
        </Dimmer>
        {currentUser && (
          <Button
            primary
            onClick={() => this.setState({ projectModalIsOpen: true })}
          >
            Nuevo proyecto
          </Button>
        )}
        <Divider hidden />
        <Item.Group divided>
          {projects.map((project, i) => (
            <Project
              key={i}
              name={project.name}
              url={project.url}
              description={project.description}
            />
          ))}
        </Item.Group>
        <ImageModal
          open={projectModalIsOpen}
          onClose={() => this.setState({ projectModalIsOpen: false })}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
      </Segment>
    );
  }
}

const ImageModal = ({ open, onClose, onSubmit, onChange }) => (
  <Modal closeIcon open={open} onClose={onClose}>
    <Modal.Header>Nuevo proyecto</Modal.Header>
    <Modal.Content>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Nombre</label>
          <Input
            onChange={onChange}
            name="name"
            placeholder="Ingrese un nombre"
          />
        </Form.Field>
        <Form.Field>
          <label>Imagen</label>
          <Input
            onChange={onChange}
            name="url"
            placeholder="Ingrese un enlace a la imagen"
          />
        </Form.Field>
        <Form.Field>
          <label>Descripción</label>
          <TextArea
            onChange={onChange}
            name="description"
            placeholder="Ingrese una descripción"
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

export default Sustainability;
