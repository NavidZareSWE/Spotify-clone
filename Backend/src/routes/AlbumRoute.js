import {
  addAlbum,
  listAlbum,
  removeAlbum,
} from "../controllers/albumController.js";
import express from "express";
import upload from "../middleware/multer.js";

const albumRouter = express.Router();
// .single(fieldname)
// Accept a single file with the name fieldname. The single file will be stored in req.file
albumRouter.post("/add", upload.single("image"), addAlbum);
albumRouter.get("/list", listAlbum);
albumRouter.post("/remove", removeAlbum);

export default albumRouter;
