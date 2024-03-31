import React from "react";
// import HomeIcon from "@mui/icons-material/Home";
// import CallIcon from "@mui/icons-material/Call";
// import EmailIcon from "@mui/icons-material/Email";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import profile from "../../assets/profilePhoto.jpeg";
// import { CompanyData } from "./CompanyData";
// import { SkillsData } from "./SkillsData";

import "./Preview.css";
// import RatingStar from "../RatingStar/RatingStar";
// import { AchieveData } from "./AchieveData";
import FillPersonalDetails from "../FillDetails/FillPersonalDetails";
import FillEducationDetails from "../FillDetails/FillEducationDetails";
import FillSkillDetails from "../FillDetails/FillSkillDetails";
import FillWorkExp from "../FillDetails/FillWorkExp";
import FillAchieveDetails from "../FillDetails/FillAchieveDetails";
import RightViewResume from "./RightViewResume";
// import TagFilled from "../FilledTags/TagFilled";

const Preview = () => {
  return (
    <div className="parent">
      <div className="dataForm">
        <FillPersonalDetails />
        <FillEducationDetails />
        <FillSkillDetails />
        <FillWorkExp />
        <FillAchieveDetails />
        {/* <TagFilled /> */}
      </div>
      <RightViewResume />
    </div>
  );
};

export default Preview;
