import * as React from 'react';

import NotFound from '../NotFound';

describe('<NotFound /> suite', function() {
    it('renders correctly isolated component', () => {
        const wrapper = shallow(
            <NotFound />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly HTML tree', () => {
        const wrapper = render(
            <NotFound />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly components tree', () => {
        const wrapper = mount(
            <NotFound />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
