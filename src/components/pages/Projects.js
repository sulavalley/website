import React from 'react';
import base from 'base';
import map from 'lodash/map';
import Project from './Project';

class Projects extends React.Component {
  getProjects() {
    base.fetch('projects', {
      context: this,
      asArray: true,
      then(data) {
        console.log(data);
      }
    });
  }

  render() {
    const { projects } = this.getProjects;

    return <Project />;
  }
}

export default Projects;
