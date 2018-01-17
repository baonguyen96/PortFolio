var skills = [
    {
        "name": "Java",
        "value": "90%"
    },
    {
        "name": "C",
        "value": "50%"
    },
    {
        "name": "C++",
        "value": "80%"
    },
    {
        "name": "C#",
        "value": "50%"
    },
    {
        "name": "Python",
        "value": "60%"
    },
    {
        "name": "PHP",
        "value": "45%"
    },
    {
        "name": "HTML",
        "value": "80%"
    },
    {
        "name": "CSS",
        "value": "80%"
    },
    {
        "name": "JavaScript",
        "value": "80%"
    },
    {
        "name": "jQuery",
        "value": "80%"
    },
    {
        "name": "AJAX",
        "value": "70%"
    },
    {
        "name": "NodeJS",
        "value": "20%"
    },
    {
        "name": "MySQL",
        "value": "50%"
    },
    {
        "name": "JDBC",
        "value": "80%"
    },
    {
        "name": "JUnit",
        "value": "90%"
    },
    {
        "name": "TestNG",
        "value": "70%"
    },
    {
        "name": "GitHub",
        "value": "100%"
    },
    {
        "name": "Selenium",
        "value": "90%"
    },
    {
        "name": "Android",
        "value": "75%"
    },
    {
        "name": "MS Office",
        "value": "90%"
    },
    {
        "name": "Windows",
        "value": "90%"
    },
    {
        "name": "Linux",
        "value": "70%"
    }
];

$(document).ready(function () {
    var skillsSection = $("#skillsSection");
    var row = $("#skillRowTemplate").find(".row");

    for(var i = 0; i < skills.length; i += 2) {
        var newRow = row.clone();

        // first skill
        var firstSkill = newRow.find(".col-sm-6").eq(0);
        firstSkill.find(".language").text(skills[i].name);
        firstSkill.find(".progressValue").width(skills[i].value);
        firstSkill.find(".progressValueText").text(skills[i].value);

        // second skill
        var secondSkill = newRow.find(".col-sm-6").eq(1);
        secondSkill.find(".language").text(skills[i + 1].name);
        secondSkill.find(".progressValue").width(skills[i + 1].value);
        secondSkill.find(".progressValueText").text(skills[i + 1].value);

        // newRow = "<div>" + i + "</div>";
        skillsSection.append(newRow);
    }
});