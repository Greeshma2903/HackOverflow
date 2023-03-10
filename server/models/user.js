import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  // utype: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  avatar: { type: Object },
});

export default mongoose.model("User", userSchema);
