var workExperienceList = [
    {
        "jobTitle": "Quality Assurance Intern",
        "company": "Loopback Analytics",
        "period": "May 2017 - Present",
        "duties": [
            "Perform various testing techniques for software releases",
            "Use Selenium IDE and WebDriver for automated testing",
            "Maintain and update Selenese scripts",
            "Migrate Selenese scripts to Java OOP to support automation testing on multiple browsers",
            "Implement additional features such as self-healing and report logging"
        ]
    },
    {
        "jobTitle": "Store Associate",
        "company": "7-Eleven",
        "period": "July 2014 - December 2016",
        "duties": [
            "Receive and check in/out merchandises",
            "Provide outstanding customer services"
        ]
    },
    {
        "jobTitle": "Librarian Helper",
        "company": "Melbourne Public Library",
        "period": "November 2012 - March 2013",
        "duties": [
            "Volunteer",
            "Keep track of books flow",
            "Organize books",
            "Organize and run public events"
        ]
    }
];


$(function () {
    var experienceToggle = $("#experienceToggle");
    var experience = $("#experienceTemplate").clone().find(".experience");

    for(var currentExperience = 0; currentExperience < workExperienceList.length; currentExperience++) {
        var newExperience = experience.clone();

        // only show the first experience by default
        if(currentExperience > 0) {
            newExperience.removeClass("experience");
            newExperience.addClass("experienceHidden");
            newExperience.prepend("<hr/>");
        }

        newExperience.find(".jobTitle").text(workExperienceList[currentExperience].jobTitle);
        newExperience.find(".company").text(workExperienceList[currentExperience].company);
        newExperience.find(".period").text(workExperienceList[currentExperience].period);

        var customList = $("#customListTemplate").clone().find(".customList");
        var item = customList.find(".customListItem");
        var currentDuties = workExperienceList[currentExperience].duties;
        item.find(".customListIcon").attr("src", "../assets/images/misc/work.png");

        for(var duty = 0; duty < currentDuties.length; duty++) {
            var newItem = item.clone();
            newItem.find(".customListText").text(currentDuties[duty]);
            customList.append(newItem);
        }

        item.hide();
        newExperience.append(customList);
        experienceToggle.before(newExperience);
    }

    experience.hide();

});