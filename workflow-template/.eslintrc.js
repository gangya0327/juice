module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/essential', 'standard'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 0,
    // 不能在标签中使用注释
    'vue/comment-directive': 0,
    // 函数前空格
    'space-before-function-paren': 0
  }
}
