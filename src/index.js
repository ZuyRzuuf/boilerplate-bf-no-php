import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';

import apolloClient from '../config/apolloClient';

import App from './components/App';

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <App />
    </ApolloProvider>,
    document.getElementById('index')
);

if(typeof(module.hot) !== 'undefined') {
    module.hot.accept() // eslint-disable-line no-undef
}
