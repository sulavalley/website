import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Institutionality from './../components/pages/Institutionality';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Institutionality />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<Institutionality />);
});

test('renders correctly', () => {
  const tree = renderer.create(<Institutionality />).toJSON();
  expect(tree).toMatchSnapshot();
});
