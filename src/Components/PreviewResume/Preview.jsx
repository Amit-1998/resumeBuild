import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profile from "../../assets/profilePhoto.jpeg";
import { CompanyData } from "./CompanyData";
import { SkillsData } from "./SkillsData";

import "./Preview.css";
import RatingStar from "../RatingStar/RatingStar";
import { AchieveData } from "./AchieveData";
import FillPersonalDetails from "../FillDetails/FillPersonalDetails";
import FillEducationDetails from "../FillDetails/FillEducationDetails";
import FillSkillDetails from "../FillDetails/FillSkillDetails";
import FillWorkExp from "../FillDetails/FillWorkExp";
import FillAchieveDetails from "../FillDetails/FillAchieveDetails";
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
      <div className="container">
        <div className="leftView">
          {/* <div className="profileImg"> */}
          <img className="profile" src={profile} alt="profie-image" />
          {/* </div> */}
          <div className="hisInfo">
            <div className="contacts">
              <section className="contact_heading">
                <p>CONTACTS</p>
                <hr style={{ border: "1px solid #B5C0D0", marginTop: "8px" }} />
              </section>
              <section className="contactDetails">
                <section className="contactDet address">
                  <HomeIcon />
                  New Delhi
                </section>
                <section className="contactDet phone">
                  <CallIcon />
                  7865095643
                </section>
                <section className="contactDet email">
                  <EmailIcon />
                  abcd@gmail.com
                </section>
                <section className="contactDet linkedin">
                  <LinkedInIcon />
                  xyz/linkedin
                </section>
              </section>
            </div>
            <div className="education">
              <section className="education_Heading">
                <p>Education</p>
                <hr style={{ border: "1px solid #B5C0D0", marginTop: "8px" }} />
              </section>
              <section className="educationDetails">
                <p className="degree">Bachelors Of Engineering</p>
                <p className="college">
                  Netaji Subhas University Of Technology
                </p>
                <p className="duration">2020-2024</p>
              </section>
            </div>
            <div className="skills">
              <section className="skill_heading">
                <p>Skills</p>
                <hr style={{ border: "1px solid #B5C0D0", marginTop: "8px" }} />
              </section>
              <section className="professional">
                {SkillsData.map((skill, idx) => (
                  <div className="aboutSkill">
                    <span>{skill.skillName}</span>
                    <RatingStar
                      className={"rating"}
                      selectedStars={skill.rate}
                    />
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
        <div className="rightView">
          <div className="aboutMe">
            <h1>Ramesh Kumar</h1>
            <span>Designation</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="workExp">
            <section className="workExpHeading">
              <p>WORK EXPERIENCE</p>
              <hr style={{ border: "1px solid #B5C0D0", marginTop: "8px" }} />
            </section>
            <section className="Company">
              {CompanyData.map((data, idx) => (
                <section className="compDetails">
                  <section className="nameDuration">
                    <span>Soft Tech Inc</span>
                    <span>Aug2022 to Sept2023</span>
                  </section>
                  <p>FrontEnd Developer</p>
                  {data.working.map((work, index) => (
                    <li>{work}</li>
                  ))}
                </section>
              ))}
            </section>
          </div>
          <div className="achievements">
            <section className="achieveHeading">
              <p>ACHIEVEMENTS</p>
              <hr style={{ border: "1px solid #B5C0D0", marginTop: "8px" }} />
            </section>
            {AchieveData.map((item, idx) => (
              <li>item</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
