import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Header from './Header';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import {Switch} from 'react-router';

const App = () => {
    return (
        <Router>
            <>
                <Header />
                <Switch>
                    <Route component={Dashboard} exact path="/" />
                    <Route component={NotFound} />
                </Switch>
            </>
        </Router>
    );
};

export default App;
