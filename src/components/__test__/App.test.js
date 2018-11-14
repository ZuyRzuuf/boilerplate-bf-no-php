import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';

import App from '../App';
import Dashboard from '../Dashboard';
import NotFound from '../NotFound';

describe('A suite', function() {
    test('renders isolated component correctly', () => {
        const wrapper = shallow(
            <App />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders components tree correctly', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/' ]} initialIndex={0}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('valid path should redirect to Dashboard and renders HTML tree correctly', () => {
        const html = render(
            <MemoryRouter initialEntries={[ '/' ]} initialIndex={0}>
                <App />
            </MemoryRouter>
        );
        expect(html).toMatchSnapshot();
    });

    test('valid path should redirect to Dashboard', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/' ]}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(Dashboard)).toHaveLength(1);
        expect(wrapper.find(NotFound)).toHaveLength(0);
    });

    test('invalid path should redirect to NotFound and renders HTML tree correctly', () => {
        const html = render(
            <MemoryRouter initialEntries={[ '/nonsense' ]}>
                <App />
            </MemoryRouter>
        );
        expect(html).toMatchSnapshot();
    });

    test('invalid path should redirect to NotFound', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/nonsense' ]}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(Dashboard)).toHaveLength(0);
        expect(wrapper.find(NotFound)).toHaveLength(1);
    });
});
