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
    const { _id } = req.body;
    const notification = await Notification.findByIdAndUpdate(_id,{$set:{read: true}})
    await notification.save()
    res.send({update: "notification read"})
    try {
    } catch (e) {
      res.status(404).send({ error: e.message });
    }
  };
  module.exports = {getNotifications, updateNotifications}