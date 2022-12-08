const request = require("supertest");
const { app } = require("../app");
const mongoose = require("mongoose");
const { DB } = require("../config");

beforeAll(async () => {
  await mongoose.connect(DB);
});

afterAll(async () => {
  await mongoose.disconnect();
});

let jwt;
let userId;
let get_chats;
let get_chat;
beforeEach(async () => {
  get_chat = await request(app).get(`/chat/get/:intId/${1}`);
  get_chats = await request(app).get("/chat/get_chats");

  const response = await request(app).post("/user/signin").send({
    mail: "test@test.com",
    password: "123456",
  });
  jwt = response.body.token;
  userId = response.body._id;
});

//get chats
describe("Chats routes testing", () => {
  describe("GET /chat/get_chats", () => {
    it("should require authorization", () => {
      request(app)
        .get("/chat/get_chats")
        .send(userId)
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });
  });

  describe("GET /chat/get/:intId", () => {
    it("should require authorization", () => {
      request(app)
        .get(`/chat/get/:intId/${1}`)
        .send(userId)
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });
  });
});