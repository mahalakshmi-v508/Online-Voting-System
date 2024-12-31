import React, { useState } from "react";
import Leader3Image from "../../../images/leaders/MKStalin.jpg"; // Ensure correct image is used
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import './leader.css';

// Define the type for the candidate object
interface Candidate {
  party: string;
  name: string;
  age: number;
}

const Leader3: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false); // State to manage popup visibility
  const [voteConfirmed, setVoteConfirmed] = useState<boolean>(false); // State to manage vote confirmation
  const navigate = useNavigate(); // Use navigate hook for page navigation

  // Define the candidate object with the correct types
  const candidate3: Candidate = {
    party: "Dravida Munnetra Kazhagam",
    name: "M. K. Stalin",
    age: 71,
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
    alert(`Thank you for voting for ${candidate3.name}!`); // Show plain text alert
    setVoteConfirmed(true); // Confirm vote
    setShowPopup(false); // Close popup
    navigate("/home"); // Navigate to the home page
  };

  return (
    <div className="leader-container">
      <h2>CANDIDATE DETAILS</h2>
      <div className="leader1">
        <img src={Leader3Image} className="leaderimg" alt="M. K. Stalin" />
      </div>
      <div className="bjp">
        <div className="candidate-details">
          <p><strong>Name:</strong> {candidate3.name}</p>
          <p><strong>Party:</strong> {candidate3.party}</p>
          <p><strong>Age:</strong> {candidate3.age}</p>
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
          <p>Thank you for voting for {candidate3.name}!</p>
        </div>
      )}
    </div>
  );
}

export default Leader3;
