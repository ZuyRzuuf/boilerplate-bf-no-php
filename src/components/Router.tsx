import * as React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import {Switch} from 'react-router';

import AnotherPage from './AnotherPage';
import Dashboard from './Dashboard';
import Header from './Header';
import NotFound from './NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <>
                <Header />

                <Switch>
                    <Route component={Dashboard} exact path="/" />
                    <Route component={AnotherPage} path="/another-page" />
                    <Route component={NotFound} />
                </Switch>
            </>
        </BrowserRouter>
    )
};

export default Router;
