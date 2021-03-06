import express from "express";
import {
  get_edit_video,
  post_edit_video,
  get_upload,
  post_upload,
  video_detail,
  delete_video,
} from "../controllers/video_controller";
import { only_private, upload_video } from "../middlewares";
import routes from "../routes";

const video_router = express.Router();

// Upload
video_router.get(routes.upload, only_private, get_upload);
video_router.post(routes.upload, only_private, upload_video, post_upload);

// Video Detail
video_router.get(routes.video_detail(), video_detail);

// Edit Video
video_router.get(routes.edit_video(), only_private, get_edit_video);
video_router.post(routes.edit_video(), only_private, post_edit_video);

// Delete Video
video_router.get(routes.delete_video(), only_private, delete_video);

export default video_router;
