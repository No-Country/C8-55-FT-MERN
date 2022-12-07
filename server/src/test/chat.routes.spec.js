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
let user_comments;
let comment;
beforeEach(async () => {
  user_comments = await request(app).get(`/comment/user_comment/${userId}`);
  comment = await request(app).get(`/comment/get_comment/${1}`);

  const response = await request(app).post("/user/signin").send({
    mail: "test@test.com",
    password: "123456",
  });
  jwt = response.body.token;
  userId = response.body._id;
});

describe("Posts routes testing", () => {
  //user_comment/:id
  describe("GET /comment/user_comment/:id", () => {
    //should require authorization
    it("should require authorization", () => {
      request(app)
        .get(`/comment/user_comment/${userId}`)
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });

    //The request returns an object
    it("The request returns an object", async () => {
      expect(user_comments.body).toBeInstanceOf(Object);
    });

    it("The request return a JSON", async () => {
      expect(user_comments.headers["content-type"]).toContain("json");
    });
  });

  ///get_comment/:id
  describe("GET /comment/get_comment/:id", () => {
    //should require authorization
    it("should require authorization", () => {
      request(app)
        .get(`/comment/get_comment/${1}`)
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });

    //The request returns an object
    it("The request returns an object", async () => {
      expect(comment.body).toBeInstanceOf(Object);
    });

    it("The request return a JSON", async () => {
      expect(comment.headers["content-type"]).toContain("json");
    });
  });

  /// create
  describe("POST /comment/create", () => {
    it("The route works", () => {
      request(app)
        .post("/comment/post/")
        .send({
          userId,
          postId: 1,
          text: "test",
        })
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });
  });

  // put /reply
  describe("PUT /comment/reply", () => {
    it("The route works", () => {
      request(app)
        .put("/comment/reply/")
        .send({
          commentId: "1",
          userId: userId,
          postId: "1",
          text: "test",
        })
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });
  });

  // put /like/:id
  describe("PUT /comment/like/:id", () => {
    it("The route works", () => {
      request(app)
        .put(`/comment/like/${1}`)
        .send({
          userId: userId,
        })
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });
  });

  // /delete/:id'
  describe("PUT /comment/delete/:id", () => {
    it("The route works", () => {
      request(app)
        .delete(`/comment/delete/${1}`)
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });
  });

  // /update/:id
  describe("PUT /comment/update/:id", () => {
    it("The route works", () => {
      request(app)
        .put(`/comment/update/${1}`)
        .send({
          text: "test",
        })
        .set("content-type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .expect(200);
    });
  });
});
