import { useState } from "react";
import AddMoreIcon from "../../assets/AddMore.svg";
import MinusIcon from "../../assets/minus.svg";
import "./FillWorkExp.scss";

const FillWorkExp = () => {
  const [expDetails, setExpDetails] = useState([
    {
      company: "",
      startDate: "",
      endDate: "",
      designation: "",
      workDone: "",
      currWorking: false,
    },
  ]);
  // const [currWorking, setCurrWorking] = useState(false);

  const handleInputChange = (e, index, field) => {
    const newData = [...expDetails];
    newData[index][field] =
      field === "currWorking" ? e.target.checked : e.target.value;
    setExpDetails(newData);
  };

  const handleAddMore = () => {
    setExpDetails((previousData) => [
      ...previousData,
      {
        company: "",
        startDate: "",
        endDate: "",
        designation: "",
        workDone: "",
        currWorking: false,
      },
    ]);
  };

  const handleRemoveExp = (index) => {
      setExpDetails((prevExp) => prevExp.filter((elem,idx) => idx !== index));
  }

  const renderExperienceUI = (exp, index) => {
    return (
      <>
        {/* {index > 0 ? ( */}
        <>
          {/* {index > 0 ? <><hr /><img className="removeExp" src={MinusIcon} onClick={() => handleRemoveExp(index)} /></> : ""} */}
          <section className="exp">
            <input
              placeholder="Enter Company Name"
              type="text"
              value={exp.company}
              onChange={(e) => handleInputChange(e, index, "company")}
            />
            <input
              placeholder="Designation"
              type="text"
              value={exp.designation}
              onChange={(e) => handleInputChange(e, index, "designation")}
            />
            <textarea
              rows="4"
              placeholder="About Your Work or Responsibilities !"
            ></textarea>
            <section>
              <p>Start Date</p>
              <input
                type="date"
                value={exp.startDate}
                onChange={(e) => handleInputChange(e, index, "startDate")}
              />
            </section>

            <section>
              <input
                type="checkbox"
                style={{ cursor: "pointer" }}
                value={exp.currWorking}
                onChange={(e) => handleInputChange(e, index, "currWorking")}
              />
              <span style={{ marginLeft: "5px" }}>Currently Working</span>
            </section>

            {!exp.currWorking && (
              <section>
                <p>End Date</p>
                <input
                  type="date"
                  value={exp.endDate}
                  onChange={(e) => handleInputChange(e, index, "endDate")}
                />
              </section>
            )}
          </section>
          {index > 0 ? 
          <img src={MinusIcon} className="removeExp" onClick={() => handleRemoveExp(index)}/> : ''}
        </>
      </>
    );
  };

  return (
    <>
      <div className="workExpContainer">
        <h3 className="expHeading">Work Experience</h3>
        <div className="experienceDetails">
          {/* <section className="orgName"></section> */}
          {expDetails.map((exp, index) => renderExperienceUI(exp, index))}
        </div>
      </div>
      <img src={AddMoreIcon} className="addMoreExp" onClick={handleAddMore} />
    </>
  );
};

export default FillWorkExp;
