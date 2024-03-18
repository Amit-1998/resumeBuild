import { FaStar } from "react-icons/fa";
import { useState } from "react";
// import { FaRegStar } from "react-icons/fa";

function Star({ selected = false }){
   return (
     <FaStar color={selected ? 'orange' : ''} />
   );
}

const RatingStar = ({ className, totalStars = 5, selectedStars }) => {
    // const [selectedStars, setSelectedStars] = useState(2);

    return (
        <div className={className ? 'className' : 'container'}>
            {[...Array(totalStars)].map((n,idx) => (
                <Star key={idx} selected={selectedStars > idx} />
            ))}
        </div>
    );
}

export default RatingStar;