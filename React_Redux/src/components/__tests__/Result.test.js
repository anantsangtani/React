import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Header from '../Header';
import Result from '../Result';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('A suite', function () {
  it('should render without throwing an error', function () {
    const wrapper = shallow(<Result />);

    expect(wrapper.contains(<div>
      <Header />
      Result
        </div>)).toBe(true);
  });


});