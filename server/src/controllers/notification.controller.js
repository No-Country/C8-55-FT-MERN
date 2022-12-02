const User = require("../models/User");
const Notification = require("../models/Notification.js")

const getNotifications = async (req, res) => {
    try {
      const userId = req.userId;
      const user = await User.findById(userId).populate("notifications");
      if(!user.notifications){
        return res.send({msg: "No notifications"})
      }
      const obj = user.notifications.filter(n => n.read !== true)
      
      res.send(obj);
    } catch (e) {
      res.status(404).send({ error: e.message });
    }
  };
  
  const updateNotifications = async (req, res) => {
    const { _id : id} = req.body;
    console.log(id)
    
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).send({error: "ID Not found"})
      }
    const notification = await Notification.findByIdAndUpdate(id,{$set:{read: true}})
    if(!notification){
        return res.status(404).send({error: "Notification not found"})
    }  
    await notification.save()
    res.send({update: "notification read"})
    try {
    } catch (e) {
      res.status(404).send({ error: e.message });
    }
  };
  module.exports = {getNotifications, updateNotifications}