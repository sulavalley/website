import React from 'react';
import base from '../../../base';
import { Button, Form } from 'semantic-ui-react';

class NewProject extends React.Component {
  state = {
    name: '',
    url: '',
    description: ''
  };

  addProject() {
    base.push('projects', {
      data: {
        name: this.state.name,
        url: this.state.url,
        description: this.state.description
      },
      then(err) {
        if (!err) {
          alert('El proyecto a sido añadido');
        } else {
          alert('Ha ocurrido un error');
        }
      }
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.addProject();
  };

  render() {
    const { name } = this.state;
    const { url } = this.state;
    const { description } = this.state;

    return (
      <Form>
        <br />
        <Form.Field>
          <label>Nombre del Proyecto</label>
          <input
            type="text"
            value={name}
            placeholder="Nombre del proyecto"
            onChange={event => this.setState({ name: event.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label>Imagen</label>
          <input
            type="url"
            value={url}
            placeholder="Enlace de la Imagen"
            onChange={event => this.setState({ url: event.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label>Descripcion</label>
          <input
            type="text"
            value={description}
            placeholder="Descripcion del Proyecto"
            onChange={event =>
              this.setState({ description: event.target.value })
            }
          />{' '}
        </Form.Field>
        <Button type="submit" id="myButton" onClick={this.handleSubmit}>
          Crear
        </Button>
      </Form>
    );
  }
}

export default NewProject;
