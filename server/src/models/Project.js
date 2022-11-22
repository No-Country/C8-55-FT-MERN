const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
  {
    founder: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    description: { type: String},
    members: [{ type: Schema.Types.ObjectId, ref: "User" }],
    category: { type: String },
  },
  { timestamps: true }
);

const Project = model("Project", projectSchema);
module.exports = Project;
