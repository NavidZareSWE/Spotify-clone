import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
const DisplayHome = () => {
  const { albumsData, songsData } = useContext(PlayerContext);
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto noScroll">
          {albumsData.map((item, index) => {
            return (
              <AlbumItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item._id}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today&apos;s Biggest hits</h1>
        <div className="flex overflow-auto noScroll">
          {songsData.map((item, index) => {
            return (
              <SongItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item._id}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
