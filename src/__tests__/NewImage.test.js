import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import NewImage from '../components/NewImage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewImage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<NewImage />);
});

test('renders correctly', () => {
  const tree = renderer.create(<NewImage />).toJSON();
  expect(tree).toMatchSnapshot();
});
