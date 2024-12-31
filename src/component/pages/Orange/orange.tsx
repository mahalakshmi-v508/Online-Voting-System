import React from "react";
import './orange.css';
import awernessImage1 from "../../../images/New folder/awerness1.jpeg";
import awernessImage2 from "../../../images/New folder/aweness2.jpg";
import awernessImage3 from "../../../images/New folder/awerness21.jpg";
import awernessImage4 from "../../../images/New folder/awerness31.jpg";
import awernessImage5 from "../../../images/New folder/awerness23.jpg";
import awernessImage6 from "../../../images/New folder/awerness24.jpg";
import awernessImage7 from "../../../images/New folder/awerness25.jpg";
import awernessImage8 from "../../../images/New folder/awerness26.jpg";
import awernessImage9 from "../../../images/New folder/awerness27.jpg";
import awernessImage10 from "../../../images/New folder/aweness 30.jpg";
import eventsImage1 from "../../../images/New folder/image4.jpg";
import eventsImage2 from "../../../images/New folder/image6.jpg";
import eventsImage3 from "../../../images/New folder/image7.jpg";
import eventsImage4 from "../../../images/New folder/awerness4.jpg";
import eventsImage5 from "../../../images/New folder/awerness5.jpg";
import eventsImage6 from "../../../images/New folder/awerness6.jpg";
import eventsImage7 from "../../../images/New folder/awerness7.jpg";
import eventsImage8 from "../../../images/New folder/awerness8.jpg";
import eventsImage9 from "../../../images/New folder/awerness10.jpg";
import eventsImage10 from "../../../images/New folder/awerness11.jpg";
import eventsImage11 from "../../../images/New folder/awerness3.jpg";

const Orange: React.FC = () => {
    return (
        <>
            <h1 style={{ textAlign: "center", fontWeight: "bold" }}>AWARENESS</h1>
            <div className="imagescontainer">
                <img src={awernessImage1} className="awerness-img" alt="awerness1" />
                <img src={awernessImage2} className="awerness-img" alt="awerness2" />
                <img src={awernessImage3} className="awerness-img" alt="awerness3" />
                <img src={awernessImage4} className="awerness-img" alt="awerness4" />
                <img src={awernessImage5} className="awerness-img" alt="awerness5" />
                <img src={awernessImage6} className="awerness-img" alt="awerness6" />
                <img src={awernessImage7} className="awerness-img" alt="awerness7" />
                <img src={awernessImage8} className="awerness-img" alt="awerness8" />
                <img src={awernessImage9} className="awerness-img" alt="awerness9" />
                <img src={awernessImage10} className="awerness-img" alt="awerness10" />
            </div>

            <h1 style={{ textAlign: "center", fontWeight: "bold" }}>EVENTS</h1>
            <div className="imagescontainer">
                <img src={eventsImage1} className="awerness-img" alt="events1" />
                <img src={eventsImage2} className="awerness-img" alt="events2" />
                <img src={eventsImage3} className="awerness-img" alt="events3" />
                <img src={eventsImage4} className="awerness-img" alt="events4" />
                <img src={eventsImage5} className="awerness-img" alt="events5" />
                <img src={eventsImage6} className="awerness-img" alt="events6" />
                <img src={eventsImage7} className="awerness-img" alt="events7" />
                <img src={eventsImage8} className="awerness-img" alt="events8" />
                <img src={eventsImage9} className="awerness-img" alt="events9" />
                <img src={eventsImage10} className="awerness-img" alt="events10" />
                <img src={eventsImage11} className="awerness-img" alt="events11" />
            </div>
        </>
    );
}

export default Orange;
