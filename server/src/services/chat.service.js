const Chat =require("../models/Chat");
const User =require("../models/User");

const searchChat = async (userId,destinataryId) =>{
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error('User Id not found');
        const destinatary = await User.findById(userId);
        if (!destinatary) throw new Error('destinatary Id not found');
        const chatUser = await user.chat[destinataryId].get();
        return {user:user,chatUser:chatUser,destinatary:destinatary};
    } catch (err) {
        throw err;
    }
}
const loadChat = async (userId,destinataryId,idMessage)=>{
    try {
        const {user,chatUser,destinatary} = await searchChat(userId,destinataryId);
        if (!chatUser){
            const chat = new Chat({messages:[idMessage]});
            await chat.save();
            user.chat.set(destinataryId,chat);
            destinatary.chat.set(userId,chat);
            await user.save();
            await destinatary.save();
            return await Chat.create(chat);
        }
        chatUser.messages.unshift(idMessage);
        await chatUser.save();
        return chatUser;
    } catch (err) {
        throw err;
    }
};
const getChat = async (userId,destinataryId) => {
    try {
        const {chatUser:chat} = await searchChat(userId,destinataryId);
        return chat;
    } catch (err) {
        throw err;
    }
}

module.exports={loadChat,getChat};