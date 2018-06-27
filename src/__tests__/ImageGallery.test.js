import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ImageGallery from '../components/ImageGallery';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageGallery />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<ImageGallery />);
});

test('renders correctly', () => {
  const tree = renderer.create(<ImageGallery />).toJSON();
  expect(tree).toMatchSnapshot();
});
