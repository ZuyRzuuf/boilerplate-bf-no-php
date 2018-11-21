import * as React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';

import Dashboard from '../Dashboard';

import * as Examples from '../../../graphql/client/queries/examples.graphql';

describe('<Dashboard /> suite', function() {
    const mocks = [
        {
            request: {
                query: Examples,
                variables: {},
            },
            result: {
                data: {
                    dog: { id: 'ee5ae76d-9b91-4270-a007-fad2054e2e75', name: 'example' },
                },
            },
        },
    ];

    it('renders correctly isolated component', () => {
        const wrapper = shallow(
            <MockedProvider addTypename={false} mocks={mocks}>
                <Dashboard />
            </MockedProvider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly HTML tree', () => {
        const wrapper = shallow(
            <MockedProvider addTypename={false} mocks={mocks}>
                <Dashboard />
            </MockedProvider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly components tree', () => {
        const wrapper = shallow(
            <MockedProvider addTypename={false} mocks={mocks}>
                <Dashboard />
            </MockedProvider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
