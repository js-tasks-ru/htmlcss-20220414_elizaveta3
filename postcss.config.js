module.exports = {
  syntax: 'postcss-scss',
  map: { inline: true },
  plugins: [
    require('precss')({
      lookup: { disable: true },
      properties: {
        // Чтобы работали CSS custom properties, а не заменялись на статическое значение.
        disable: true,
        preserve: true,
      },
    }),
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-advanced-variables'),
    require('postcss-mixins'),
    require('postcss-inline-comment'),
    require('postcss-cssnext'),
    require('postcss-strip-inline-comments'),
    require('postcss-at-rules-variables'),
    require('autoprefixer'),
    require('cssnano'),
  ],
};
