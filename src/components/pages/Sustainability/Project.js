import React from 'react';
import { Item } from 'semantic-ui-react';
import logo from '../../../assets/images/logo.png';

class Project extends React.Component {
  handleError = evt => {
    evt.target.src = logo;
  };

  render() {
    const { name, url, description } = this.props;

    return (
      <Item>
        <Item.Image src={url} size="small" onError={this.handleError} />
        <Item.Content>
          <Item.Header>{name}</Item.Header>
          <Item.Description>{description}</Item.Description>
        </Item.Content>
      </Item>
    );
  }
}

export default Project;
