import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";

const addSong = async (req, res) => {
  try {
    const { name, desc, album } = req.body;
    const audioFile = req.files.audio[0];
    const imageFile = req.files.image[0];
    // This line uploads an audio file to Cloudinary and stores the
    // Specifies the resource type as "video", allowing audio files to be processed as video
    const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
      resource_type: "video",
    });
    // This line uploads an image file to Cloudinary and stores
    // Specifies the resource type as "image", allowing image files to be processed as images
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const songData = {
      name,
      desc,
      album,
      image: imageUpload.secure_url,
      file: audioUpload.secure_url,
      duration: `${Math.floor(audioUpload.duration / 60)}:${Math.floor(
        audioUpload.duration % 60,
      )}`,
    };
    const song = songModel(songData);
    await song.save();

    res.json({ success: true, message: "Song Added!" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
const listSong = async (req, res) => {
  try {
    const allSongs = await songModel.find({});
    res.json({ success: true, songs: allSongs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
const removeSong = async (req, res) => {
  try {
    await songModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Song Removed!" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addSong, listSong, removeSong };
