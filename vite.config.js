import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
function resolve() {
  return [
    { find: "@", replacement: path.resolve(__dirname, "./src") },
    { find: "~", replacement: path.resolve(__dirname, "./node_modules") },
    {
      find: /^~/,
      replacement: "",
    },
  ];
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
      less: {
        javascriptEnabled: true,
        additionalData: `@import "@/styles/variables.less";`, //全局引用样式变量
      },
    },
  },
});
