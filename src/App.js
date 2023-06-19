import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  let maxHeight;
  if(window.innerHeight <= 800) {
    maxHeight = window.innerHeight
  }

  const [videosList, setVideosList] = useState([]);

  async function getVideos() {
    const videosCol = collection(db, "videos");
    const videoSnapshot = await getDocs(videosCol);
    const videoList = videoSnapshot.docs.map((doc) => doc.data());
    setVideosList(videoList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxHeight: maxHeight + 'px' }}>
      <div className="app_video">
        {videosList.map((video) => (
          <Video key={video.id} videoInfo={video} />
        ))}
      </div>
    </div>
  );
}

export default App;
