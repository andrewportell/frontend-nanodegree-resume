/* jshint forin: false */
/* globals $, HTMLschoolStart */
//Bio Information
var bio = {
    name: 'Andrew Portell',
    role: 'Web Developer',
    contacts: {
        mobile: '555-555-5555',
        email: 'myemail@gmail.com',
        github: 'andrewportell',
        twitter: '@mytwitter',
        location: 'St Louis, MO'
    },
    welcomeMessage: 'Thank you for visiting my interactive resume.',
    bioPic: 'images/eagle1_150x150.jpg',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python']
};

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName, formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBioPic, formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill in bio.skills) {
            formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
}

bio.display();


//Work Experiance
var work = {
    "jobs": [{
        employer: 'AT&T Communications',
        location: 'Maryland Heights, MO',
        dates: '2000-Future',
        title: 'Networking',
        description: 'Getting network traffic from A to B.'
    }, {
        employer: 'LMC Industries',
        location: 'Arnold, MO 63010',
        dates: '1996-2000',
        title: 'Process Engineer',
        description: 'Used heat and pressure to make the best coffee makers in the universe.'
    }],
};

work.display = function() {
    if (work.jobs.length > 0) {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedDescription);
        }
    }
}

work.display();


//Projects
var projects = {
    "projects": [{
        title: 'My project #1',
        dates: 'Jan 2012 - Aug 2012',
        description: 'Did some really profitable cool stuff.',
        images: [
            'images/eagle2_420x200.jpg',
            'images/eagle3_420x200.jpg'
        ]
    }],
};

projects.display = function() {
    if (projects.projects.length > 0) {
        for (var project in projects.projects) {
            $("#projects:last").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            for (var img in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();


//Education Information
var education = {
    "schools": [{
        name: 'Jefferson College',
        location: 'Hillsboro, MO',
        degree: 'AAS',
        date: '1998',
        major: 'Industrial Automation',
        url: 'http://www.jeffco.edu'
    }],

    "onlineCourses": [{
        school: 'Udacity',
        title: 'Introduction to Programming',
        date: '2015',
        url: 'https://www.udacity.com'
    }, {
        school: 'Udacity',
        title: 'Front-End Web Developer',
        date: '2016',
        url: 'https://www.udacity.com'
    }]
};

education.display = function() {
    if (education.schools.length > 0) {
        $("#education").append(HTMLschoolStart);
        for (var i = 0; i < education.schools.length; i++) {
            var schoolNameList = HTMLschoolName.replace("%data%", education.schools[i].name);
            var schoolDegreeList = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var schoolNameAndDegree = schoolNameList + schoolDegreeList;
            var schoolDateList = HTMLschoolDates.replace("%data%", education.schools[i].date);
            var schoolLocationList = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var schoolMajorList = HTMLschoolMajor.replace("%data%", education.schools[i].major);
            var onlineURLList = HTMLonlineURL.replace("%data%", education.schools[i].url);
            $(".education-entry:last").append(schoolNameAndDegree, schoolDateList, schoolLocationList, schoolMajorList, onlineURLList);
        }
    }

    if (education.onlineCourses.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);
        for (var i = 0; i < education.onlineCourses.length; i++) {
            var onlineTitleList = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var onlineSchoolList = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var onlineTitleAndSchoolName = onlineTitleList + onlineSchoolList;
            var onlineDatesList = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
            var onlineURLList = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            $(".education-entry:last").append(onlineTitleAndSchoolName, onlineDatesList, onlineURLList);
        }
    }
}

education.display();


//Map Information
$("#mapDiv").append(googleMap);