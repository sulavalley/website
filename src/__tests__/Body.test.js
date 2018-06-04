import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Body from './../components/Body';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Body />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<Body />);
});

test('renders correctly', () => {
  const tree = renderer.create(<Body />).toJSON();
  expect(tree).toMatchSnapshot();
});
