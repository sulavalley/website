import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import unixToDate from './unixToDate';

const postStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '40em'
};

const Post = ({ title, author, timestamp, content, id }) => (
  <Item>
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

export default Post;
