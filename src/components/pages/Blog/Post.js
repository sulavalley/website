import React from 'react';
import { Item, Segment, Header } from 'semantic-ui-react';
import unixToDate from './unixToDate';

const Post = ({ title, author, timestamp, content }) => (
  <Segment>
    <Item>
      <Item.Content>
        <Header>{title}</Header>
        <Item.Meta>{author}</Item.Meta>
        <Item.Extra>{unixToDate(timestamp)}</Item.Extra>
        <Item.Description>{content}</Item.Description>
      </Item.Content>
    </Item>
  </Segment>
);

export default Post;
