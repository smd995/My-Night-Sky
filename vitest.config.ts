/// <reference types="vitest" />
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const resolvedMode = mode || "dev";
  const env = loadEnv(resolvedMode, process.cwd());

  return {
    define: {
      "process.env.VITE_API_URL": JSON.stringify(env.VITE_API_URL),
    },
    test: {
      include: ["**/*.{test,spec,effect-spec}.?(c|m)[jt]s?(x)"],
      setupFiles: ["./src/test/setup.ts", "dotenv/config"],
    },
  };
});
