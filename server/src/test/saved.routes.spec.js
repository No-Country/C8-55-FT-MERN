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
let user_saveds;
beforeEach(async () => {
  user_saveds = await request(app).get(`/saved/user_saveds/${userId}`);

  const response = await request(app).post("/user/signin").send({
    mail: "test@test.com",
    password: "123456",
  });
  jwt = response.body.token;
  userId = response.body._id;
});

describe("Posts routes testing", () => {
  //user_saveds/:id
  describe("GET /saved/user_comment/:id", () => {
    //should require authorization
    it("should require authorization", () => {
      request(app)
        .get(`/saved/user_saveds/${userId}`)
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });

    //The request returns an object
    it("The request returns an object", async () => {
      expect(user_saveds.body).toBeInstanceOf(Object);
    });

    it("The request return a JSON", async () => {
      expect(user_saveds.headers["content-type"]).toContain("json");
    });
  });
});

/// /save_post
describe("POST /saved/create", () => {
  it("The route works", () => {
    request(app)
      .post("/saved/save_post/")
      .send({
        userId,
        postId: 1,
      })
      .set("content-type", "application/json")
      .set("Authorization", `Bearer ${jwt}`)
      .expect(200);
  });
});

// /saved/delete/:id
describe("DELETE /saved/delete/:id", () => {
  it("The route works", () => {
    request(app)
      .delete(`/saved/delete/${1}`)
      .set("content-type", "application/json")
      .set("Authorization", `Bearer ${jwt}`)
      .expect(200);
  });
});
