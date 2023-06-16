import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import "./videoFooter.css";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@Juca</h3>
        
        <p>Brecker mostrando suas habilidades de goleiro.</p>

        <div className="videoFooter_music">
          <MusicNoteIcon />
          <div className="videoFooter_musicTitle">
            <p>Epic music - Random artist</p>
          </div>
        </div>
      </div>

      <div className="videoFooter_icons">
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
