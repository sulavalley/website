import React from 'react';
import { Tab } from 'semantic-ui-react';
import NewProject from './NewProject';
import Projects from './Projects';

const panes = [
  {
    menuItem: 'Crear Proyecto',
    render: () => <NewProject />
  },
  {
    menuItem: 'Proyectos',
    render: () => <Projects />
  }
];

const TabExampleBasic = () => <Tab panes={panes} />;

export default TabExampleBasic;
