import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const LeftSideNav = () => {

    const [courseName, setCourseName] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/coursename")
            .then(res => res.json())
            .then(data => setCourseName(data))
    }, [])

    return (
        <div>
            <h3>Courses We Offer</h3>
            <div>
                {
                    courseName.map(c => 
                        <p key={c.id}>
                            {c.name}
                        </p>
                        )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;