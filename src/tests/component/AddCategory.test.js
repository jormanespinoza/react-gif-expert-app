import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../Components/AddCategory';

describe('Tests on AddCategory component', () => {

    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);

    test('should render <AddCategory /> properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change on input change', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo'
        input.simulate('change', {target: {value}});
        expect(wrapper.find('.hidden').text().trim()).toBe(value);
    });
});
