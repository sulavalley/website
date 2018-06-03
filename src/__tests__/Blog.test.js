import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Blog from './../pages/Blog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Blog />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<Blog />);
});

test('renders correctly', () => {
  const tree = renderer.create(<Blog />).toJSON();
  expect(tree).toMatchSnapshot();
});
