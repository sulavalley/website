import React, { Component } from 'react';
import {
  Item,
  Button,
  Modal,
  Form,
  TextArea,
  Input,
  Segment,
  Dimmer,
  Loader
} from 'semantic-ui-react';
import base from '../../../base';
import Post from './Post';
import firebase from 'firebase';

class Blog extends Component {
  state = {
    posts: {},
    postModalIsOpen: false,
    loading: false,
    newPost: { title: '', imageURL: '', content: '' }
  };

  componentDidMount() {
    this.setState({ loading: true });
    base
      .fetch('posts', {
        context: this
      })
      .then(data => this.setState({ posts: data }))
      .finally(() => this.setState({ loading: false }))
      .catch(() => console.error('Something went terribly wrong'));
  }

  handleChange = event => {
    const { newPost } = this.state;
    this.setState({
      newPost: { ...newPost, [event.target.name]: event.target.value }
    });
  };

  handleNewPost = evt => {
    evt.preventDefault();
    this.addPost();
  };

  addPost = () => {
    const { newPost } = this.state;
    const { currentUser } = this.props;
    base
      .push('posts', {
        data: {
          title: newPost.title,
          imageURL: newPost.imageURL,
          content: newPost.content,
          timestamp: firebase.database.ServerValue.TIMESTAMP,
          author: currentUser.displayName
        }
      })
      .then(() => this.setState({ postModalIsOpen: false }))
      .catch(() => console.error('Something went terribly wrong'));
  };

  render() {
    const { posts, postModalIsOpen, loading } = this.state;
    const { currentUser } = this.props;
    return (
      <Segment basic>
        <Dimmer active={loading} inverted>
          <Loader size="large">Cargando</Loader>
        </Dimmer>
        {currentUser && (
          <Button
            primary
            onClick={() => this.setState({ postModalIsOpen: true })}
          >
            Nueva publicación
          </Button>
        )}
        <Item.Group divided>
          {Object.keys(posts).map(key => (
            <Post key={key} id={key} {...posts[key]} />
          ))}
        </Item.Group>
        <PostModal
          open={postModalIsOpen}
          onClose={() => this.setState({ postModalIsOpen: false })}
          onSubmit={this.handleNewPost}
          onChange={this.handleChange}
        />
      </Segment>
    );
  }
}

const PostModal = ({ open, onClose, onSubmit, onChange }) => (
  <Modal closeIcon open={open} onClose={onClose}>
    <Modal.Header>Nueva publicación</Modal.Header>
    <Modal.Content>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Título</label>
          <Input onChange={onChange} placeholder="Título" name="title" />
        </Form.Field>
        <Form.Field>
          <label>URL de imagen</label>
          <Input
            onChange={onChange}
            name="imageURL"
            placeholder="Ingrese un enlace a la imagen"
          />
        </Form.Field>
        <Form.Field>
          <label>Contenido</label>
          <TextArea
            rows={8}
            onChange={onChange}
            placeholder="Ingrese el contenido de la publicación."
            name="content"
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

export default Blog;
