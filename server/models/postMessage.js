// 21:21
import mongoose from "mongoose";

//SCHEMA
const postScehma = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String, //image
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//Model
const PostMessage = mongoose.model("PostMessage", postScehma);

export default PostMessage;
