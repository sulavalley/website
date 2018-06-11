import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Activities from './../components/pages/Activities';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Activities />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<Activities />);
});

test('renders correctly', () => {
  const tree = renderer.create(<Activities />).toJSON();
  expect(tree).toMatchSnapshot();
});
