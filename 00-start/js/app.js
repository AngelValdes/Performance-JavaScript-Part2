$("#getPeople").click(function () {
    var people = ['Jakub', 'Bill', 'Steve'];

    $(".people").append("<h2>" + _.size(people) + " people in database</h2>");

    _.each(people, function (person) {
        $(".people").append("<p>" + person + " <button class='video'>video</button></p>");
    });

    $(".video").click(function () {
        $(".player").html(
            "<video id='video' class='video-js' controls preload='none' width='480' height='360' data-setup='{}'>" +
            "<source src='video.mp4' type='video/mp4'>" +
            "</video>"
        );
        videojs('video');
    });
});