import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["firebase/app"],
    },
  },
});
