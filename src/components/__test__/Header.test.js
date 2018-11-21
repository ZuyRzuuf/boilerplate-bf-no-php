import * as React from 'react';

import Header from '../Header';
import {MemoryRouter} from 'react-router';

describe('<Header /> suite', function() {
    it('renders correctly isolated component', () => {
        const wrapper = shallow(
            <Header />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly HTML tree', () => {
        const wrapper = render(
            <MemoryRouter initialEntries={[ '/' ]} initialIndex={0}>
                <Header />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly components tree', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/' ]} initialIndex={0}>
                <Header />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
