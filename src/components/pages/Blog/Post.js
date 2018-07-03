import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import unixToDate from './unixToDate';
import logo from '../../../assets/images/logo.png';

const postStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '40em'
};
class Post extends React.Component {
  handleError = evt => {
    evt.target.src = logo;
  };

  render() {
    const { title, author, timestamp, content, imageURL, id } = this.props;

    return (
      <Item>
        <Item.Image src={imageURL} size="medium" onError={this.handleError} />
        <Item.Content>
          <Item.Header>
            <Link
              to={{
                pathname: `/blog/${id}`,
                state: { title, author, timestamp, content }
              }}
            >
              {title}
            </Link>
          </Item.Header>
          <Item.Meta>{author}</Item.Meta>
          <Item.Extra>{unixToDate(timestamp)}</Item.Extra>
          <Item.Description style={postStyle}>{content}</Item.Description>
        </Item.Content>
      </Item>
    );
  }
}

export default Post;
