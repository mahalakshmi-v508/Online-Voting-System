import React, { useState } from "react";
import './red.css';
import voteimag1 from "../../../images/New folder/vote1.jpeg";
import voteimag2 from "../../../images/New folder/vote2.jpg";
import voteimag3 from "../../../images/New folder/vote3.jpg";
import voteimag4 from "../../../images/New folder/vote4.jpg";
import voteimag5 from "../../../images/New folder/vote5.jpg";
import voteimag6 from "../../../images/New folder/vote6.jpg";
import voteimag7 from "../../../images/New folder/vote7.jpg";
import voteimag8 from "../../../images/New folder/vote8.jpg";
import voteimag9 from "../../../images/New folder/vote9.jpg";

const Redd: React.FC = () => {
    const [images, setImages] = useState<string[]>([
        voteimag1, voteimag2, voteimag3, voteimag4, voteimag5,
        voteimag6, voteimag7, voteimag8, voteimag9
    ]);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const newImages = Array.from(files).map(file => URL.createObjectURL(file));
            setImages(prevImages => [...prevImages, ...newImages]);
        }
    };

    return (
        <>
            <div className="header-container">
                <h1 style={{ textAlign: "center", fontWeight: "bold", margin: "0" }}>VOTER'S GALLERY</h1>
                <button className="add-button">
                    <label htmlFor="file-upload" style={{ cursor: "pointer" }}>Add</label>
                </button>
                <input
                    type="file"
                    id="file-upload"
                    style={{ display: "none" }}
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                />
            </div>
            <div className="imagescontainer">
                {images.map((img, index) => (
                    <img key={index} src={img} className="awerness-img" alt={`awerness${index + 1}`} />
                ))}
            </div>
        </>
    );
}

export default Redd;
