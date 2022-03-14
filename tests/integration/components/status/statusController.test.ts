import request from "supertest";
import express from "express";

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const app = express();
    await require("@/loaders").default({ expressApp: app });

    const response = await request(app).get("/status");

    expect(response.statusCode).toBe(200);
  });
});
