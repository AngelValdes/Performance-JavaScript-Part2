require(['jquery'], function ($) {
    $("#getPeople").click(function () {
        var people = ['Jakub', 'Bill', 'Steve'];

        require(['underscore'], function (_) {
            $(".people").append("<h2>" + _.size(people) + " people in database</h2>");

            _.each(people, function (person) {
                $(".people").append("<p>" + person + " <button class='video'>video</button></p>");
            });

            $(".video").click(function () {
                require(['videojs'], function (videojs) {
                    $("head").append("<link href=\"dist/css/video-js.css\" rel=\"stylesheet\">");
                    $(".player").html(
                        "<video id='video' class='video-js' controls preload='none' width='480' height='360' data-setup='{}'>" +
                            "<source src='video.mp4' type='video/mp4'>" +
                        "</video>"
                        );
                    videojs('video');
                });
            });
        });        
    });
});
