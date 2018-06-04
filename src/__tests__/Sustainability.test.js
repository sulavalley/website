import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Sustainability from './../components/pages/Sustainability';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sustainability />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<Sustainability />);
});

test('renders correctly', () => {
  const tree = renderer.create(<Sustainability />).toJSON();
  expect(tree).toMatchSnapshot();
});
