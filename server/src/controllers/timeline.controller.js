const timelineServices = require("../services/timeline.service");

const getTimeline = async (req, res) => {
  try {
    const id  = req.userId;
    const { page = 1, limit = 10 } = req.query;
    const start = (page - 1) * limit;
    if (id) {
      const userTimeline = await timelineServices.getTimeline(id, start, limit);
      const total = userTimeline.timeline.length;
      const pages = Math.ceil(total / limit);
      return res
        .status(200)
        .json({ timeline: userTimeline.timeline, total, pages });
    } else {
      return res.status(404).json("invalid id");
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { getTimeline };
