import React from 'react';

import Dashboard from '../Dashboard';

describe('<Dashboard /> suite', function() {
    it('renders correctly', () => {
        const wrapper = shallow(
            <Dashboard />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
