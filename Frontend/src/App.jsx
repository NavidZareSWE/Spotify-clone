import { useContext } from "react";
import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const {audioRef,track} = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      {
        // Renders an <audio> element with the 'preload' attribute set to 'auto'.
        // 'preload="auto"' tells the browser to load the audio file automatically when the page loads.
      }
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
