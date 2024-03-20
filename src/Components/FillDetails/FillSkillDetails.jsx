import React from 'react'; 
import { useEffect, useState } from "react";
import AddMoreIcon from "../../assets/AddMore.svg";
import MinusIcon from "../../assets/minus.svg";
import "./FillSkillDetails.scss";

const FillSkillDetails = () => {
  const [skillData, setSkillData] = useState([
    {
      skillName: "",
      rate: 0,
    },
  ]);

  const handleInputChange = (e, index, field) => {
    const newSkillData = [...skillData];
    newSkillData[index][field] = e.target.value;
    // newSkillData[index] = {...newSkillData[index], [field]: e.target.value};
    setSkillData(newSkillData);
    console.log('handleinput ', skillData);
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkillData((prevSkill) => prevSkill.filter((skill) => skill !== skillToRemove));
    console.log("skillData after removing  => ", skillData);
  };
  
  const renderSkillUI = (skill, index) => {
    return (
      <>
        <section className="skill">
          <input
            placeholder="Enter Skill"
            type="text"
            value={skill.skillName}
            onChange={(e) => handleInputChange(e, index, 'skillName')} 
            />
          <input
            placeholder="Rate"
            type="number"
            min="1"
            max="5"
            value={skill.rate}
            onChange={(e) => handleInputChange(e, index, 'rate')}
            />
        </section>
        {index > 0 ? (
          <img
          src={MinusIcon}
          className="removeSkill"
          onClick={() => handleRemoveSkill(skill)}
          />
          ) : (
            ""
            )}
      </>
    );
  };
  
  const handleAddMore = () => {
    setSkillData((previousData) => [
      ...previousData,
      {
        skillName: "",
        rate: "",
      },
    ]);
  };

  useEffect(() => {
    console.log("skillData in the useEffect => ", skillData);
  }, [skillData]);
  console.log('amit', skillData);
  return (
    <>
      <div className="skillContainer">
        <h3 className="skillHeading">Skills</h3>
        <div className="skillDetails">
          {skillData.map((skill, index) => renderSkillUI(skill, index))}
        </div>
      </div>
      <img src={AddMoreIcon} className="addMoreSkill" onClick={handleAddMore} />
    </>
  );
};

export default FillSkillDetails;
