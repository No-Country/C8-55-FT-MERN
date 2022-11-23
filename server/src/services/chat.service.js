const Chat =require("../models/Chat");
const User =require("../models/User");

const updateChat = async (userId,addresseeId,message)=>{
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error('User Id not found');
        const chatUser = await user.chat[addresseeId].get();
        if (!chatUser){
            const chat = new Chat({messages:[message]});
            return await Chat.create(chat);
        }
        chatUser.messages.unshift(message);
        user.chat.set(addresseeId,chatUser);
        await user.save();
        return chatUser;
    } catch (err) {
        throw err;
    }
}

module.exports={updateChat};