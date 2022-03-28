module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 8
  },
  rules: {
    'space-before-function-paren': ['error', 'never']
  }
}
