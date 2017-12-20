import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Header from '../Header';
import Input from '../Input';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = mount( <div><button type="submit" class="btn btn-success">Register</button></div>);

describe('A suite', function () {
    it('should render without throwing an error', function () {
        expect(wrapper.contains(<button type="submit" class="btn btn-success">Register</button>)).toBe(true);
    });


}); 