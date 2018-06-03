import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Institucionalidad from './../pages/Institucionalidad';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Institucionalidad />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<Institucionalidad />);
});

test('renders correctly', () => {
  const tree = renderer.create(<Institucionalidad />).toJSON();
  expect(tree).toMatchSnapshot();
});
