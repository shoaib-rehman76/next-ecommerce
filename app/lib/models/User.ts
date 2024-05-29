import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  clerkId: String,
  wishlist: [],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
