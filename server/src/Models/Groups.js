const {Schema,model} = require("mongoose");

const groupSchema = new Schema({
    groupName: String,
    members: [ {type: Schema.Types.ObjectId,ref:"User"}],
    ownerId:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
});

module.exports = model("Group",groupSchema);