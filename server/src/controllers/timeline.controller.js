const timelineServices = require("../services/timeline.service");

const getTimeline = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const userTimeline = await timelineServices.getTimeline(id);
      return res.status(200).json(userTimeline);
    } else {
      return res.status(404).json("invalid id");
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { getTimeline };
