const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
  {
    founder: { type: Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    subtitle: { type: String},
    description: { type: String},
    risk: { type: String},
    textUrl: { type: String},
    projectImg: { type: String},
    amount: { type: Number},
    wallet: { type: String},
    members: [{ type: Schema.Types.ObjectId, ref: "User" }],
    category: { type: String },
  },
  { timestamps: true }
);

const Project = model("Project", projectSchema);
module.exports = Project;
