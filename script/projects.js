$(document).ready(function () {
    $("#projectsToggle").click(function () {
        var state = $("#projectsToggle").text();

        if(state === "More") {
            $(".projectsTableMore").show();
            state = "Less";
        }
        else {
            $(".projectsTableMore").hide();
            state = "More";
        }

        $("#projectsToggle").html(state);
    });

    $(".project").hover(
        function () {
            $(this).find(".projectDescription").show();
        },
        function () {
            $(this).find(".projectDescription").hide();
        }
    );
});