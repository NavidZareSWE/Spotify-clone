import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useContext, useEffect, useRef } from "react";
import { PlayerContext } from "../context/PlayerContext";

const Display = () => {
  const { albumsData } = useContext(PlayerContext);
  // Creates a ref using useRef to reference the div element.
  // The ref can be used to access or manipulate the div directly.
  const displayRef = useRef();
  const location = useLocation();
  // Checks if the current URL path contains "album" to determine if the user is on an album page.
  const isAlbumPage = location.pathname.includes("album");
  const albumId = isAlbumPage ? location.pathname.split("/").pop() : "";
  const bgColor =
    isAlbumPage && albumsData.length > 0
      ? albumsData.find((x) => x._id === albumId).bgColor
      : "#121212";

  useEffect(() => {
    if (isAlbumPage)
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    else displayRef.current.style.background = `#121212`;
  });
  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      {albumsData.length > 0 ? (
        <Routes>
          <Route path="/" element={<DisplayHome />} />
          <Route
            path="/album/:id"
            element={
              <DisplayAlbum album={albumsData.find((x) => x._id === albumId)} />
            }
          />
        </Routes>
      ) : null}
    </div>
  );
};

export default Display;
