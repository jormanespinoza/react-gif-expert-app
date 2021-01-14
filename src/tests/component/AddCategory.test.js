import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../Components/AddCategory';

describe('Tests on AddCategory component', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('should render <AddCategory /> properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change on input change', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo'
        input.simulate('change', { target: { value } });

        expect(wrapper.find('.hidden').text().trim()).toBe(value);
    });

    test('should post anything on submit when given input is not valid', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should call setCategories and empty inputValue', () => {
        const value = 'Hola Mundo'
        const input = wrapper.find('input');
        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault() {} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe('')
    });
});
