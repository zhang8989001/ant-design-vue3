import { createApp } from "vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.less";
import Antd from "ant-design-vue";
const app = createApp(App);
app.use(Antd).mount("#app");
