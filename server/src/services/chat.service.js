const Chat = require("../models/Chat");
const User =require("../models/User");
const messageService = require("./message.service");


  
const getChat = async (userId,intId) => {
    try {
        console.log(intId);
        const {chatId} = await messageService.searchChat(userId,intId);
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
        if (!user?.chat) return [];
        const arrChatsInfo = Array.from(user.chat);
        const arrChats = arrChatsInfo.map(async info => {
            const userChat = await User.findById(info[0]);
            const chat = await Chat.findById(info[1]);
            const lastMessage = await messageService.getMessage(chat.messages[0]);
            const id =info[0];
            const {name,lastName} = userChat;
            return {name,lastName,lastMessage,id};
        })
        return await Promise.all(arrChats);
    } catch (err) {
        throw err;
    }
}

module.exports={getChat,getChats};