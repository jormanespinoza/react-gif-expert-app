import React from "react";
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Testing GifGridItem', () => {
    const gif = {
        title: 'test',
        url: 'test_url'
    }
    const wrapper = shallow(<GifGridItem {...gif} />);

    test('should render <GifGridItem /> properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should placed gif title parameter into p tag text', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(gif.title);
    });

    test('should placed gif url and title into img tags src and src attributes', () => {
        const img = wrapper.find('img');
        expect(img.props().src).toBe(gif.url);
        expect(img.props().alt).toBe(gif.title);
    });

    test('should have class animated__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBeTruthy();
    });
})
