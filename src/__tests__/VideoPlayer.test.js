import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import VideoPlayer from '../components/VideoPlayer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoPlayer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<VideoPlayer />);
});

test('renders correctly', () => {
  const tree = renderer.create(<VideoPlayer />).toJSON();
  expect(tree).toMatchSnapshot();
});
