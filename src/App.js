import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
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
    <div className="App">
      <div className="app_video">
        {videosList.map((video) => (
          <Video key={video.id} videoInfo={video} />
        ))}
      </div>
    </div>
  );
}

export default App;
