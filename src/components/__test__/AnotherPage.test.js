import * as React from 'react';

import AnotherPage from '../AnotherPage';

describe('<AnotherPage /> suite', function() {
    it('renders correctly isolated component', () => {
        const wrapper = shallow(
            <AnotherPage />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly HTML tree', () => {
        const wrapper = render(
            <AnotherPage />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly components tree', () => {
        const wrapper = mount(
            <AnotherPage />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
