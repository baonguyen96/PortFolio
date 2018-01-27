// to be added: ReactJS, XML, RDF, SPARQL
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
        "value": "90%"
    },
    {
        "name": "jQuery",
        "value": "90%"
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
        "value": "100%"
    },
    {
        "name": "Windows",
        "value": "90%"
    },
    {
        "name": "Linux",
        "value": "70%"
    },
    {
        "name": "Android",
        "value": "75%"
    },
    {
        "name": "MS Office",
        "value": "90%"
    }
];

$(document).ready(function () {
    var skillsSection = $("#skillsSection");
    var row = $("#skillRowTemplate").find(".row");

    // loop through each row (2 projects)
    for(var rowIndex = 0; rowIndex < skills.length; rowIndex += 2) {
        var newRow = row.clone();
        newRow.find(".skill").eq(0).remove();

        // add 2 projects per row
        for(var skillIndex = 0; skillIndex < 2; skillIndex++) {
            var skillData = skills[rowIndex + skillIndex];
            var currentSkill = row.find(".skill").clone();
            currentSkill.find(".language").text(skillData.name);
            currentSkill.find(".progressValue").width(skillData.value);
            currentSkill.find(".progressValueText").text(skillData.value);
            newRow.append(currentSkill);
        }

        skillsSection.append(newRow);
    }
});