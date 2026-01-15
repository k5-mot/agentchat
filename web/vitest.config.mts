import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./__tests__/setup.tsx"],
    pool: "threads",
    testTimeout: 10000,
    deps: {
      optimizer: {
        web: {
          include: ["next"],
        },
      },
    },
  },
});
