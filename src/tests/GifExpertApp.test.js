import React from 'react'
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Testing GifExpertApp component', () => {
    test('should render <GifExpertApp /> properly', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should show a list of categories', () => {
        const categories = ['Dragon Ball', 'Caballeros del Zodiaco'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});
