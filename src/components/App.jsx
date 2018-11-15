import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import {Switch} from 'react-router';

import Header from './Header';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

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
