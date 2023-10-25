import React from "react";
import ImageCarousel from "../components/Carousel";
import VideoPlayer from "../components/VideoPlayer";
import styles from "./Landing.module.css";

const Landing = () => {

    return (
        <div>
            <div className={styles.videoDiv}>
                <VideoPlayer    
                    videoSrc="/video/My project.MP4"
                    width={800}
                    height={450}
                    />
            </div>
            este es el carrousel nene
            <ImageCarousel />
            hola nene
        </div>
    )
}

export default Landing;

