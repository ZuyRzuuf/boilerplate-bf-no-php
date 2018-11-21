import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';

import apolloClient from '../config/apolloClient';

import App from './components/App';

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <App />
    </ApolloProvider>,
    document.getElementById('index')
);
