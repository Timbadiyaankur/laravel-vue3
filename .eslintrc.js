module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/multi-word-component-names': 'off',
  },
}
