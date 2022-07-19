const path = require("path");
const { generateTheme } = require("antd-theme-generator");
const options = {
  antDir: path.join(__dirname, "../node_modules/ant-design-vue"), //对应具体位置
  stylesDir: path.join(__dirname, "../src/styles"), //对应具体位置
  varFile: path.join(__dirname, "../src/styles/variables.less"), //对应具体位置
  themeVariables: [
    "@primary-color",
    "@secondary-color",
    "@text-color",
    "@text-color-secondary",
    "@heading-color",
    "@layout-body-background",
    "@btn-primary-bg",
    "@layout-header-background",
    "@my-blue",
    "@yi-black",
    "@my-pinkgreen-6",
  ],

  outputFilePath: path.join(__dirname, "../public/color.less"),
  customColorRegexArray: [/^fade\(.*\)$/],
};
generateTheme(options)
  .then(() => {
    console.log("Theme generated successfully");
  })
  .catch((error) => {
    console.log("Error", error);
  });
