const projectServices = require("../services/project.service");

const createProject = async (req, res) => {
  try {
    const { name, founder, description, category } = req.body;
    const uniqueProject = await projectServices.validateUniqueProject(name);
    if (uniqueProject.length === 0) {
      const project = await projectServices.createProject(
        name,
        founder,
        description,
        category
      );
      return res.status(200).json({ created: "successfully", project });
    } else {
      return res.status(400).json("This project already exists");
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await projectServices.getProjects();
    if (projects.length) {
      return res.status(200).json(projects);
    } else {
      return res.status(400).json({ error: "projects does not exists" });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await projectServices.getProject(id);
    if (project) {
      return res.status(200).json(project);
    } else {
      return res.status(400).json({ error: "project not found" });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await projectServices.deleteProject(id);
    if (project) {
      return res.status(200).json("deleted successfully");
    } else {
      return res.status(400).json("id not found");
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const addMembers = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const project = await projectServices.getProject(id);
    if (!project.members.includes(userId)) {
      const project = await projectServices.addMembers(id, userId);
      return res
        .status(200)
        .json({ message: "user added to project", project });
    } else {
      return res.status(200).json({ message: "user already added to project" });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createProject,
  getProjects,
  deleteProject,
  addMembers,
  getProject,
};
