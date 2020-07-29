module.exports = {
  // 注意，plugins 里别忘了加 vue 选项
  plugins: [
    'vue'   
  ],
  rules: {
    "quotes": [0, "single"],    // 禁用引号检查   引号类型 `` "" ''
    "semi": 0,                  // 禁用分号检查   [1, "always"]: 需要分号, [2, "never"]: 不加分号, 0: 禁用此项
    "vue/html-self-closing": "off",
    "vue/no-parsing-error": [2, {
      "x-invalid-end-tag": false,
    }],
    "indent": "off",            // 禁用缩进检查
  }
}