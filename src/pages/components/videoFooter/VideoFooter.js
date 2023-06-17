import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import "./videoFooter.css";
import VideoSideBar from "../videoSideBar/VideoSideBar";

function VideoFooter(props) {
  const userName = props.footerInfo.userName;
  const description = props.footerInfo.description;
  const music = props.footerInfo.music;
  const sideBarInfo = {
    likeCount: props.footerInfo.likeCount,
    chatCount: props.footerInfo.chatCount,
    shareCount: props.footerInfo.shareCount,
  };

  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{userName}</h3>

        <p>{description}</p>

        <div className="videoFooter_music">
          <MusicNoteIcon />
          <div className="videoFooter_musicTitle">
            <p>{music}</p>
          </div>
        </div>
      </div>

      <div className="videoFooter_icons">
        <VideoSideBar sideBarInfo={sideBarInfo} />
        <img
          className="videoFooter_vinyl"
          src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
          alt="Image of a vinyl spinning"
        />
      </div>
    </div>
  );
}

export default VideoFooter;
