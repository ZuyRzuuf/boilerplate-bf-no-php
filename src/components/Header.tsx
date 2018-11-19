import * as React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div>Backend/Frontend Node, React, Typescript boilerplate</div>
            <div>
                <Link to="/">Dashboard</Link>
                <Link to="/another-page">Another Page</Link>
                <Link to="/wrong-uri">Wrong URI</Link>
            </div>
        </>
    );
};

export default Header;
