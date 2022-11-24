const Chat =require("../models/Chat");
const User =require("../models/User");

const searchChat = async (userId,destinataryId) =>{
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error('User Id not found');
        const destinatary = await User.findById(destinataryId);
        if (!destinatary) throw new Error('destinatary Id not found');
        const chatId = user.chat.get(destinataryId);
        console.log(`chatId es: ${chatId}`);
        return {user:user,chatId:chatId,destinatary:destinatary};
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
        const chat = await Chat.findById(chatId)
        console.log(chat.messages);
        chat.messages.unshift(idMessage);
        await chat.save();
        return chat;
    } catch (err) {
        throw err;
    }
};
const getChat = async (userId,destinataryId) => {
    try {
        const {chatId:chat} = await searchChat(userId,destinataryId);
        return chat;
    } catch (err) {
        throw err;
    }
}

module.exports={loadChat,getChat};