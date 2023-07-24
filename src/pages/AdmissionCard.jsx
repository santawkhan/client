import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionCard = ({ card }) => {

    const { _id, collegeName } = card
    return (
        <div>
            <ul>
                <li><Link to={`/adclg/${_id}`}>{collegeName}</Link></li>
            </ul>
        </div>
    );
};

export default AdmissionCard;