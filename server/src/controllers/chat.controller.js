const chatService = require("../services/chat.service");

// const sendMessage = async (req,res)=>{
//     try {
//         const {userId,destinataryId}=req.body;
//         const chat = await chatService.sendMessage(userId,destinataryId);
//         return res.status(200).json({chat:chat});
//     } catch (err) {
//         return res.status(404).json({error:err});
//     }
// };

const getChat= async (req,res) => {
    try {
        const {userId} = req;
        const {intId} = req.params;
        const chat = await chatService.getChat(userId,intId);
        return res.status(200).json({chat:chat});
    } catch (err) {
        return res.status(404).json({error:err});
    }
};

const getChats = async (req,res) =>{
    try{
        const {userId} = req;
        const chats = await chatService.getChats(userId);
        return res.status(200).json({chats:chats});
    } catch (err) {
        return res.status(404).json({error:err});
    }
}

module.exports = {getChat,getChats};