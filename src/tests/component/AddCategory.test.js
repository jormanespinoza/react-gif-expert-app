import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../Components/AddCategory';

describe('Tests on AddCategory component', () => {

    const setCategories = () => {};

    test('should render <AddCategory /> component properly', () => {
        const wrapper = shallow(<AddCategory setCategories={setCategories} />);
        expect(wrapper).toMatchSnapshot();
    });
});
