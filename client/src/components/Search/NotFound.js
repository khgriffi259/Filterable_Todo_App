import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
        <div style={{textAlign: 'center'}}>
            <h3>User not found</h3>
            <Link to="/">Go Home</Link>
        </div>
)

export default NotFound;