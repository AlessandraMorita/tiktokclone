import React, { useState } from "react";
import "./videoSideBar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSideBar(props) {
  const [isLiked, setIsLiked] = useState(false);
  const likeCount = props.sideBarInfo.likeCount;
  const chatCount = props.sideBarInfo.chatCount;
  const shareCount = props.sideBarInfo.shareCount;

  function handleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <div className="videoSideBar">
      <div className="videoSideBar_icon" onClick={handleLike}>
        {isLiked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p>{isLiked ? likeCount + 1 : likeCount}</p>
      </div>
      <div className="videoSideBar_icon">
        <ChatIcon fontSize="large" />
        <p>{chatCount}</p>
      </div>
      <div className="videoSideBar_icon">
        <ShareIcon fontSize="large" />
        <p>{shareCount}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;
