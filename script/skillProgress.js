var skills = {
    "java": "90%",
    "c": "50%",
    "cpp": "80%",
    "cSharp": "50%",
    "python": "60%",
    "android": "70%",
    "html": "80%",
    "css": "80%",
    "javascript": "80%",
    "jQuery": "80%",
    "mySQL": "50%",
    "jdbc": "80%",
    "jUnit": "90%",
    "testNG": "70%",
    "github": "100%",
    "selenium": "90%",
    "php": "30%",
    "msOffice": "90%",
    "windows": "90%",
    "linux": "70%"
};

$(document).ready(function () {
   for(var skill in skills) {
       $("#" + skill).width(skills[skill]);
       $("#" + skill + " .progressValueText").text(skills[skill]);
   }
});