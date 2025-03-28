import { server } from "../mocks/node";
import { beforeAll, afterEach, afterAll } from "vitest";
import "dotenv/config";

// console.log(process.env.VITE_APP_ENV);
// console.log(process.env.VITE_API_URL);
// console.log(process.env.VITE_MOCKING);
// console.log(process.env.VITE_NASA_API_KEY);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
