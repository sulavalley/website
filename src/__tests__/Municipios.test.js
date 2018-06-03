import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Municipios from './../pages/Municipios';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Municipios />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<Municipios />);
});

test('renders correctly', () => {
  const tree = renderer.create(<Municipios />).toJSON();
  expect(tree).toMatchSnapshot();
});
