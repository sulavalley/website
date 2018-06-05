import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Municipalities from './../components/pages/Municipalities';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Municipalities />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<Municipalities />);
});

test('renders correctly', () => {
  const tree = renderer.create(<Municipalities />).toJSON();
  expect(tree).toMatchSnapshot();
});