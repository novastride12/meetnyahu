import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    profileCompleted: {
      type: Boolean,
      default: false,
    },

    // Filled after first login
    name: String,
    srn: String,
    gender: String,
    department: String,

    cgpa: {
      type: Number,
      min: 0,
      max: 10,
    },

    skills: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);