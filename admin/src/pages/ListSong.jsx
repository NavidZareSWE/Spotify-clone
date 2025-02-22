import { useEffect, useState } from "react";
import { BACKEND_URL } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const ListSong = () => {
  const [data, setData] = useState([]);
  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/song/list`);
      if (response.data.success) setData(response.data.songs);
    } catch (error) {
      toast.error("Error Occurred");
    }
  };
  const removeSong = async (id) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/song/remove`, {
        id,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchSongs();
      }
    } catch (error) {
      toast.error("Error Occurred");
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      <p>All Songs List</p>
      <br />
      <div>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border-gray-300 text-sm bg-gray-200">
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border-gray-300 text-sm mr-5"
            >
              <img className="w-12" src={item.image} alt="Song Image" />
              <p>{item.name}</p>
              <p>{item.album}</p>
              <p>{item.duration}</p>
              <p
                onClick={() => removeSong(item._id)}
                className="text-center cursor-pointer"
              >
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListSong;
