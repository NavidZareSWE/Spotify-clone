import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] flex flex-col items-center"
    >
      <img className="rounded w-48" src={image} alt="Album Image" />
      <p className="font-bold mt-2 mb-1 max-w-[18ch]">{name}</p>
      <p className="text-slate-200 text-sm max-w-[24ch]">{desc}</p>
    </div>
  );
};

export default AlbumItem;
