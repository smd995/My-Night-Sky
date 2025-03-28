import { test, describe } from "vitest";
import { nasaApi } from "./nasaApi.effect";

describe("nasaApi", () => {
  const api = nasaApi();
  test("findOne", async () => {
    const data = await api.findOne();

    console.log(data);
  });
});
