/**
 * Mock let to test React Router elements.
 *
 * Mock is necessary because it’ll overlap with MemoryRouter used in tests
 * and causing the initialEntries working.
 */
import React from 'react';

const rrd = require('react-router-dom');

// Just render plain div with its children
rrd.BrowserRouter = ({children}) => (   // eslint-disable-line
    <div>{children}</div>
);

module.exports = rrd;
