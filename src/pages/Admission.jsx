
import { useEffect, useState } from "react";

import AdmissionCard from "./AdmissionCard";


const Admission = () => {
    const [collegeData, setCollegeData] = useState([])

    useEffect(() => {
        fetch('https://college-apply-server.vercel.app/CollegeData')
            .then(res => res.json())
            .then(data => setCollegeData(data))
    }, [])
    return (
        <div className="text-center mt-7 mb-7">
            <ol>
                {
                    collegeData.map(card => <AdmissionCard key={card._id} card={card}></AdmissionCard>)
                }
            </ol>
        </div>
    );
};

export default Admission;