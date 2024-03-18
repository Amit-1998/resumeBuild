import "./FillPersonalDetails.scss";

const FillPersonalDetails = () => {
  return (
    <div className="fillContainer">
      <h3 className="personalDetailHeading">Personal Details</h3>
      <div className="details">
        <section className="nameInput">
          <p>Full Name</p>
          <input placeholder="Enter Full Name" type="text" />
        </section>
        <section className="designation">
          <p>Profile</p>
          <input placeholder="Enter Your Profile" type="text" />
        </section>
        <section className="objective">
          <p>Career Objective</p>
          <input placeholder="Enter your Objective" type="text" />
        </section>
        <section className="city">
          <p>City</p>
          <input placeholder="Enter Your City" type="text" />
        </section>
        <section className="phone">
          <p>Contact</p>
          <input placeholder="Enter Your Contact Number" type="tel" />
        </section>
        <section className="emailInput">
          <p>Email</p>
          <input placeholder="Enter Email" type="email" />
        </section>
        <section className="linkedIn">
          <p>Linkedin</p>
          <input placeholder="Enter Linkedin Url" type="url" />
        </section>
      </div>
    </div>
  );
};

export default FillPersonalDetails;
