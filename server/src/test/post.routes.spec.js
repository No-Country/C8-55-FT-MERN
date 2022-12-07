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

let all_posts;
let user_posts;
let jwt;
let userId;
beforeEach(async () => {
  all_posts = await request(app).get("/post/all_posts").send();
  user_posts = await request(app).get(`/post/user_posts/${userId}`).send();
  get_post = await request(app).get(`/post/get_post/${1}`).send();

  const response = await request(app).post("/user/signin").send({
    mail: "test@test.com",
    password: "123456",
  });
  jwt = response.body.token;
  userId = response.body._id;
});

describe("Posts routes testing", () => {
  describe("GET /post/all_posts", () => {
    //should require authorization
    it("should require authorization", () => {
      request(app)
        .get("/post/all_posts")
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

  describe("GET /post/user_posts/:id", () => {
    it("The route works", async () => {
      request(app)
        .get(`/post/user_posts${userId}`)
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });

    it("The request returns an object", async () => {
      expect(user_posts.body).toBeInstanceOf(Object);
    });

    it("The request return a JSON", async () => {
      expect(user_posts.headers["content-type"]).toContain("json");
    });
  });

  describe("GET /post/get_post/:id", () => {
    it("The route works", async () => {
      request(app)
        .get(`/post/get_post/${1}`)
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });

    it("The request returns an object", async () => {
      expect(get_post.body).toBeInstanceOf(Object);
    });

    it("The request return a JSON", async () => {
      expect(get_post.headers["content-type"]).toContain("json");
    });
  });

  describe("POST /post/create", () => {
    it("The route works", () => {
      request(app)
        .post("/post/create")
        .send({
          userId,
          text: "test",
          image: "test",
        })
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });
  });

  describe("PUT /post/update", () => {
    it("The update route works", () => {
      request(app)
        .put(`/post/update/${1}`)
        .send({
          text: "test-update",
          image: "test",
        })
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });
  });

  describe("DELETE /post/delete/:id", () => {
    it("The delete route works", () => {
      request(app)
        .delete(`/post/delete/${1}`)
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });
  });

  describe("PUT /post/like/:id", () => {
    it("The like route works", () => {
      request(app)
        .put(`/post/like/${1}`)
        .send({ userId })
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });
  });
});
