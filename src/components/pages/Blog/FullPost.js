import React, { Component } from 'react';
import Disqus from 'disqus-react';
import base from '../../../base';
import unixToDate from './unixToDate';
import { Item } from 'semantic-ui-react';

const shortname = 'sulavalley';

class FullPost extends Component {
  state = { title: '', author: '', timestamp: null, content: '' };

  componentDidMount() {
    if (this.props.location.state === undefined) {
      const { id } = this.props.match.params;
      base.fetch(`posts/${id}`, {
        context: this,
        then(data) {
          this.setState({ ...data });
        }
      });
    } else {
      this.setState({ ...this.props.location.state });
    }
  }

  render() {
    const { title, author, timestamp, content } = this.state;
    const { id } = this.props.match.params;
    const disqusConfig = {
      url: window.location.href,
      identifier: id,
      title: title
    };

    return (
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header>{title}</Item.Header>
            <Item.Extra>
              <span>{author}</span>
              <span>{unixToDate(timestamp)}</span>
            </Item.Extra>
            <Item.Description>{content}</Item.Description>
            <Disqus.DiscussionEmbed
              shortname={shortname}
              config={disqusConfig}
            />
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

export default FullPost;
