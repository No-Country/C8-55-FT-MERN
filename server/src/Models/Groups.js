const {Schema,model} = require("mongoose");

const groupSchema = new Schema({
    groupName: String,
    members: [ {type: Schema.Types.ObjectId,ref:"User"}],
    ownerId:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
});

const Group = model("Group",groupSchema)

module.exports = Group;