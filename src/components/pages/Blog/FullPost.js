import React, { Component } from 'react';
import Disqus from 'disqus-react';
import base from '../../../base';
import unixToDate from './unixToDate';

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
    console.log(this.props);
    const { title, author, timestamp, content } = this.state;
    const { id } = this.props.match.params;
    const disqusConfig = {
      url: window.location.href,
      identifier: id,
      title: title
    };

    return (
      <div>
        <h1>{title}</h1>
        <h4>{author}</h4>
        <h4>{unixToDate(timestamp)}</h4>
        <p>{content}</p>
        <Disqus.DiscussionEmbed shortname={shortname} config={disqusConfig} />
      </div>
    );
  }
}

export default FullPost;
