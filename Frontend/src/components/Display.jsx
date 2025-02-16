import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useEffect, useRef } from "react";
import { albumsData } from "../assets/assets";

const Display = () => {
  // Creates a ref using useRef to reference the div element.
  // The ref can be used to access or manipulate the div directly.
  const displayRef = useRef();
  const location = useLocation();
  // Checks if the current URL path contains "album" to determine if the user is on an album page.
  const isAlbumPage = location.pathname.includes("album");
  const pagePath = "/album";
  const albumId = isAlbumPage
    ? location.pathname.slice(pagePath.length + 1, location.pathname.length)
    : "";
  const album = albumsData.find((item) => item.id === Number(albumId));
  const bgColor = album.bgColor;

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
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
