const timelineServices = require("../services/timeline.service");

const getTimeline = async (req, res) => {
  try {
    const { id } = req.params;
    const { page = 1, limit = 10 } = req.query;
    const start = (page - 1) * limit;
    const end = page * limit;
    // const id  = req.userId;
    if (id) {
      const userTimeline = await timelineServices.getTimeline(id, start, limit);
      const total = await userTimeline.timeline.length;//cuenta la cantidad de documentos
        const countPages = Math.ceil(total / limit);
      return res.status(200).json({timeline: userTimeline.timeline, countPages, total});
    } else {
      return res.status(404).json("invalid id");
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { getTimeline };
