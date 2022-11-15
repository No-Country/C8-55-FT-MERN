const Group = require("../Models/Groups");

const getGroup = async id => {
    try {
        return await Group.findById(id);    
    } catch (err) {
        console.error(err)
    }
};

const getGroups = async () => {
    try {
        return await Group.find();
    } catch (err) {
        console.error(err)
    }
};

const createGroup = async body =>{
    try {
        return await Group.create(body);
    } catch (err) {
        console.error(err);
    }
};

const updateGroup = async (id,body) => {
    try {
        
        return await Group.findOneAndUpdate({id:id},body,{new:true});
    } catch (err) {
        console.error(err);
    }
};

const deleteGroup = async id => {
    try {
        return await Group.findByIdAndRemove(id);
    } catch (err) {
        console.error(err);
    }
};

module.exports = {getGroup,getGroups,createGroup,updateGroup,deleteGroup};