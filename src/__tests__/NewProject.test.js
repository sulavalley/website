import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import NewProject from './../components/pages/NewProject';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewProject />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<NewProject />);
});

test('renders correctly', () => {
  const tree = renderer.create(<NewProject />).toJSON();
  expect(tree).toMatchSnapshot();
});
