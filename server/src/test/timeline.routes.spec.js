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

let timeline;
let jwt;
let userId;
beforeEach(async () => {
  timeline = await request(app).get(`/timeline/${userId}`).send();
  const response = await request(app).post("/user/signin").send({
    mail: "test@test.com",
    password: "123456",
  });
  jwt = response.body.token;
  userId = response.body._id;
});

describe("Posts timeline testing", () => {
  describe("GET /timeline/:id", () => {
    //should require authorization
    it("should require authorization", () => {
      request(app)
        .get(`/timeline/${userId}`)
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });

    it("The request returns an object", async () => {
      expect(timeline.body).toBeInstanceOf(Object);
    });

    it("The request return a JSON", async () => {
      expect(timeline.headers["content-type"]).toContain("json");
    });
  });
});


//HOLA