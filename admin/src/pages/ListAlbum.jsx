import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../App";
import { toast } from "react-toastify";

const ListAlbum = () => {
  const [data, setData] = useState([]);
  const fetchAlbums = async () => {
    try {
      const response = await axios.get(BACKEND_URL + "/api/album/list");
      if (response.data.success) setData(response.data.albums);
    } catch (error) {
      console.error(error);
    }
  };
  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/album/remove`, {
        id,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchAlbums();
      }
    } catch (error) {
      toast.error("Error Occurred");
    }
  };
  useEffect(() => {
    fetchAlbums();
  }, []);
  return (
    <div>
      <p>All Albums List</p>
      <br />
      <div>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border-gray-300 text-sm bg-gray-200 mr-5">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Album Color</b>
          <b>Action</b>
        </div>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border-gray-300 text-sm mr-5"
            >
              <img className="w-12" src={item.image} alt="Album Image" />
              <p>{item.name}</p>
              <p>{item.desc}</p>
              <input type="color" value={item.bgColor} />
              <p
                onClick={() => removeAlbum(item._id)}
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

export default ListAlbum;
