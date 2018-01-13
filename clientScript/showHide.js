$(document).ready(function () {
    $(".toggleText").click(function () {
        var state = $(this).text();
        var id = $(this).attr("id");

        if(state === "More") {
            if(id === "projectsToggle") {
                $(".projectsHidden").slideDown();
            }
            else {
                $(".experienceHidden").slideDown();
            }
            state = "Less";
        }
        else {
            if(id === "projectsToggle") {
                $(".projectsHidden").slideUp();
            }
            else {
                $(".experienceHidden").slideUp();
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