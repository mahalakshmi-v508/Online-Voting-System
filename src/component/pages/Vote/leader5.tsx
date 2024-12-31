import React, { useState } from "react";
import Leader5Image from "../../../images/leaders/EPS.jpg"; // Ensure correct image is used
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import './leader.css';

// Define the type for the candidate object
interface Candidate {
  party: string;
  name: string;
  age: number;
}

const Leader5: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false); // State to manage popup visibility
  const [voteConfirmed, setVoteConfirmed] = useState<boolean>(false); // State to manage vote confirmation
  const navigate = useNavigate(); // Use navigate hook for page navigation

  // Define the candidate object with the correct types
  const candidate5: Candidate = {
    party: "All India Anna Dravida Munnetra Kazhagam",
    name: "Edappadi K. Palaniswami",
    age: 70,
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
    alert(`Thank you for voting for ${candidate5.name}!`); // Show plain text alert
    setVoteConfirmed(true); // Confirm vote
    setShowPopup(false); // Close popup
    navigate("/home"); // Navigate to the home page
  };

  return (
    <div className="leader-container">
      <h2>CANDIDATE DETAILS</h2>
      <div className="leader1">
        <img src={Leader5Image} className="leaderimg" alt="Edappadi K. Palaniswami" />
      </div>
      <div className="bjp">
        <div className="candidate-details">
          <p><strong>Name:</strong> {candidate5.name}</p>
          <p><strong>Party:</strong> {candidate5.party}</p>
          <p><strong>Age:</strong> {candidate5.age}</p>
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

      {voteConfirmed && (
        <div className="vote-confirmation">
          <p>Thank you for voting for {candidate5.name}!</p>
        </div>
      )}
    </div>
  );
}

export default Leader5;
