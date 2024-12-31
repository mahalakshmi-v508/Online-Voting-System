import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./profile.css";

interface FormData {
    name: string;
    voterid: string;
    aadharnumber: string;
    age: number;
    phonenumber: string;
    profileImage?: string;
}

const Profile: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { formData }: { formData?: FormData } = location.state || {}; // Type for formData

    const [hasVoted, setHasVoted] = useState<boolean>(false);

    useEffect(() => {
        // Check if the voter has already voted
        const votedVoters: string[] = JSON.parse(localStorage.getItem("votedVoters") || "[]");
        if (formData?.voterid) {
            setHasVoted(votedVoters.includes(formData.voterid));
        }
    }, [formData?.voterid]);

    const handleVote = () => {
        if (hasVoted) {
            alert("You have already voted. Voting more than once is not allowed.");
        } else {
            // Navigate to vote page
            navigate("/vote", { state: { voterid: formData?.voterid } });
        }
    };

    if (!formData) {
        return (
            <div className="profile-container">
                <p>No profile data found.</p>
                <button onClick={() => navigate("/register")}>Go to Register</button>
            </div>
        );
    }

    return (
        <div>
            <div className="profile-container">
                {formData.profileImage && (
                    <div className="profile-image-container">
                        <img
                            src={formData.profileImage}
                            alt="Profile"
                            className="profile-image"
                        />
                    </div>
                )}
                <h2>User Profile</h2>
                <div className="profile-details">
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Voter ID:</strong> {formData.voterid}</p>
                    <p><strong>Aadhar Number:</strong> {formData.aadharnumber}</p>
                    <p><strong>Age:</strong> {formData.age}</p>
                    <p><strong>Phone Number:</strong> {formData.phonenumber}</p>
                </div>
                <button
                    onClick={handleVote}
                    disabled={hasVoted}
                    className="vote-button"
                >
                    {hasVoted ? "You have already voted" : "Click here to cast your vote"}
                </button>
            </div>
        </div>
    );
};

export default Profile;
