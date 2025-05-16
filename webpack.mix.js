const mix = require('laravel-mix')
const path = require("path");

mix
    .setPublicPath('dist')
    .js('resources/js/chart-js-integration.js', 'js')
    .vue({ version: 3 })
    .webpackConfig({
        externals: {
            vue: 'Vue',
            chartjs: 'Chart',
        },
        output: {
            uniqueName: 'coroowicaksono/chart-js-integration',
        },
    })
    .alias({
        'laravel-nova': path.join(__dirname, 'vendor/laravel/nova/resources/js/mixins/packages.js'),
    });
