/// <reference types="vitest" />
import path from "path";
import dotenv from "dotenv";
import { defineConfig } from "vite";

dotenv.config({ path: path.resolve(__dirname, ".env.dev") });

export default defineConfig({
  test: {
    include: ["**/*.{test,spec,effect-spec}.?(c|m)[jt]s?(x)"],
    setupFiles: ["./src/test/setup.ts"],
  },
});
