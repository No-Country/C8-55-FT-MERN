const {Schema,model} =require("mongoose");

const messageSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    text: {type:String, required:true},
    },
    {timestamps:true}
);

const Message = model("Message",messageSchema);

module.exports =Message;