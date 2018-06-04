import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Festivities from './../components/pages/Festivities';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Festivities />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<Festivities />);
});

test('renders correctly', () => {
  const tree = renderer.create(<Festivities />).toJSON();
  expect(tree).toMatchSnapshot();
});
