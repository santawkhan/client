import React from 'react';

const AllColleges = ({ card }) => {
    const { collegeName, collegeImage, collegeRating, admissionDate, numberOfResearch, events } = card
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={collegeImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {collegeName}
                    <div className="badge badge-secondary">Ratings:{collegeRating}</div>
                </h2>
                <p>Admission Date:{admissionDate}</p>
                <p>Number of Research:{numberOfResearch}</p>

                <div className="card-actions justify-end">
                    <button className='btn btn-accent'>Details</button>

                </div>
            </div>
        </div>
    );
};

export default AllColleges;