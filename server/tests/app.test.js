import request from "supertest";
import app from "../src/app.js";

describe("Default root paths", () => {
    test("/ -> 404", done => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(404);
                done();
            });
    });
    test("/api -> 404", done => {
        request(app)
            .get("/api/posts/")
            .then(response => {
                expect(response.statusCode).toBe(404);
                done();
            });
    });
});
