import React from 'react';
import base from '../../base';
import Project from './Project';
import { Grid } from 'semantic-ui-react';

class Projects extends React.Component {
  state = {
    projects: []
  };

  componentDidMount() {
    base.fetch('projects', {
      context: this,
      asArray: true,
      then(data) {
        this.setState({ projects: data });
      }
    });
  }
  render() {
    return (
      <div>
        <Grid columns={4}>
          {this.state.projects.map((project, i) => (
            <Grid.Column>
              <Project
                name={project.name}
                url={project.url}
                description={project.description}
                key={i}
              />
            </Grid.Column>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Projects;
