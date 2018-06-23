import React from 'react';
import base from '../../base';
import Project from './Project';

class Projects extends React.Component {

  state = {
    projects: []
  }

componentDidMount (){
  base.fetch('projects', {
      context: this,
      asArray: true,
      then(data) {
        this.setState({projects: data})
      }
    });
}
  render() {

    return (
      <div>
        {this.state.projects.map((project,i) => (<Project name= {project.name} 
          url= {project.url} description= {project.description} key={i}/>))}
      </div>
    )
  }
}

export default Projects;
