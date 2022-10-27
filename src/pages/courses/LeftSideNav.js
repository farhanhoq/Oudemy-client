import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({ course }) => {
    
    const { name, id } = course;


    return (
        <div>
            <div className='my-2'><Link to={`/details/${id}`}>{ name }</Link></div>
        </div>
    );
};

export default LeftSideNav;