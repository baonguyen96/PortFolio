// NOTE: demos are recorded at resolutions: 1024×576 (aspect ratio:  16:9) on 27in 1920x1080 screen

var projectsList = [
    {
        "title": "Dark Chroma",
        "intro": createIntro("A Chrome extension that revert the color of the page (bright text on dark background) to reduce eye-strains from long working period.", ["Chrome extension"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/DarkChroma"),
            createLinkTextWithPointer("https://chrome.google.com/webstore/detail/dark-chroma/jjknnbjoocbcgemnnjoaiifopndlcnbe", "Also available on", "Chrome Web Store")
        ]
    },
    {
        "title": "File Transfer Application",
        "intro": createIntro("This Java project implements a unique protocol for File Transfer between one Server and one Client utilizing Socket Programming, Connection Management, Reliable Communication, and Security (Public Key Crypto as well as Symmetric Key Crypto).", ["Java"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/FileTransferApplication")
        ]
    },
    {
        "title": "MIPS Converter",
        "intro": createIntro("This Java, Java Swing project provides conversion from and to Java, MIPS, and Machine codes. It recognizes different instruction types (I-, R-, or J-) from MIPS or Binary codes and provides the other two equivalences on a GUI.", ["Java", "Java Swing"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/MipsConverter")
        ]
    },
    {
        "title": "Morse Mastering",
        "intro": createIntro("An Android application that teaches users the Morse code and translates between Morse and normal text. It also provides some Android services, such as Notification and Network Communication.", ["Android application"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/MorseMastering")
        ]
    },
    {
        "title": "Tickets Reservation System",
        "intro": createIntro("This C++ project  simulates the current online ticketing systems - that either reserves the seats with receipts then flies the plane when full, or puts the selected seats onto the wait-list if those seats are not available. The prices are based on the type of seat(s) and the age of user.", ["C++"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/AirplaneTicketsReservingSystem")
        ]
    },
    {
        "title": "E-Commerce",
        "intro": createIntro("This project is a small E-Commerce database using Java embedded with MySQL (JDBC and JPA.)", ["MySQL", "JDBC", "JPA"]),
        "links": [
            createLinkTextWithPointer("https://github.com/baonguyen96/ECommerce")
        ]
    },
    {
        "title": "Flights Map",
        "intro": createIntro("This C# project represents a map of flights that connect different cities. Each city is a vertex, and each flight is an edge in the graph. It utilizes Dijkstra's algorithm to find the 3 shortest paths (either by flight duration or by total distance) between given 2 cities.", ["C#"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/FlightGraph")
        ]
    },
    {
        "title": "Calendar",
        "intro": createIntro("Simple Java, JavaFX program to calculate the difference between 2 dates, or the second date given the first one and the duration.", ["Java", "JavaFX"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/Calendar")
        ]
    },
    {
        "title": "Ticket To Knowhere",
        "intro": createIntro("A docking software system that tracks parking lot's activities and generates violation tickets, written in C++.", ["C++"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/TicketToKnowhere")
        ]
    },
    {
        "title": "Red Black Tree",
        "intro": createIntro(createLinkText("https://en.wikipedia.org/wiki/Red%E2%80%93black_tree", "This is my own implementation of the", "Red Black Tree") + " data structure in Java.", ["Java"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/RedBlackTree")
        ]
    },
    {
        "title": "Health Score",
        "intro": createIntro("This project is a statistical analysis program based on the concept of multi-sensors data fusion - the process of combining observations from a number of different sensors to provide a robust and complete description of an environment or process. Written in C.", ["C"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/HealthScore")
        ]
    },
    {
        "title": "Chat Room",
        "intro": createIntro(createLinkText("#FileTransferApplication", "A simple chat room project in Java that allows a client and server to talk to each other. This is a \"smaller, simpler\" version of the", " File Transfer Application") + " project.", ["Java"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/Chatroom")
        ]
    },
    {
        "title": "KWIC System",
        "intro": createIntro(createLinkText("https://en.wikipedia.org/wiki/Key_Word_in_Context", "This group project is a web based solution to the", "Key Word in Context", true) + " problem, implemented using HTML, CSS, JavaScript, and JSP.", ["HTML", "CSS", "JavaScript", "JSP"]),
        "links": [
            createLinkTextWithPointer("https://github.com/baonguyen96/KWIC_Project")
        ]
    },
    {
        "title": "Cyberminer",
        "intro": createIntro(createLinkText("#KWICSystem", "A simple search engine built in HTML, CSS, JavaScript, JSP, MySQL, and Selenium that allows users to add a URL-Description tuple to the database, and carries out a search on the descriptions. Built upon the", "KWIC") + " project.", ["HTML", "CSS", "JavaScript", "JSP", "MySQL", "Selenium"]),
        "links": [
            createLinkTextWithPointer("https://github.com/baonguyen96/Cyberminer")
        ]
    }
];


function createPointer() {
    return "&#x27A4; ";
}


function createDemoText() {
    return createPointer() + "See <a href='#' class='demoLink' data-toggle='modal' data-target='#hiddenModal'>Demo</a>";
}


function createLinkTextWithPointer(link, welcome, name) {
    // default is GitHub
    if(arguments.length === 1) {
        welcome = "Check out on";
        name = "GitHub";
    }

    return createPointer() + createLinkText(link, welcome, name);
}


function createLinkText(link, welcome, name) {
    return welcome + " <a href=\"" + link + "\" target=\"_blank\">" + name + "</a>";
}


function createIntro(intro, types) {
    for(var i = 0; i < types.length; i++) {
        intro = intro.replace(types[i], "<span class=\"projectType\">" + types[i] + "</span>")
    }
    return intro;
}


function addProjectsToGroup(groupElement, fromProjectIndex, toProjectIndex) {
    var row = $("#projectTemplate").find(".row");

    // loop through each row (2 projects each)
    for(var rowIndex = fromProjectIndex; rowIndex < toProjectIndex; rowIndex += 2) {
        var newRow = row.clone();
        newRow.find(".project").eq(0).remove();

        // on each row, add 2 projects
        for(var projectIndex = 0; projectIndex < 2; projectIndex++) {
            var projectData = projectsList[rowIndex + projectIndex];
            var currentProject = row.find(".project").clone();
            var id = projectData.title.replace(/\s/g, "");

            currentProject.attr("id", id);
            currentProject.find(".projectTitle").text(projectData.title);
            currentProject.find(".projectIntro").html(projectData.intro);

            // for each project, add all links
            var links = projectData.links;
            for(var linkIndex = 0; linkIndex < links.length; linkIndex++) {
                var link = projectData.links[linkIndex];
                var projectLink = currentProject.find(".projectLink").eq(0);

                // update text if only 1 link, or append new links
                if(linkIndex === 0) {
                    projectLink.html(link);
                }
                else {
                    var newLink = projectLink.clone().html(link);
                    currentProject.find(".projectDescription").append(newLink);
                }
            }
            newRow.append(currentProject);
        }
        groupElement.append(newRow);
    }

}


function showDemo() {
    var myModal = $("#hiddenModal");
    var demoProjectId = "";
    var demoProjectTitle = "";

    $(".projectLink .demoLink").click(function () {
        demoProjectTitle = $(this).closest(".project").find(".projectTitle").text();
        demoProjectId = $(this).closest(".project").attr("id");
    });

    // Show loader & then get content when modal is shown
    myModal.on('show.bs.modal', function() {
        $(this).find(".modal-title").text(demoProjectTitle);

        var img = $(this).find(".demoImage");
        img.attr("src", "../assets/images/demos/" + demoProjectId + ".gif");
        img.attr("alt", demoProjectTitle + " Demo");
    });

}


$(function () {
    var projectSection = $("#projectsSection");
    var projects = projectSection.find(".projects");
    var projectsHidden = projectSection.find(".projectsHidden");

    // show the first 4 projects by default
    addProjectsToGroup(projects, 0, 4);

    // from project 5, only show when user requests
    addProjectsToGroup(projectsHidden, 4, projectsList.length);

    showDemo();
});