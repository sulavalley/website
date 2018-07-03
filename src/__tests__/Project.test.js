import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Project from './../components/pages/Sustainability/Project';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Project />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<Project />);
});

test('renders correctly', () => {
  const tree = renderer.create(<Project />).toJSON();
  expect(tree).toMatchSnapshot();
});
