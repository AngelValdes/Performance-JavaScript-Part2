requirejs.config({
    baseUrl: 'dist/js',
    paths: {
        jquery: 'jquery-3.1.0',
        underscore: 'underscore',
        videojs: 'video'
    }
});

require(['config-require'], function () {
    require(['app']);
});