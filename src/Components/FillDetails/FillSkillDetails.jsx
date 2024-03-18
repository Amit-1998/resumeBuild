import { useEffect, useState } from "react";
import AddMoreIcon from "../../assets/AddMore.svg";
import "./FillSkillDetails.scss";

const FillSkillDetails = () => {
  const [skillData, setSkillData] = useState([
    {
      skillName: "",
      rate: 0,
    },
  ]);

  const handleInputChange  = (e, index, field) => {
    const newSkillData = [...skillData]; 
    newSkillData[index][field] = e.target.value;
    setSkillData(newSkillData);
  }

  const renderSkillUI = (index) => {
    return (
      <section className="skill">
        <input placeholder="Enter Skill" type="text" onChange={(e)  => handleInputChange(e, index, 'skillName')} />
        <input placeholder="Rate" type="number" min="1" max="5" onChange={(e)  => handleInputChange(e, index, 'rate')} />
      </section>
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
      const res = fetch('https://api.npoint.io/4829d4ab0e96bfab50e7');
      console.log('res ka data', res.data);
  },[]);

  return (
    <>
      <div className="skillContainer">
        <h3 className="skillHeading">Skills</h3>
        <div className="skillDetails">
          {/* <section className="skill">
            <input placeholder="Enter Skill" type="text" />
            <input placeholder="Rate" type="number" min="1" max="5" />
          </section> */}
          {skillData.map((skill, index) => renderSkillUI(index))}
        </div>
      </div>
      <img src={AddMoreIcon} className="addMoreSkill" onClick={handleAddMore} />
    </>
  );
};

export default FillSkillDetails;
