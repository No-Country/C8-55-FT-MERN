const groupService = require("../services/group.services");

const getGroupById = async (req,res) => {
    try {
        const { id } = req.params;
        const group = await groupService.getGroup(id);
        return res.status(200).json({group: group});
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
};

const getGroups = async (req,res) => {
    try {
        const groups = await groupService.getGroups();
        return res.status(200).json({groups: groups});
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
};

const createGroup = async (req,res) => {
    try {
        const group = await groupService.createGroup(req.body);
        return res.status(200).json({created: true, group: group});
    } catch (err){
        return res.status(500).json({error: err.message});
    }
};

const updateGroup = async (req,res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        console.log(JSON.stringify(req.params));
        console.log(JSON.stringify(body));
        const group = await groupService.updateGroup(id,body);
        return res.status(200).json({updated: true, group: group});
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
};

const deleteGroup = async (req,res) => {
    try {
        const { id } = req.params;
        const group = await groupService.deleteGroup(id);
        return res.status(200).json({deleted: true, group: group});
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
};

module.exports = {getGroupById,getGroups,createGroup,updateGroup,deleteGroup};