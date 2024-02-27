// @ts-ignore
import resumeImage from '../../assets/resume_image.png'; 
import './GetStartedForFree.css';

const GetStartedForFree = () => {
  return (
    <div className="container">
      <div className="content">
        <h3>Create a resume that stands out</h3>
        <h6>
          Create a Resume that perfectally describes your skills & match job
          profile
        </h6>
        <button className='getbtn'>Get Started for Free</button>
      </div>
      <img src={resumeImage} className="resumeImage" alt='resume' />
    </div>
  );
};

export default GetStartedForFree;
