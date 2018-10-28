requirejs.config({
    baseUrl: 'dist/js',
    paths: {
        jquery: [
            'https://code.jquery.com/jquery-3.1.0.min',
            'jquery-3.1.0'
            ],
        underscore: [
            'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
            'underscore'
            ],
        videojs: [
            'http://vjs.zencdn.net/5.10.8/video.min',
            'video'
            ]
    }
});

require(['config-require'], function () {
    require(['app']);
});