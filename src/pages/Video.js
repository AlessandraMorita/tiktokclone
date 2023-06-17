import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/videoFooter/VideoFooter";

function Video(props) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);
  const url = props.videoInfo.url;
  const alt = props.videoInfo.alt;

  function handleStart() {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  return (
    <div className="video-container">
      <video src={url} ref={videoRef} onClick={handleStart} loop alt={alt}>
        Your browser does not support the video tag.
      </video>
      <VideoFooter footerInfo={props.videoInfo} />
    </div>
  );
}

export default Video;
