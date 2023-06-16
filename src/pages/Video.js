import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/videoFooter/VideoFooter";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

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
      <video
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        ref={videoRef}
        onClick={handleStart}
        loop
      >
        Your browser does not support the video tag.
      </video>
      <VideoFooter />
    </div>
  );
}

export default Video;
