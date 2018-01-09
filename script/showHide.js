$(document).ready(function () {
    // $(".projectDescription").hide();

    $(".toggleText").click(function () {
        var state = $(this).text();
        var id = $(this).attr("id");

        if(state === "More") {
            if(id === "projectsToggle") {
                $(".projectsHidden").show();
            }
            else {
                $(".experienceHidden").show();
            }
            state = "Less";
        }
        else {
            if(id === "projectsToggle") {
                $(".projectsHidden").hide();
            }
            else {
                $(".experienceHidden").hide();
            }
            state = "More";
        }

        $(this).html(state);
    });

    $(".project").hover(
        function () {
            $(this).find(".projectTitle").hide();
            $(this).find(".projectDescription").show();
        },
        function () {
            $(this).find(".projectTitle").show();
            $(this).find(".projectDescription").hide();
        }
    );
});