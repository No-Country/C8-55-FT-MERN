const messageService = require("../services/message.service");

const createMessage = async (req,res)=>{
    try {
        const {userId,text} = req.body;
        const message = await messageService.createMessage(userId,text);
        console.log(message);
        return res.status(200).json({created:true, message:message});
    } catch (err) {
        return res.status(404).json({error: err.message});
    }
};
const getMessage = async (req,res)=>{
    try {
        const {id} = req.params;
        const message = await messageService.getMessage(id);
        return res.status(200).json({ message: message });
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
};
const deleteMessage = async (req,res)=>{
    try {
        let { id } = req.params;
        const message = await messageService.deleteMessage(id);
        return res.status(200).json({ deleted: true, message: message });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const updateMessage = async (req,res)=>{
    try {
        let { id } = req.params;
        let { body } = req;
        const message = await messageService.updateMessage(id,body);  
        return res.status(200).json({updated: true, message: message});
    } catch (err) {
        return res.status(500).json({error: err.message});
    }

}

module.exports = {createMessage,getMessage,deleteMessage,updateMessage};