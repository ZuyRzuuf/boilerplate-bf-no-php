import React from 'react';

import Dashboard from '../Dashboard';

describe('A suite', function() {
    it('renders correctly', () => {
        const wrapper = shallow(
            <Dashboard />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
