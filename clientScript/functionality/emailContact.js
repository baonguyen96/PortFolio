$(function () {
    var emailIcon = $("#emailIcon");
    var emailData = {
        "request": "emailAddress"
    };

    // set email from the JSON file received from the server
    $.ajax({
        type: "POST",
        url: "../serverScript/php/emailAddressSetter.php",
        data: emailData,
        dataType: "json",
        success: function (data) {
            var response = JSON.stringify(data);

            if(response === '"Nonexist"') {
                emailIcon.hide();
            }
            else {
                response = response.replace('"', '');
                emailIcon.attr("href", "mailto:" + response);
            }
        },
        error: function (data) {
            emailIcon.hide();
        }
    });

});