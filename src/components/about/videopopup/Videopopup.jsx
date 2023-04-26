import React from "react";
import "vidstack/styles/defaults.css";
import { MediaOutlet, MediaPlayer } from "@vidstack/react";
import image from "../../../media/popup-bg.jpg";

const Videopopup = () => {
  return (
    <MediaPlayer
      src="https://media-files.vidstack.io/720p.mp4"
      poster={image}
      controls
    >
      <MediaOutlet />
    </MediaPlayer>
  );
};

export default Videopopup;
