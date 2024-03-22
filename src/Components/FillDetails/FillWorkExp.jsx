import { useState } from "react";
import AddMoreIcon from "../../assets/AddMore.svg";
import MinusIcon from "../../assets/minus.svg";
import "./FillWorkExp.scss";

const FillWorkExp = () => {
  const [textInput, setTextInput] = useState("");
  const [tags, setTags] = useState([]);
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

  const handleOnChange = (e) => {
    setTextInput(e.target.value);
  };

  const hitTheEnter = (e) => {
    if (e.code === "Enter") {
      console.log("Enter pressed", e);
      // setDisplayTag(true);
      console.log("tags inside Enter hit => ", tags);
      const trimmedInput = textInput.trim();
      if (trimmedInput.length > 0 && !tags.includes(trimmedInput)) {
        setTags((prevTags) => [...prevTags, trimmedInput]);
        setTextInput("");
      }
    }
  };

  const deleteTag = (index) => {
    setTags((prevtags) => prevtags.filter((tag, idx) => idx !== index));
  };

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
    setExpDetails((prevExp) => prevExp.filter((elem, idx) => idx !== index));
  };

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
            {/* <textarea
              rows="4"
              placeholder="About Your Work or Responsibilities !"
            ></textarea> */}
            <div className="expDiv">
              {tags.map((tag, index) => (
                <div className="tagDiv">
                  {tag}
                  <button onClick={() => deleteTag(index)}>x</button>
                </div>
              ))}
              <input
                className="inputExp"
                value={textInput}
                placeholder="Your Experiences !"
                onKeyPress={(e) => hitTheEnter(e)}
                onChange={handleOnChange}
              />
            </div>
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
          {index > 0 ? (
            <img
              src={MinusIcon}
              className="removeExp"
              onClick={() => handleRemoveExp(index)}
            />
          ) : (
            ""
          )}
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
