import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class Project extends React.Component {
  render() {
    const { name, url, description } = this.props;

    return (
      <Card
        style={{
          minHeight: '100%'
        }}
      >
        <Image
          style={{
            marginLeft: '0%'
          }}
          src={url}
          size="medium"
        />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default Project;
