//import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import {shallow} from 'enzyme';
//import toJSON from 'enzyme-to-json'
import Header from '../../components/Header';

test('should render Header correctly', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput());

    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find('h1').length).toBe(1);
})
