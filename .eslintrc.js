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
    "no-multiple-empty-lines": "off",
    "max-len": ["error", { "code": 120 }],
    "comma-dangle": "off",
    "prefer-arrow-callback": "off"
  },
  globals: {
    "$": "readonly",
    "ol": "readonly",
    "proj4": "readonly",
  },
};
