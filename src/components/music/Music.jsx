import "./music.scss";
import { useState } from "react";
import { motion } from "framer-motion";

// Background audio;
import music from "../../assets/audios/bgMusic.mp3"; /* noCopyrightMusic */

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bgMusic, setBgMusic] = useState(new Audio(music));

  function handleChangeCurrentAudioState() {
    if (isPlaying) {
      bgMusic.pause();
    } else {
      bgMusic.play();
      bgMusic.loop = true;
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <motion.div
      className="music-toggle"
      animate={{ x: "-10rem" }}
      transition={{ duration: 0.5 }}
    >
      <p>Sound</p>
      <label htmlFor="music">
        <input
          onChange={handleChangeCurrentAudioState}
          type="checkbox"
          name="music"
          id="music"
        />
        <span className="handle"></span>
        <span className="led"></span>
      </label>
    </motion.div>
  );
};

export default Music;
