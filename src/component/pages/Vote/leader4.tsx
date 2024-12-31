import React, { useState } from "react";
import Leader4Image from "../../../images/leaders/leader4.jpeg"; // Ensure correct image is used
import { useNavigate } from "react-router-dom"; 
import './leader.css';

// Define the type for the candidate object
interface Candidate {
  party: string;
  name: string;
  age: number;
}

const Leader4: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false); // State to manage popup visibility
  const [voteConfirmed, setVoteConfirmed] = useState<boolean>(false); // State to manage vote confirmation
  const navigate = useNavigate(); // Use navigate hook for page navigation

  // Define the candidate object with the correct types
  const candidate4: Candidate = {
    party: "Kongunadu Makkal Desia Katchi",
    name: "E. R. Eswaran",
    age: 63,
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
    alert(`Thank you for voting for ${candidate4.name}!`); // Show plain text alert
    setVoteConfirmed(true); // Confirm vote
    setShowPopup(false); // Close popup
    navigate("/home"); // Navigate to the home page
  };

  return (
    <div className="leader-container">
      <h2>CANDIDATE DETAILS</h2>
      <div className="leader1">
        <img src={Leader4Image} className="leaderimg" alt="E. R. Eswaran" />
      </div>
      <div className="bjp">
        <div className="candidate-details">
          <p><strong>Name:</strong> {candidate4.name}</p>
          <p><strong>Party:</strong> {candidate4.party}</p>
          <p><strong>Age:</strong> {candidate4.age}</p>
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
          <p>Thank you for voting for {candidate4.name}!</p>
        </div>
      )}
    </div>
  );
}

export default Leader4;   
