$(document).ready(function () {
    $("#experienceToggle").click(function () {
        var state = $("#experienceToggle").text();

        if(state === "More") {
            $(".experienceHidden").show();
            state = "Less";
        }
        else {
            $(".experienceHidden").hide();
            state = "More";
        }

        $("#experienceToggle").html(state);
    });
});