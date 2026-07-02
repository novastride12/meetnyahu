import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },

    domain: {
      type: String,
      required: true,
      enum: [
        "Web Development",
        "Mobile Development",
        "Machine Learning",
        "Artificial Intelligence",
        "Cybersecurity",
        "Blockchain",
        "Cloud Computing",
        "IoT",
        "Data Science",
        "Game Development",
        "Other",
      ],
    },

    requiredSkills: {
      type: [String],
      default: [],
    },

    teammatesNeeded: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },

    status: {
      type: String,
      enum: ["OPEN", "TEAM_COMPLETE"],
      default: "OPEN",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Project", projectSchema);