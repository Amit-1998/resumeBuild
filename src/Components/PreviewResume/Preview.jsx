import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import profile from "../../assets/profilePhoto.jpeg";

import "./Preview.css";

const Preview = () => {
  return (
    <div className="parent">
      {/* <div className="dataForm">Left</div> */}
      <div className="container">
        <div className="leftView">
          <div className="profileImg">
            {/* <img src={profile} alt="profie-image" /> */}
          </div>
          <div className="hisInfo">
            <div className="contacts">
              <section className="contact_heading">
                <p>CONTACTS</p>
                <hr />
              </section>
              <section className="contactDetails">
                 <section className="contacts address">
                    <HomeIcon />
                    New Delhi
                 </section>
                 <section className="contacts phone">
                    <CallIcon />
                    7865095643
                 </section>
                 <section className="contacts email">
                    <EmailIcon />
                    abcd@gmail.com
                 </section>
                 <section className="contacts linkedin">
                    <LinkedInIcon />
                    xyz/linkedin
                 </section>
              </section>

            </div>
            <div className="education"></div>
            <div className="skill"></div>
          </div>
        </div>
        <div className="rightView">
          <div className="aboutMe"></div>
          <div className="workExp"></div>
          <div className="achievements"></div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
