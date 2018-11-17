import * as React from 'react';

import Header from '../Header';

describe('<Header /> suite', function() {
    it('renders correctly isolated component', () => {
        const wrapper = shallow(
            <Header />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly HTML tree', () => {
        const wrapper = render(
            <Header />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly components tree', () => {
        const wrapper = mount(
            <Header />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
