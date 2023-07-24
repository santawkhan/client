import { useEffect, useState } from "react";
import Card from "./Card";

const CollegeCard = () => {
    const [Cards, setCollegeCard] = useState([])

    useEffect(() => {
        fetch('https://college-apply-server.vercel.app/cardData')
            .then(res => res.json())
            .then(data => setCollegeCard(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-7 mb-7 ml-60 gap-6">
            {
                Cards.map(collegeCard => <Card key={collegeCard._id} collegeCard={collegeCard}></Card>)
            }
        </div>
    );
};

export default CollegeCard;