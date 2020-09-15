module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: [
    'eslint-plugin-html',
  ],
  extends: [
    'airbnb-base',
  ],
  rules: {
    "no-console": "off",
    "no-unused-vars": "off",
    "quotes": "off",
  },
};
