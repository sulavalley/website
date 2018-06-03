import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Actividades from './../pages/Actividades';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Actividades />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<Actividades />);
});

test('renders correctly', () => {
  const tree = renderer.create(<Actividades />).toJSON();
  expect(tree).toMatchSnapshot();
});
