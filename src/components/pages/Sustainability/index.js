import React, { Component } from 'react';
import {
  Modal,
  Form,
  Input,
  Button,
  TextArea,
  Item,
  Divider
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
    }
  };

  componentDidMount() {
    base.fetch('projects', {
      context: this,
      asArray: true,
      then(data) {
        this.setState({ projects: data });
      }
    });
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
    const { projectModalIsOpen, projects } = this.state;
    const { currentUser } = this.props;
    return (
      <div>
        {currentUser && (
          <Button
            primary
            onClick={() => this.setState({ projectModalIsOpen: true })}
          >
            Nueva publicación
          </Button>
        )}
        <Divider hidden />
        <Item.Group divided>
          {projects.map((project, i) => (
            <Project
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
      </div>
    );
  }
}

const ImageModal = ({ open, onClose, onSubmit, onChange }) => (
  <Modal closeIcon open={open} onClose={onClose}>
    <Modal.Header>Nuevo proyecto</Modal.Header>
    <Modal.Content>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Nombre del proyecto</label>
          <Input
            onChange={onChange}
            name="name"
            placeholder="Ingrese un nombre"
          />
        </Form.Field>
        <Form.Field>
          <label>Imagen del proyecto</label>
          <Input
            onChange={onChange}
            name="url"
            placeholder="Ingrese un enlace a la imagen"
          />
        </Form.Field>
        <Form.Field>
          <label>Descripción del proyecto</label>
          <TextArea
            onChange={onChange}
            name="description"
            placeholder="Ingrese una descripción"
          />
        </Form.Field>
        <Button positive type="submit">
          Publicar
        </Button>
      </Form>
    </Modal.Content>
  </Modal>
);

export default Sustainability;
