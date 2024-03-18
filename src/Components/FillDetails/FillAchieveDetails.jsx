import { useState } from "react";
import "./FillAchieveDetails.scss";
import TagFilled from "../FilledTags/TagFilled";

const FillAchieveDetails = () => {
  const [textInput, setTextInput] = useState("");
  const [tags, setTags] = useState([]);
  const [displayTag, setDisplayTag] = useState(false);
  const [achieveDetails, setAchieveDetails] = useState([
    {
      achieve: "",
    },
  ]);

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

  const renderAchieveUI = (item, index) => {
    console.log("tags => ", tags);
    return (
        <div className="inputContainer">
          {tags.map((tag, index) => (
            <div className="tag">
              {tag}
              <button onClick={() => deleteTag(index)}>x</button>
            </div>
          ))}
          <input
            className="inputAchieve"
            value={textInput}
            placeholder="Your Achievements !"
            onKeyPress={(e) => hitTheEnter(e)}
            onChange={handleOnChange}
          />
        </div>
    );
  };

  const handleAddMore = () => {
    setAchieveDetails((previousData) => [
      ...previousData,
      {
        achieve: "",
      },
    ]);
  };

  return (
    <>
      <div className="achieveContainer">
        <h3 className="achievementHeading">Achievements</h3>
        <div className="achievementDetails">
          {achieveDetails.map((item, index) => renderAchieveUI(item, index)
          )}
        </div>
      </div>
    </>
  );
};

export default FillAchieveDetails;
