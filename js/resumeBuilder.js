var bio = {
    "name": "Craig Brown",
    "role": "Web Developer",
    "contacts": {
        "mobile": "333-333-3333",
        "email": "craigbrown313@gmail.com",
        "github": "https://github.com/craigbrown313",
        "location": "Cincinnati, OH, United States"


    },
    "welcomeMessage": "I am currently seeking entry-level employment in Web Development in the Cincinnati "+
    "market. I have spent the last 6 months honing my skills in the Udacity front-end web development course "+
    "where I have gained great expeireince thoughout my classes and projects. I am now ready to take my "+
    "skills to the next level to add immediate value in the corporate world.",
    "skills": [
        "HTML",
        "JavaScript",
        "CSS",
        "jQuery",
        "AngularJS",
        "React",
        "jSon"
    ],
    "biopic": "images/profile.png",
};

var education = {
    "schools": [
        {
            "name": "Cincinnati Christian",
            "location": "Cincinnati, Ohio",
            "degree": "Bachelors",
            "majors": "Business",
            "dates": 2017,
            "url": "http://ccuniversity.edu/"
        }
    ],
    "onlineCourses": [{
        "title": "Front-End Web Developer: Nanodegree",
        "school": "Udacity",
        "dates": 2017,
        "url": "www.udacity.com"
    }]
};

var work = {
    "jobs": [{
            "employer": "Triple E Partners",
            "title": "Senior IT Recruiter",
            "dates": "September 2016 - December 2016",
            "description": "Up to date knowledge in front-end Web Development Utilizing HTML, CSS3, and JavaScript. "+
            "Operated as Information Technology recruiter, scoring candidates involved in the SDLC. Sourced candidates "+
            "for jobs in the technical field with major corporations. Interviewed and prepped candidates for potential "+
            "job openings. Consulted with HR firms on the best possible applicants and salary negotiations.",
            "location": "Cincinnati, Ohio, United States",
            "url":"https://tripleepartners.com/"

        },
        {
            "employer": "Edis Group",
            "title": "Executive IT Recruiter",
            "dates": "April 2016 to August 2017",
            "description": "Full life cycle recruiting for all Information Technology and specialized related positions "+
            "Utilized best practices to source, and meet candidates. Considered responsible by means of set up selecting "+
            "measurements: time to fill, cost per contract, nature of contract, client administration amid contract with "+
            "trough and candidate. In charge of counseling with Managers, AVPs, VPs, CIO and proper Human Resource Managers "+
            "all through the enlisting procedure, giving point-by-point evaluations of all hopefuls sourced. Complete "+
            "uncommon selecting related undertakings for the HR and IT Departments as required.",
            "location": "Cincinnati, Ohio, United States",
            "url":"http://edis-group.com/"
        }
    ]
};

var projects = {
    "projects": [{
        "title": "JavaScript Frogger Game",
        "datesWorked": "March 2017 - August 2017",
        "description": "Created an online game using JavaScript Object-Oriented programming and HTML5 Canvas as part of Udacity's Front-End Web Developer Nanodegree.",
        "images": ["images/frogger.png"],
        "url": "https://arcade-1fcce.firebaseapp.com/",
        "link": "Github",
        "link1": "https://github.com/craigbrown313/Arcade"

    },
    {
        "title": "Online Portfolio",
        "datesWorked": "March 2017 - August 2017",
        "description": "Created an online portfolio using HTML5, CSS3, and Bootstrap as an project for responsive web design.",
        "images": ["images/responsive1.png"],
        "url": "https://craigbrown313.github.io/responsive1/",
        "link": "Github",
        "link1": "https://craigbrown313.github.io/responsive1/"
    },
    {
        "title": "Resume w/React",
        "datesWorked": "March 2017 - August 2017",
        "description": "Developed an interactive resume utiizing React to build out componets to target my projects, work experince and education.",
        "images": ["images/resume.png"],
        "url": "https://still-hamlet-88172.herokuapp.com/,",
        "link": "Github",
        "link1": "https://github.com/craigbrown313/React-Resume"
    }
]
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%",  bio.contacts.github));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    $('#topContacts, #footerContacts').append(formattedContactInfo);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var i = 0, len = bio.skills.length; i < len; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);

            $('#skills').append(formattedSkills);
        }
    }


};
bio.display();

work.display = function() {

    if (work.jobs.length > 0) {


        for (var job = 0, len = work.jobs.length; job < len; job++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url)


            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedWorkLocation);
            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
            $(".work-entry:last").append(formattedEmployerWorkTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedWorkDescription);



        }

    }

};

work.display();

projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
      var formattedLink = HTMLprojectTitle.replace("%data%", projects.projects[i].link).replace("#", projects.projects[i].link1);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);



			$(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedLink);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);


			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
}

projects.display();

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var i = 0, len = education.schools.length; i < len; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);



            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);

        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (var b = 0, leno = education.onlineCourses.length; b < leno; b++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[b].title).replace("#", education.onlineCourses[b].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[b].school);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[b].url).replace("#", education.onlineCourses[b].url);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[b].dates);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
};

education.display();



$("#mapDiv").append(googleMap);
