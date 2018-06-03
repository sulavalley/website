import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Multimedia from './../pages/Multimedia';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Multimedia />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<Multimedia />);
});

test('renders correctly', () => {
  const tree = renderer.create(<Multimedia />).toJSON();
  expect(tree).toMatchSnapshot();
});
