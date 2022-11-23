const Message = require("../models/Message");
const User = require("../models/User");

const createMessage = async (userId, text) =>{
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error('User Id not found');
        if (text==false) throw new Error('No have Text');
        const message = new Message({userId:userId,text:text});
        return await Message.create(message);
    } catch (err) {
        throw err;
    }
};
const getMessage = async id =>{
    try {
        return await Message.findById(id);
    } catch (err) {
        throw err;
    }
};

const deleteMessage = async id =>{
    try {
        return await Message.findByIdAndRemove(id);
    } catch (err) {
        throw err;
    }
};

const updateMessage = async (id,body) =>{
    try {
        return await Message.findByIdAndUpdate(id,body,{new:true});
    } catch (err) {
        console.error(err);
    }
}

module.exports={createMessage,getMessage,deleteMessage,updateMessage};