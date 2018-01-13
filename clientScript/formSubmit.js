$(document).ready(function () {
    $("#contactForm").submit(function (e) {
        e.preventDefault();

        var botCheck = $("#botPreventionRadioButton");
        if(botCheck.is(":checked")) {
            $(botCheck).val("bot");
        }

        var formData = {
            "name": $(this).find("#contactName").val(),
            "email": $(this).find("#contactEmail").val(),
            "subject": $(this).find("#contactSubject").val(),
            "message": $(this).find("#contactMessage").val(),
            "bot": $(this).find("#botPreventionRadioButton").val()
        };

        $.ajax({
            type: "POST",
            url: "../serverScript/mail.php",
            data: formData,
            dataType: "json",
            success: function (data) {
                var json = JSON.stringify(data);

                if(json === "Success") {
                    setupAlert("alert-success", "Congratulation!", "Your message has been sent.");
                }
                else {
                    setupAlert("alert-danger", "Sorry!", "We are unable to process your message.");
                }
            },
            error: function (data) {
                var result = JSON.stringify(data);
                // alert(result);
                setupAlert("alert-danger", "Oops!", "Something went terribly wrong." + result);
            }
        });
    });
});

function setupAlert(alertClass, boldMessage, normalMessage) {
    var alertBox = $("#contactSubmitAlert");
    alertBox.addClass(alertClass);
    alertBox.find("strong").text(boldMessage);
    alertBox.find("span").text(normalMessage);
    alertBox.show();
    // alertBox.fadeIn(500).delay(3000).fadeOut(500, function () {
    //     alertBox.removeClass(alertClass);
    // });
}
