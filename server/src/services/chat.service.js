const Chat = require("../models/Chat");
const User =require("../models/User");
const messageService = require("./message.service");


  
const getChat = async (userId,destinataryId) => {
    try {
        const {chatId} = await messageService.searchChat(userId,destinataryId);
        const chat = await Chat.findById(chatId);
        const messages = chat.messages.map(async id => {
            return await messageService.getMessage(id)
        });
        return await Promise.all(messages);
    } catch (err) {
        console.log(err)
        throw err;
    }
};

const getChats = async (userId)=>{
    try {
        const user = await User.findById(userId);
        const arrChatsId = Array.from(user.chat.keys());
        const arrChats = arrChatsId.map(async id => {
            const userChat = await User.findById(id);
            const {name,lastName} = userChat;
            return {name,lastName,id};
        })
        return await Promise.all(arrChats);
    } catch (err) {
        
    }
}

module.exports={getChat,getChats};