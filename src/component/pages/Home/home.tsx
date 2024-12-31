// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import "./home.css";

// // Importing the images from your local folder
// import slide1 from "../../../images/slide1.jpg";
// import slide2 from "../../../images/slide2.jpg";
// import slide3 from "../../../images/slide3.jpg";
// import additionalImg from "../../../images/3p0aec23.png"; // New image import
// import voteele from "../../../images/voteawerness.jpeg";
//  import awernesspic from "../../../images/vaf.png";

// // Type definition for the navigation path
// type NavigationPath = string;

// const Home: React.FC = () => {
//   const images: string[] = [slide1, slide2, slide3];
//   const [currentIndex, setCurrentIndex] = useState<number>(0); // State to manage current image index

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // 3 seconds for the next image

//     return () => clearInterval(interval); // Cleanup the interval when component unmounts
//   }, [images.length]);

//   const navigate = useNavigate();

//   // Typing the function argument as a string for path
//   const handleNavigation = (path: NavigationPath) => {
//     navigate(path);
//   };

//   return (
//     <>
//       <div className="slider-container">
//         <img src={images[currentIndex]} alt="Slider" className="slider-image" />
//       </div>

//       <div className="votepara">
//         <img src={voteele} alt="votimage" className="voteimg" />
//         <div className="awernesscontent">
//           <p>
//             <div className="headingawer">
//               <h2>
//                 <strong>VOTER AWARENESS FORUMS</strong>
//               </h2>
//             </div>
//             <strong>
//               <span style={{ margin: "5%" }}>
//                 Voter Awareness Forums In an endeavour to extend electoral literacy</span> to
              
//               adult populations in government and non-government offices, private institutions and
//               organisations, a special category of ELCs known as Voter Awareness Forums (VAFs) are
//               being established.
//             </strong>
//           </p>
//         </div>
//       </div>
      // <div className="awerness">
      //   <p className="paracontent">
      //     <div className="head">
      //       <strong>
      //         <span style={{ color: "blue" }}>What are VAFs?</span>
      //       </strong>
      //       <br />
      //     </div>
//           <h5>
//             <strong>
        
//                 Voter Awareness Forums (VAFs) are informal forums for generating discussions and
//               awareness around the electoral process, on the how, what and where of registration &
//               voting, through the medium of real-time activities. Through VAFs in Government
//               Departments, Government and Non-Government Organizations as well as in Corporates; the
//               Election Commission of India aims to spread voter awareness and facilitate voter
//               education.
//             </strong>
//           </h5>
//         </p>

//         <img src={awernesspic} className="awernesspic" />
//       </div>
//       <div className="awern">
//         <p>
//           <strong>
//             <span style={{ color: "black" }}>Who shall be the members of VAFs?</span>
//           </strong>
//           <br />
//           <h5>
//             <strong>
//                 The membership of VAFs is voluntary in nature and will be open to all employees of
//                 the concerned office.
//             </strong>
//           </h5>
//         </p>
//         <p>
//           <strong>
//             <span style={{ color: "black" }}>What shall we do in Voter Awareness Forums?</span>
//             <br />
//           </strong>
//           <h5>
//             <strong>
              
//                 In the VAFs, through a calendar of simple and engaging activities, members will gain
//                 awareness on the electoral process and transform into
            
//               ‘Empowered Voters’ of the nation.
//             </strong>
//           </h5>
//         </p>
//       </div>

//       <div className="details">
//         <div className="image-container">
//           <img src={additionalImg} alt="Additional" className="additional-image" />
//         </div>
//         {/* Right Side Boxes */}
//         <div className="box-container">
//           <div className="box pink-box" onClick={() => handleNavigation("/pink")}>
//             <strong> E L Clubs</strong>
//           </div>
//           <div className="box orange-box" onClick={() => handleNavigation("/orange")}>
//             <strong>Awerness Events</strong>
//           </div>
//           <div className="box red-box" onClick={() => handleNavigation("/red")}>
//             VOTER'S Gallery
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

// Importing the images from your local folder
import slide1 from "../../../images/slide1.jpg";
import slide2 from "../../../images/slide2.jpg";
import slide3 from "../../../images/slide3.jpg";
import ict from "../../../images/ict.png";
import additionalImg from "../../../images/3p0aec23.png";
import voteele from "../../../images/voteawerness.jpeg";
import awernesspic from "../../../images/vaf.png";
import img1 from "../../../images/political.png";
import img2 from "../../../images/about.jpeg";
import img3 from "../../../images/electrors.png";
import img4 from "../../../images/management.png";
import img5 from "../../../images/education.png";

const Home: React.FC = () => {
  const images = [slide1, slide2, slide3];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const navigate = useNavigate();

  // Automatically cycle through carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNavigation = (path: string): void => {
    navigate(path);
  };

  return (
    <>
      {/* Image Slider */}
      <div className="slider-container">
        <img src={images[currentIndex]} alt="Slider" className="slider-image" />
      </div>

      {/* Circular Images Section */}
      <div className="circle-container">
        <div className="circle" onClick={() => handleNavigation("/electors")}>
          <img src={img1} alt="Electors" className="circle-image" />
          <p style={{marginLeft:'20px'}}>Electors</p>
        </div>
        <div className="circle" onClick={() => handleNavigation("/candidates")}>
          <img src={img2} alt="Candidates" className="circle-images" />
          <p>Political Parties/Candidates</p>
        </div>
        <div className="circle" onClick={() => handleNavigation("/management")}>
          <img src={img3} alt="Management" className="circle-image" />
          <p>Election Management</p>
        </div>
        <div className="circle" onClick={() => handleNavigation("/media")}>
          <img src={img4} alt="Media" className="circle-image" />
          <p>Media & Publications</p>
        </div>
        <div className="circle" onClick={() => handleNavigation("/education")}>
          <img src={img5} alt="Education" className="circle-image" />
          <p>Voter Education</p>
        </div>
        <div className="circle" onClick={() => handleNavigation("/ict")}>
          <img src={ict} alt="ICT Apps" className="circle-image" />
          <p>ICT Apps</p>
        </div>
      </div>

      {/* Voter Awareness Section */}
      <div className="votepara">
        <img src={voteele} alt="Voter Awareness" className="voteimg" />
        <div className="awernesscontent">
          <div className="headingawer">
            <h2><strong>VOTER AWARENESS FORUMS</strong></h2>
          </div>
          <p>
            <strong>
              Voter Awareness Forums aim to extend electoral literacy to adult populations in government and non-government offices, private institutions, and organizations. These forums generate discussions and awareness about the electoral process through real-time activities, helping participants transform into empowered voters.
            </strong>
          </p>
        </div>
      </div>

      <div className="awerness">
        <p className="paracontent">
          <div className="head">
            <strong>
              <span style={{ color: "blue" }}>What are VAFs?</span>
            </strong>
            <br />
          </div>
  
          <strong>
            Voter Awareness Forums (VAFs) are informal groups that discuss and promote awareness of the electoral process, including how, what, and where of registration and voting. Through VAFs in government and private organizations, the Election Commission of India spreads voter awareness and facilitates voter education.
          </strong>
        </p>
        <img src={awernesspic} alt="Awareness" className="awernesspic" />
      </div>

      <div className="awern">
        <p>
          <strong><span style={{ color: "black" }}>Who can join VAFs?</span></strong>
          <br />
          <strong>The membership is voluntary and open to all employees of the concerned office.</strong>
        </p>
        <p>
          <strong><span style={{ color: "black" }}>What activities are done in VAFs?</span></strong>
          <br />
          <strong>Through simple and engaging activities, members gain awareness of the electoral process and transform into empowered voters.</strong>
        </p>
      </div>

      {/* Additional Section */}
      <div className="details">
        <div className="image-container">
          <img src={additionalImg} alt="Additional" className="additional-image" />
        </div>
        <div className="box-container">
          <div className="box pink-box" onClick={() => handleNavigation("/pink")}>
            <strong>EL Clubs</strong>
          </div>
          <div className="box orange-box" onClick={() => handleNavigation("/orange")}>
            <strong>Awareness Events</strong>
          </div>
          <div className="box red-box" onClick={() => handleNavigation("/red")}>
            VOTER'S Gallery
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
