
function loadSkills() {
   var keys = [];
   var skillString = "";
   fetch("../data/skill-data.json")
      .then(mockResponses => {
         return mockResponses.json();
      })
      .then(data => {
         //keys = Object.keys(data)
         //console.log("keys: ", Object.keys(data)),

         for (key in Object.keys(data)) {
            //console.log(Object.keys(data)[key])
            document.getElementById("skill-boxes").innerHTML += `<div class="skill-box" onpointerenter="getData('` + Object.keys(data)[key] + `')" onpointerout="infoClosed()">
               ` + Object.keys(data)[key] + `
            </div>`
         }
      }
      )
}

document.addEventListener("DOMContentLoaded", function () {
   loadSkills();
});




function getData(skill) {
   infoOpen();
   fetch("../data/skill-data.json")
      .then(mockResponses => {
         return mockResponses.json();
      })
      .then(data => {
         document.getElementById("skill-description").innerHTML = "<h4 class='skill-data-heading'>" + skill + "</h4><hr />"
         document.getElementById("skill-description").innerHTML += data[skill];

         //console.log(Object.keys(data))
      }
      );

}

function infoOpen() {
   document.getElementById("skill-info").style.width = "30%";

}

function infoClosed() {
   document.getElementById("skill-description").innerHTML = ""
   document.getElementById("skill-info").style.width = "0%";

}

function introduction() {
   infoOpen();
   document.getElementById("skill-description").innerHTML = "Hover over the skills and more information \
   will appear here. This information will be updated, revised and improved over time to better reflect my \
   experience with the skill."
}
