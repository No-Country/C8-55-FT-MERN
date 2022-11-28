const {Schema,model} =require("mongoose");

const chatSchema = new Schema({
    messages: [{type:Schema.Types.ObjectId,ref:"Message"}],
})

const Chat = model("Chat",chatSchema);

module.exports = Chat;