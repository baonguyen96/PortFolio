$(document).ready(function () {
    $("#projectsToggle").click(function () {
        var state = $("#projectsToggle").text();

        if(state === "More") {
            $(".projectsTableHidden").show();
            state = "Less";
        }
        else {
            $(".projectsTableHidden").hide();
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