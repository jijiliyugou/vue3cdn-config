# vue3cdn-config

# 新建一个vue.config.js文件加入以下代码
module.exports = {
  configureWebpack: {
    externals: {
      vue: "Vue",
      "element-ui": "ElementUI"
    }
  }
};
