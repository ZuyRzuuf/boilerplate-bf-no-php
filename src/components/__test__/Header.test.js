import React from 'react';

import Header from '../Header';

describe('A suite', function() {
    it('renders correctly', () => {
        const wrapper = shallow(
            <Header />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
