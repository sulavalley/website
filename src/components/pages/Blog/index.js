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
    postTitle: '',
    postContent: '',
    loading: false
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

  onPostTitleChange = (evt, data) => {
    this.setState({ postTitle: data.value });
  };

  onPostContentChange = (evt, data) => {
    this.setState({ postContent: data.value });
  };

  onNewPost = evt => {
    evt.preventDefault();
    this.addPost();
  };

  addPost = () => {
    base
      .push('posts', {
        data: {
          title: this.state.postTitle,
          content: this.state.postContent,
          timestamp: firebase.database.ServerValue.TIMESTAMP,
          author: this.props.currentUser.displayName
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
          onSubmit={this.onNewPost}
          onTitleChange={this.onPostTitleChange}
          onContentChange={this.onPostContentChange}
        />
      </Segment>
    );
  }
}

const PostModal = ({
  open,
  onClose,
  onSubmit,
  onTitleChange,
  onContentChange
}) => (
  <Modal closeIcon open={open} onClose={onClose}>
    <Modal.Header>Nueva publicación</Modal.Header>
    <Modal.Content>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Título</label>
          <Input onChange={onTitleChange} placeholder="Título" />
        </Form.Field>
        <Form.Field>
          <label>Contenido</label>
          <TextArea
            rows={8}
            onChange={onContentChange}
            placeholder="Ingrese el contenido de la publicación."
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
