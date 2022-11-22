const Project = require("../models/Project");

const createProject = async (name, founder, description, category) => {
  const newProject = await Project.create({
    name,
    founder,
    description,
    category,
  });
  return newProject;
};

const getProjects = async () => {
  return await Project.find().lean().populate("members")
};

const getProject = async(id) => {
  return await Project.findById(id).lean().populate("members")
}

const validateUniqueProject = async (name) => {
  const project = await Project.find({ name: name });
  if (project) {
    return project;
  }
};

const validateProjectMember = async (userId) => {
  const member = await Project.find({ userId: userId });
  if (member) {
    return member
  }
}

const deleteProject = async (id) => {
  return Project.findByIdAndDelete(id);
};

const addMembers = async (id, userId) => {
  const project = Project.findOneAndUpdate(
    {_id: id},
    {
      $push: { members: userId },
    },
    {new: true}
  );
  return project
};


module.exports = {
  createProject,
  getProjects,
  validateUniqueProject,
  deleteProject,
  addMembers,
  validateProjectMember,
  getProject
};
