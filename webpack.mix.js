let mix = require('laravel-mix');

mix
.js("src/app.js", "js")
.sass("src/app.scss", "css")
.setPublicPath('dist')

mix.options({
    processCssUrls: false // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
  });