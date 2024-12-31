import React from "react";
import { useNavigate } from "react-router-dom";
import elcImage from "../../../images/elc_image.png";
import "./pink.css";


const Pink: React.FC = () => {
  const navigate = useNavigate();

  const handleclub = () => {
    navigate("/club");
  };

  return (
    <div className="page-container">
      <div className="header">
        {/* <img
          src={require("../../images/vote.png")} alt="Logo"
          className="logo"
        /> */}
        <h1>Electoral Literacy Clubs</h1>
      </div>

      <main className="content">
        <section className="left-content">
          <strong><h2>What are ELCs</h2></strong>
          <p>
            An Electoral Literacy Club is a platform to engage school students
            through interesting activities and hands-on experience to sensitize
            them on their electoral rights and familiarize them with the
            electoral process of registration and voting. ELCs are also present
            in colleges and rural communities.
          </p>
          <p>
            At ELCs, learning meets fun. Activities and Games are designed to
            stimulate and motivate students, provoking them to think and ask
            questions. Through ELC, Election Commission of India aims at
            strengthening the culture of electoral participation among young and
            future voters.
          </p>

          <strong><h3>Who shall be the members of ELCs?</h3></strong>
          <ul>
            <li>Schools: Students from Class IX – XII; 14-17 year olds</li>
            <li>Colleges: 18 – 21 year olds</li>
            <li>
              Rural Communities (Chunav Pathshala): All members of the village
            </li>
          </ul>

          <strong><h3>What shall we do in ELCs</h3></strong>
          <p>
            In the ELCs, members will be part of interesting and
            thought-provoking, mostly classroom-based activities and games.
            There are around 25 such activities and 6 games, which have been
            carefully designed to impart specific learning, which will help them
            become an ‘Empowered (Prospective) Voter’.
          </p>
        </section>

        <aside className="sidebar">
          <button className="register-button" onClick={handleclub}>Register your School/College!</button>
          <p>
            <div className="want">
              Want an ELC to be set up in your school/college? Click the button
              above to send your request to your District Election Officer.
              <div className="image-section">
                <img src={elcImage} alt="ELC Illustration" className="illustration" />
              </div>
            </div>
          </p>
        </aside>
      </main>
    </div>
  );
};

export default Pink;
