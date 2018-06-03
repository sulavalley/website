import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Festividades from './../pages/Festividades';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Festividades />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<Festividades />);
});

test('renders correctly', () => {
  const tree = renderer.create(<Festividades />).toJSON();
  expect(tree).toMatchSnapshot();
});
