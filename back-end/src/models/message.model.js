import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.SchemaType.Type.ObjectId,
      ref: "User",
      require: true,
    },
    receiverId: {
      type: mongoose.SchemaType.Type.ObjectId,
      ref: "User",
      require: true,
    },
    text: {
      type: String,
    },
    video: {
      type: String,
    },
  },
  { timestamps: true },
);

const message = mongoose.model("message", messageSchema);

export default message;
