const request = require("supertest");
const  {app}  = require("../app");
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
beforeEach(async () => {
  all_posts = await request(app).get("/post/all_posts").send();

  const response = await request(app).post("/user/signin").send({
    mail: "test@test.com",
    password: "123456",
  });
  jwt = response.body.token;
  userId = response.body._id;
});

describe("Projects routes testing", () => {
  describe("GET /project/all_projects", () => {
    //should require authorization
    it("should require authorization", () => {
      request(app)
        .get("/project/all_projects")
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });

    //The request returns an object
    it("The request returns an object", async () => {
      expect(all_posts.body).toBeInstanceOf(Object);
    });

    it("The request return a JSON", async () => {
      expect(all_posts.headers["content-type"]).toContain("json");
    });
  });

  describe("GET /project/:id", () => {
    it("should require authorization", () => {
        request(app)
          .get(`/project/${1}`)
          .set("content-type", "application/json")
          .set("Authorization", `Bearer ${jwt}`)
          .expect(200);
      });
  })

  describe("POST /post/create", () => {
    it("The route works", () => {
      request(app)
        .post("/project/create")
        .send({
            founder: userId,
            title: "test",
            subtitle: "test",
        })
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });
  });

  describe("DELETE /project/delete/:id", () => {
    it("The route works", () => {
      request(app)
        .delete(`/project/delete/${1}`)
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });
  });

  describe("PUT /project/add_member/:id", () => {
    it("The route works", () => {
      request(app)
        .put(`/project/add_member/${1}`)
        .send({
            founder: userId,
            title: "test",
            subtitle: "test",
        })
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });
  });

});
