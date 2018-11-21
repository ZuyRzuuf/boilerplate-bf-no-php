import * as React from 'react';
import { MemoryRouter } from 'react-router';

import MockComponent from '../__mocks__/MockComponent';
import Router from '../Router';

jest.mock('../Dashboard', () => MockComponent);

describe('<Router /> suite', function() {
    test('renders isolated component correctly', () => {
        const wrapper = shallow(
            <Router />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders HTML tree correctly', () => {
        const wrapper = render(
            <MemoryRouter initialEntries={[ '/' ]} initialIndex={0}>
                <Router />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders components tree correctly', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/' ]} initialIndex={0}>
                <Router />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
