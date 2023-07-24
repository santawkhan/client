import React, { useEffect, useState } from 'react';
import AllColleges from './AllColleges';

const Colleges = () => {
    const [collegeData, setCollegeData] = useState([])

    useEffect(() => {
        fetch('https://college-apply-server.vercel.app/CollegeData')
            .then(res => res.json())
            .then(data => setCollegeData(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-7 mb-7'>
            {
                collegeData.map(card => <AllColleges key={card._id} card={card}></AllColleges>)
            }
        </div>
    );
};

export default Colleges;