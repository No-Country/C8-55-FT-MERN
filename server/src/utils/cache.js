const Redis = require("redis");
const redisClient = Redis.createClient("redis://server:6379");

async function connection() {
  await redisClient.connect();
}

async function cache(key, cb) {
  const data = await redisClient.get(key);
  if (data) {
    return JSON.parse(data);
  } else {
    const newData = await cb();
    redisClient.setEx(key, 3600, JSON.stringify(newData));
    return newData;
  }
}

async function deleteCache(key) {
  await redisClient.del(key);
}

connection().catch(console.error);

module.exports = { cache, deleteCache };
