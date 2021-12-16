

function getData(skill) {
   infoOpen();
   fetch("../data/skill-data.json")
      .then(mockResponses => {
         return mockResponses.json();
      })
      .then(data =>
         document.getElementById("skill-description").innerHTML = data[skill]
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
   will appear here. This information will be updated, revised and improved over time to better refslect my \
   experience with the skill."
}
