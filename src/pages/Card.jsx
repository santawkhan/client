
import { Link } from 'react-router-dom';

const Card = ({ collegeCard }) => {

    const { _id, collegeImage, collegeName, admissionDates, events, researchHistory, sports } = collegeCard;
    const { fall, spring, summer } = admissionDates;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={collegeImage} alt="College" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {collegeName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Admission Dates:</p>
                <ul>
                    <li>Fall: {fall}</li>
                    <li>Spring: {spring}</li>
                    <li>Summer: {summer}</li>
                </ul>
                <p>{researchHistory}</p>
                <div className="card-actions justify-end">
                    {/* Render events and other information as needed */}
                </div>
            </div>
            <button className='btn btn-warning'><Link to={`/details/${_id}`}>Details</Link></button>
        </div>
    );
};

export default Card;
