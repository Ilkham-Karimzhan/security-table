import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Add these lines
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
