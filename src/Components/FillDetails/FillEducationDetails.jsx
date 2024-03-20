import { useState } from "react";
import AddMoreIcon from "../../assets/AddMore.svg";
import MinusIcon from "../../assets/minus.svg";
import "./FillEducationDetails.scss";

const FillEducationDetails = () => {
  const [educationDetails, setEducationDetails] = useState([
    {
      degree: "",
      university: "",
      year: "",
    },
  ]);

  const handleInputChange = (e, index, field) => {
    const newDetails = [...educationDetails];
    newDetails[index][field] = e.target.value;
    setEducationDetails(newDetails);
  };

  const handleRemoveEdu = (index) => {
    setEducationDetails((prevEdu) => prevEdu.filter((elem,idx) => idx !== index));
}

  const renderDetailsUI = (index) => {
    return (
      <>
        <div className="eduDetails">
          <section className="Degree">
            <p>Degree / Class</p>
            <input
              placeholder="Enter Degree or Schooling"
              type="text"
              value={educationDetails[index].degree}
              onChange={(e) => handleInputChange(e, index, "degree")}
            />
          </section>
          <section className="college">
            <p>University/School</p>
            <input
              placeholder="Enter University"
              type="text"
              value={educationDetails[index].university}
              onChange={(e) => handleInputChange(e, index, "university")}
            />
          </section>
          <section className="passout">
            <p>Year Passout</p>
            <input
              placeholder="Enter The Year"
              type="text"
              value={educationDetails[index].year}
              onChange={(e) => handleInputChange(e, index, "year")}
            />
          </section>
        </div>
        {index > 0 ? 
          <img src={MinusIcon} className="removeEdu" onClick={() => handleRemoveEdu(index)}/> : ''}
      </>
    );
  };

  const handleAddMore = () => {
    setEducationDetails((prevDetails) => [
      ...prevDetails,
      {
        degree: "",
        university: "",
        year: "",
      },
    ]);
  };

  return (
    <>
      <div className="fillEduContainer">
        <h3 className="educationDetailHeading">Education Details</h3>
        <div className="edDetails">
          {educationDetails.map((detail, index) => renderDetailsUI(index))}
        </div>
      </div>
      <img src={AddMoreIcon} className="addMoreIcon" onClick={handleAddMore} />
    </>
  );
};

export default FillEducationDetails;
