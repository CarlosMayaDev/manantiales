import React from "react";

const VideoPlayer = (props) => {
  return (
    <div>
      <video width={props.width} height={props.height} controls>
        <source src={props.videoSrc} type="video/mp4" />
        Tu navegador no admite el elemento de video.
      </video>
    </div>
  );
};

export default VideoPlayer;