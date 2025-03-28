import { test, describe } from "vitest";
import { contentApi } from "./api.effect";

describe("api test", () => {
  const api = contentApi();

  test("findOne", async () => {
    const result = await api.findOne();
    console.log(result);
  });
});
