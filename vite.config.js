import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
function resolve() {
  return {
    "@": path.resolve(__dirname, "./src"),
    "~": path.resolve(__dirname, "./node_modules"),
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".less"],
    alias: resolve(),
  },
  css: {
    preprocessorOptions: {
      less: { javascriptEnabled: true },
    },
  },
});
