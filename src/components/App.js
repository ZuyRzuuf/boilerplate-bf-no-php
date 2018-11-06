import React from 'react';

import Header from "./Header.jsx";
import Dashboard from "./Dashboard.jsx";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Dashboard/>
            </div>
        );
    }
}

export default App;
