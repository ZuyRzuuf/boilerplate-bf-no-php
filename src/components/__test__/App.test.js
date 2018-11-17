import * as React from 'react';
// import { MemoryRouter } from 'react-router';
// import { mount } from 'enzyme';

import App from '../App';
// import Dashboard from '../Dashboard';
// import NotFound from '../NotFound';

describe('<App /> suite', function() {
    test('renders isolated component correctly', () => {
        const wrapper = shallow(
            <App />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders HTML tree correctly', () => {
        const wrapper = render(
            <App />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders components tree correctly', () => {
        const wrapper = mount(
            <App />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
