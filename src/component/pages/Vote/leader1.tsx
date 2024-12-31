import React, { useState } from "react";
import Leader1bjp from "../../../images/leaders/Modi 1.jpg";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import './leader.css';

// Define the type for the candidate object
interface Candidate {
  party: string;
  name: string;
  age: string;
}

const Leader1: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false); // State to manage popup visibility
  const navigate = useNavigate(); // Use navigate hook for page navigation

  // Define the candidate object with the correct types
  const candidate1: Candidate = {
    party: "Bharatiya Janata Party",
    name: "Narendra Modi",
    age: "74",
  };

  const handleVote = () => {
    // Show popup when the button is clicked
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    // Hide popup
    setShowPopup(false);
  };

  const handlePopupVote = () => {
    alert(`Thank you for voting for ${candidate1.name}!`); // Show plain text alert
    setShowPopup(false); // Close popup
    navigate("/home"); // Navigate to the home page
  };

  return (
    <div className="leader-container">
      <h2>CANDIDATE DETAILS</h2>
      <div className="leader1">
        <img src={Leader1bjp} className="leaderimg" alt="leader1" />
      </div>
      <div className="bjp">
        <div className="candidate-details">
          <p><strong>Name:</strong> {candidate1.name}</p>
          <p><strong>Party:</strong> {candidate1.party}</p>
          <p><strong>Age:</strong> {candidate1.age}</p>
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
}

export default Leader1;
