/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
}

module.exports = config
