import React, { useState, useEffect } from "react";
import "./about.css";

// Importing the images from your local folder
import slide1 from "../../../images/slide1.jpg";
import slide2 from "../../../images/slide2.jpg";
import slide3 from "../../../images/slide3.jpg";
import aboutus from "../../../images/about us2.png";

const About: React.FC = () => {
  const images: string[] = [slide1, slide2, slide3];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() =>{
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds for the next image

    return () => clearInterval(interval); // Cleanup the interval when component unmounts
  }, [images.length]);

  return (
    <>
      <div className="slider-container">
        <img src={images[currentIndex]} alt="Slider" className="slider-image" />
      </div>
      <div className="about">
        <p className="aboutpara">
          <div className="abouthead">
            <strong>About Us</strong>
          </div>

          <h4>
            <span style={{ margin: "5%" }}>
              ‘Greater Participation for a Stronger Democracy’
              <span style={{ color: "blue" }}>
                Systematic Voters’ Education and Electoral
              </span>{" "}
              Participation program, better known as SVEEP, is the flagship
              program of the Election Commission of India for voter education,
              spreading voter awareness, and promoting voter literacy in India.
              Since 2009, we have been working towards preparing India’s electors
              and equipping them with basic knowledge related to the electoral
              process.
              <br />
              <br />
              SVEEP’s primary goal is to build a truly participative democracy in
              India by encouraging all eligible citizens to vote and make an
              informed decision during the elections. The programme is based on
              multiple general as well as targeted interventions which are designed
              according to the socio-economic, cultural and demographic profile of
              the state as well as the history of electoral participation in
              previous rounds of elections and learning thereof.
              <br />
              <br />
              <br />
              We are always looking forward to achieving the aim of building a
              stronger democracy through greater synergy with Civil Society
              Organisations, Media and Corporate Houses and even greater queries,
              suggestions, and participation from individuals.
            </span>
          </h4>
        </p>
        <img src={aboutus} alt="aboutimg" className="aboutimg" />
      </div>
      <div className="addresstag">
        <address>
          Address: Election Commission of India,
          <br />
          Website: <a href="https://eci.gov.in" target="_blank" rel="noopener noreferrer">https://eci.gov.in</a>,
          <br />
          Nirvachan Sadan,
          <br />
          Ashoka Road,
          <br />
          New Delhi- 110001,
          <br />
          Phone: 011-23052072, 23717391-98.
        </address>
      </div>
    </>
  );
};

export default About;
