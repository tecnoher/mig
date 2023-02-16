const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    /* '@api': path.resolve(__dirname, 'src/api'),
    '@assets': path.resolve(__dirname, 'src/assets'), */
    "@constants": path.resolve(__dirname, "src/constants"),
    "@components": path.resolve(__dirname, "src/components"),
    "@contexts": path.resolve(__dirname, "src/contexts"),
    /* '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@types': path.resolve(__dirname, 'src/types'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@styles': path.resolve(__dirname, 'src/styles'), */
  })
);
