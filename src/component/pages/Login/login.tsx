import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginimg from "../../../images/loginimg.jpg";
import "./login.css";

interface FormData {
    voterid: string;
    password: string;
}

const Login: React.FC = () => {
    const navigate = useNavigate();

    const [voterid, setVoterId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<{ voterid?: string; password?: string }>({});
    const [isValid, setIsValid] = useState<boolean>(false);
    const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState<boolean>(false); // State for the popup

    useEffect(() => {
        const formData = sessionStorage.getItem("formData");
        if (!formData) {
            setShowPopup(true); // Show popup if not registered
        }
    }, []);

    const validate = () => {
        const newErrors: { voterid?: string; password?: string } = {};

        if (!voterid.trim()) {
            newErrors.voterid = "Voter ID is required.";
        }

        if (!password.trim() || password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        setErrors(newErrors);
        setIsValid(Object.keys(newErrors).length === 0);
    };

    useEffect(() => {
        if (hasSubmitted) {
            validate();
        }
    }, [voterid, password, hasSubmitted]);

    const handleSignIn = () => {
        setHasSubmitted(true);
        validate();

        if (isValid) {
            const formData: FormData | null = JSON.parse(sessionStorage.getItem("formData") || "null");
            if (formData && formData.voterid === voterid) {
                navigate("/profile", { state: { formData } });
            } else {
                alert("Invalid Voter ID or not registered. Please register first.");
                navigate("/register");
            }
        }
    };

    const handlePopupClose = () => {
        navigate("/register"); // Redirect to registration page
    };

    return (
        <div className="login">
            <div className="login-container">
                {showPopup && (
                    <div className="popup">
                        <div className="popup-content">
                            <h2>Registration Required</h2>
                            <p>Please complete the registration before logging in.</p>
                            <button onClick={handlePopupClose}>Go to Register</button>
                        </div>
                    </div>
                )}
                <div className="sign">SIGN IN</div>
                <div className="form-group">
                    <label className="formlabel">Voter ID:</label>
                    <input
                        className="forminput"
                        type="text"
                        placeholder="Enter Voter ID"
                        value={voterid}
                        onChange={(e) => setVoterId(e.target.value)}
                    />
                    {hasSubmitted && errors.voterid && (
                        <span className="error">{errors.voterid}</span>
                    )}
                </div>
                <div className="form-group">
                    <label className="formlabel">Password:</label>
                    <input
                        className="forminput"
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {hasSubmitted && errors.password && (
                        <span className="error">{errors.password}</span>
                    )}
                </div>
                <button className="loginbutton" onClick={handleSignIn}>
                    LogIn
                </button>
            </div>
            <img src={loginimg} alt="loginimg" className="loginimg" />
        </div>
    );
};

export default Login;
