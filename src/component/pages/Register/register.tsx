import React, { useState } from "react";
import './register.css';
// import RegisterImage from '../../images/Friends.PNG';
 import RegisterImage from '../../../images/header/Friends.png';

import { useNavigate } from "react-router-dom";

// Define the types for the form data
interface FormData {
    name: string;
    voterid: string;
    aadharnumber: string;
    age: string;
    phonenumber: string;
    profileImage: string | null;
}

// Define the types for the error messages
interface Errors {
    name?: string;
    voterid?: string;
    aadharnumber?: string;
    age?: string;
    phonenumber?: string;
    profileImage?: string;
}

const Register: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        voterid: '',
        aadharnumber: '',
        age: '',
        phonenumber: '',
        profileImage: null, // Store the image as a base64 string
    });

    const [errors, setErrors] = useState<Errors>({});
    const navigate = useNavigate();

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;

        if (name === "profileImage" && files && files.length > 0) {
            const file = files[0];
            const base64 = await convertToBase64(file);

            setFormData({
                ...formData,
                profileImage: base64, // Update the profileImage with base64 string
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    };

    const validateForm = (data: FormData): Errors => {
        const errors: Errors = {};

        if (!data.name.trim()) {
            errors.name = 'Name is required';
        } else if (data.name.length < 4) {
            errors.name = 'Name must be at least 4 characters long';
        }

        if (!data.voterid.trim()) {
            errors.voterid = 'Voter ID is required';
        } else if (!/^[A-Za-z0-9]+$/.test(data.voterid)) {
            errors.voterid = 'Voter ID must be alphanumeric';
        }

        if (!data.aadharnumber.trim()) {
            errors.aadharnumber = 'Aadhar number is required';
        } else if (!/^\d{12}$/.test(data.aadharnumber)) {
            errors.aadharnumber = 'Aadhar number must contain exactly 12 digits';
        }

        if (!data.age.trim()) {
            errors.age = 'Age is required';
        } else if (parseInt(data.age, 10) < 18) {
            errors.age = 'You must be at least 18 years old';
        }

        if (!data.phonenumber.trim()) {
            errors.phonenumber = 'Phone number is required';
        } else if (!/^\d{10}$/.test(data.phonenumber)) {
            errors.phonenumber = 'Phone number must contain exactly 10 digits';
        }

        if (!data.profileImage) {
            errors.profileImage = 'Profile image is required';
        }

        return errors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted successfully:", formData);

            alert("Registration successful!");
            sessionStorage.setItem("isRegistered", "true");
            sessionStorage.setItem("formData", JSON.stringify(formData));
            navigate("/login");
        } else {
            console.log("Validation errors:", newErrors);
        }
    };

    return (
        <>
            <div id="formbody">
                <div className="image">
                    <img src={RegisterImage} className="registerimg" alt="Register" />
                </div>
                <div className="formform">
                    <form className="form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            className="reg"
                            id="name"
                            name="name"
                            placeholder="Enter your first name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                        <br />

                        <label htmlFor="voterid">Voter ID:</label>
                        <input
                            type="text"
                            className="reg"
                            id="voterid"
                            name="voterid"
                            placeholder="Enter your voter ID"
                            value={formData.voterid}
                            onChange={handleChange}
                            required
                        />
                        {errors.voterid && <p className="error">{errors.voterid}</p>}
                        <br />

                        <label htmlFor="aadharnumber">Aadhar Card Number:</label>
                        <input
                            type="number"
                            className="reg"
                            id="aadharnumber"
                            name="aadharnumber"
                            placeholder="Enter your Aadhar number"
                            value={formData.aadharnumber}
                            onChange={handleChange}
                            required
                        />
                        {errors.aadharnumber && <p className="error">{errors.aadharnumber}</p>}
                        <br />

                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            className="reg"
                            id="age"
                            name="age"
                            placeholder="Enter your age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                        {errors.age && <p className="error">{errors.age}</p>}
                        <br />

                        <label htmlFor="phonenumber">Phone Number:</label>
                        <input
                            type="number"
                            className="reg"
                            id="phonenumber"
                            name="phonenumber"
                            placeholder="Enter your phone number"
                            value={formData.phonenumber}
                            onChange={handleChange}
                            required
                        />
                        {errors.phonenumber && <p className="error">{errors.phonenumber}</p>}
                        <br />

                        <label htmlFor="profileImage">Profile Image:</label>
                        <input
                            type="file"
                            className="reg"
                            id="profileImage"
                            name="profileImage"
                            accept="image/*"
                            onChange={handleChange}
                            required
                        />
                        {errors.profileImage && <p className="error">{errors.profileImage}</p>}
                        <br />

                        {formData.profileImage && (
                            <div className="image-preview">
                                <p>Profile Image Preview:</p>
                                <img
                                    src={formData.profileImage}
                                    alt="Profile Preview"
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        borderRadius: "50%",
                                        border: "1px solid #ccc",
                                    }}
                                />
                            </div>
                        )}

                        <input type="submit" className="regbutton" value="Register" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
