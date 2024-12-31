import React, { useState } from "react";
import Leader2con from "../../../images/leaders/ragulgandhi.jpeg";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import './leader.css';

// Define the type for the candidate object
interface Candidate {
  party: string;
  name: string;
  age: number;
}

const Leader2: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false); // State to manage popup visibility
  const navigate = useNavigate(); // Use navigate hook for page navigation

  // Define the candidate object with the correct types
  const candidate2: Candidate = {
    party: "Indian National Congress",
    name: "Rahul Gandhi",
    age: 54, // Example age
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
    alert(`Thank you for voting for ${candidate2.name}!`); // Show plain text alert
    setShowPopup(false); // Close popup
    navigate("/home"); // Navigate to the home page
  };

  return (
    <div className="leader-container">
      <h2>CANDIDATE DETAILS</h2>
      <div className="leader1">
        <img src={Leader2con} className="leaderimg" alt="Rahul Gandhi" />
      </div>
      <div className="bjp">
        <div className="candidate-details">
          <p><strong>Name:</strong> {candidate2.name}</p>
          <p><strong>Party:</strong> {candidate2.party}</p>
          <p><strong>Age:</strong> {candidate2.age}</p>
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

export default Leader2;
