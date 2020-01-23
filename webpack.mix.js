let mix = require('laravel-mix');

require('laravel-mix-imagemin');
const ImageminPlugin     = require('imagemin-webpack-plugin').default;
const imageminMozjpeg    = require('imagemin-mozjpeg');
mix.webpackConfig({
    plugins: [
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: {
                quality: '65-80',
                strip: true
            },
            plugins: [
                imageminMozjpeg({
                    quality: 65,
                    progressive: true,
                    //Set the maximum memory to use in kbytes
                    maxMemory: 1000 * 512
                })
            ]
        })
    ],
});

mix
    .setPublicPath('public')
    .imagemin('img/**.*');