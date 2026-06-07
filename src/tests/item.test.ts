
import request from "supertest";
import mongoose from "mongoose";

// @ts-ignore
import app from "../app";

describe("GET /api/items", () => {
  it("debería devolver lista de items", async () => {
    const res = await request(app).get("/api/items");
    expect(res.statusCode).toBe(200);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});