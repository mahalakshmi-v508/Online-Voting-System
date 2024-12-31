import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import Leader3Image from "../../../images/leaders/leader.jpeg"; // Ensure correct image is used
import './leader.css';
// Define the type for the candidate object
interface Candidate {
  party: string;
  name: string;
  age: number;
}

const Leader: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false); 
  const navigate = useNavigate(); // Use navigate hook for page navigation

  // Define the candidate object with the correct types
  const candidate: Candidate = {
    party: "Tamilaga Vettri Kazhagam",
    name: "Vijay",
    age: 50,
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
    setShowPopup(false); // Close popup
    alert(`Thank you for voting for ${candidate.name}!`); 
    navigate("/about"); 
  };

  return (
    <div className="leader-container">
      <h2>CANDIDATE DETAILS</h2>
      <div className="leader1">
        <img src={Leader3Image} className="leaderimg" alt="vijay" />
      </div>
      <div className="bjp">
        <div className="candidate-details">
          <p><strong>Name:</strong> {candidate.name}</p>
          <p><strong>Party:</strong> {candidate.party}</p>
          <p><strong>Age:</strong> {candidate.age}</p>
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

export default Leader;
