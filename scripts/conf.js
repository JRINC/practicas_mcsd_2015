var schedule = [
{
	"id" : "session-1",
	"title" : "Welcome!",
	"tracks" : [1]
},
{
	"id" : "session-2",
	"title" : "Session 2",
	"tracks" : [1]
},
{
	"id" : "session-3",
	"title" : "Session 3",
	"tracks" : [2]
},
{
	"id" : "session-4",
	"title" : "WebSockets and You",
	"tracks" : [1]
},
{
	"id" : "session-5",
	"title" : "WebSockets and You",
	"tracks" : [1]
},
{
	"id" : "session-6",
	"title" : "Cofee and cake break",
	"tracks" : [1, 2]
},
{
	"id" : "session-7",
	"title" : "Building responsive UIs",
	"tracks" : [1]
},
{
	"id" : "session-8",
	"title" : "Fun with Forms (no, really!)",
	"tracks" : [2]
},
{
	"id" : "session-9",
	"title" : "A fresh look at layouts",
	"tracks" : [1]
},
{
	"id" : "session-10",
	"title" : "Real world applicatinons for HTML5 APIs",
	"tracks" : [2]
},
{
	"id" : "session-11",
	"title" : "Lunch",
	"tracks" : [1, 2]
},
{
	"id" : "session-12",
	"title" : "Getting t Grips with javaScript",
	"tracks" : [1]
},
{
	"id" : "session-13",
	"title" : "Transforms and Animations",
	"tracks" : [2]
},
{
	"id" : "session-14",
	"title" : "Web Desgn Adventures with CSS3",
	"tracks" : [1]
},
{
	"id" : "session-15",
	"title" : "Introducing Data Access and Caching",
	"tracks" : [2]
},
{
	"id" : "session-16",
	"title" : "Closing Thanks and Prizes",
	"tracks" : [1, 2]
}
]

var list = document.querySelector("#schedule");
var track1CheckBox = document.querySelector("#show-track-1");
var track2CheckBox = document.querySelector("#show-track-2");

function createSessionElement(session) {
	var li = document.createElement("li");
	li.textContent = session.id + " : " + session.title;
	return li;
}

function clearList() {
	while (list.firstChild) {
		list.removeChild(list.firstChild);
	}
}

function displaySchedule() {
	clearList();
	var li;
	for (var i = 0; i < schedule.length; i++) {
		var tracks = schedule[i].tracks;
		
		var isCurrentTrack = 
		((track1CheckBox.checked && tracks.indexOf(1) >= 0) ||
		(track2CheckBox.checked && tracks.indexOf(2) >= 0));
		
		if (isCurrentTrack) {
			li = createSessionElement(schedule[i]);
			list.appendChild(li);
		}
	}
}

displaySchedule();

track1CheckBox.addEventListener("click", displaySchedule, false);
track2CheckBox.addEventListener("click", displaySchedule, false);