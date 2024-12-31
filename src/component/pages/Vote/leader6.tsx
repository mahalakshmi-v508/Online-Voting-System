import React, { useState } from "react";
import Leader3Image from "../../../images/leaders/leader6.jpeg"; // Ensure correct image is used
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import './leader.css';

// Define the type for the candidate object
interface Candidate {
  party: string;
  name: string;
  age: number;
}

const Leader6: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false); // State to manage popup visibility
  const navigate = useNavigate(); // Use navigate hook for page navigation

  // Define the candidate object with the correct types
  const candidate6: Candidate = {
    party: "Desiya Murpokku Dravida Kazhagam",
    name: "Premallatha Vijayakant",
    age: 55,
  };

  const handleVote = () => {
    setShowPopup(true); // Show popup when the button is clicked
  };

  const handlePopupClose = () => {
    setShowPopup(false); // Hide popup
  };

  const handlePopupVote = () => {
    setShowPopup(false); // Close the popup first
    alert(`Thank you for voting for ${candidate6.name}!`); // Show the alert after closing the popup
    navigate("/home"); // Navigate to the home page
  };

  return (
    <div className="leader-container">
      <h2>CANDIDATE DETAILS</h2>
      <div className="leader-image">
        <img src={Leader3Image} className="leaderimg" alt="Premallatha Vijayakant" />
      </div>
      <div className="candidate-info">
        <div className="candidate-details">
          <p><strong>Name:</strong> {candidate6.name}</p>
          <p><strong>Party:</strong> {candidate6.party}</p>
          <p><strong>Age:</strong> {candidate6.age}</p>
        </div>
        <button className="buttonleader" onClick={handleVote}>VOTE</button>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>ARE YOU SURE?</h2>
            <button className="popup-button" onClick={handlePopupVote}>OK</button>
            <button className="popup-button cancel" onClick={handlePopupClose}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leader6;
