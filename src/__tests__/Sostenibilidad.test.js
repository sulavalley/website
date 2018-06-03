import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Sostenibilidad from './../pages/Sostenibilidad';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sostenibilidad />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<Sostenibilidad />);
});

test('renders correctly', () => {
  const tree = renderer.create(<Sostenibilidad />).toJSON();
  expect(tree).toMatchSnapshot();
});
