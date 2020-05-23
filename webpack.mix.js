const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
      })
    .webpackConfig({
        watchOptions: {
            ignored: /node_modules/
        },
        resolve: {
            extensions: [".js", ".vue", ".json"],
            alias: {
                vue$: "vue/dist/vue.esm.js",
                "@": __dirname + "/resources/js",
                "@adm": __dirname + "/resources/admin/js"
            }
        }
    });
    
if (mix.inProduction()) {
    mix.babel("public/js/app.js", "public/js/app.js")
    mix.version();
}