import React from 'react';
import {Query} from 'react-apollo';

import Examples from '../../graphql/client/queries/examples.graphql';

const Dashboard = () => {
    return (
        <>
            <div>Dashboard</div>
            <Query query={Examples}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;

                    if (error) return <p>Error :(</p>;

                    return data.examples.map(({ uuid, name }) => (
                        <div key={uuid}>
                            <p>
                                {`${uuid}: ${name}`}
                            </p>
                        </div>
                    ));
                }}
            </Query>
        </>
    );
};

export default Dashboard;
