import React from 'react';
import { Item } from 'semantic-ui-react';

class Project extends React.Component {
  render() {
    const { name, url, description } = this.props;

    return (
      <Item>
        <Item.Image src={url} size="small" />
        <Item.Content>
          <Item.Header>{name}</Item.Header>
          <Item.Description>{description}</Item.Description>
        </Item.Content>
      </Item>
    );
  }
}

export default Project;
