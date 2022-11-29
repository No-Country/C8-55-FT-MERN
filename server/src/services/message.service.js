const Message = require("../models/Message");
const User = require("../models/User");
const Chat = require("../models/Chat");

const searchChat = async (userId,destinataryId) =>{
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error('User Id not found');
        const destinatary = await User.findById(destinataryId);
        if (!destinatary) throw new Error('destinatary Id not found');
        const chatId = user.chat.get(destinataryId);
        return {user,chatId,destinatary};
    } catch (err) {
        throw err;
    }
}
const loadChat = async (userId,destinataryId,idMessage)=>{
    try {
        const {user,chatId,destinatary} = await searchChat(userId,destinataryId);
        if (!chatId){
            const chat = new Chat({messages:[idMessage]});
            await chat.save();
            user.chat.set(destinataryId,chat);
            destinatary.chat.set(userId,chat);
            await user.save();
            await destinatary.save();
            return await Chat.create(chat);
        }
        const chat = await Chat.findById(chatId);
        chat.messages.unshift(idMessage);
        await chat.save();
        return chat;
    } catch (err) {
        throw err;
    }
};

const getMessage = async (id) =>{
    try {
        return await Message.findById(id);
    } catch (err) {
        throw err;
    }
};
const sendMessage = async (userId,destinataryId, text) =>{
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error('User Id not found');
        if (text==false) throw new Error('No have Text');
        const message = new Message({userId:userId,text:text});
        const messageM = await Message.create(message);
        await loadChat(userId,destinataryId,messageM._id);
        return messageM;
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

const editMessage = async (id,body) =>{
    try {
        return await Message.findByIdAndUpdate(id,body,{new:true});
    } catch (err) {
        console.error(err);
    }
}

module.exports={sendMessage,getMessage,deleteMessage,editMessage,searchChat};