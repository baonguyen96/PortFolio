var skills = {
    "java": {
        "name": "Java",
        "value": "90%"
    },
    "c": {
        "name": "C",
        "value": "50%"
    },
    "cpp": {
        "name": "C++",
        "value": "80%"
    },
    "cSharp": {
        "name": "C#",
        "value": "50%"
    },
    "python": {
        "name": "Python",
        "value": "60%"},
    "android": {
        "name": "Android",
        "value": "70%"
    },
    "html": {
        "name": "HTML",
        "value": "80%"
    },
    "css": {
        "name": "CSS",
        "value": "80%"
    },
    "javascript": {
        "name": "JavaScript",
        "value": "80%"
    },
    "jQuery": {
        "name": "jQuery",
        "value": "80%"
    },
    "mySQL": {
        "name": "MySQL",
        "value": "50%"
    },
    "jdbc": {
        "name": "JDBC",
        "value": "80%"
    },
    "jUnit": {
        "name": "JUnit",
        "value": "90%"
    },
    "testNG": {
        "name": "TestNG",
        "value": "70%"
    },
    "github": {
        "name": "GitHub",
        "value": "100%"
    },
    "selenium": {
        "name": "Selenium",
        "value": "90%"
    },
    "php": {
        "name": "PHP",
        "value": "30%"
    },
    "msOffice": {
        "name": "MS Office",
        "value": "90%"
    },
    "windows": {
        "name": "Windows",
        "value": "90%"
    },
    "linux": {
        "name": "Linux",
        "value": "70%"
    }
};

$(document).ready(function () {
    for (var id in skills) {
        var element = $("#" + id);
        element.parent().siblings(".language").text(skills[id]["name"]);
        element.width(skills[id]["value"]);
        element.find(".progressValueText").text(skills[id]["value"]);
    }
});