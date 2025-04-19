import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/gemini-clone/", // 👈 Add this subpath
  build: {
    assetsDir: "assets",
    emptyOutDir: true,
  },
});
