import * as React from 'react';
import { MemoryRouter } from 'react-router';

import App from '../App';

describe('<App /> suite', function() {
    test('renders isolated component correctly', () => {
        const wrapper = shallow(
            <App />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders HTML tree correctly', () => {
        const wrapper = render(
            <MemoryRouter initialEntries={[ '/' ]} initialIndex={0}>
                <App />
            </MemoryRouter>
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
});
