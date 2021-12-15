

function getData(skill) {
   fetch("../data/skill-data.json")
      .then(mockResponses => {
         return mockResponses.json();
      })
      .then(data =>
         document.getElementById("skill-description").innerHTML = data[skill]
      );

   infoOpen();


}

function infoOpen() {
   document.getElementById("skill-info").style.width = "30%";

}

function infoClosed() {
   document.getElementById("skill-description").innerHTML = ""
   document.getElementById("skill-info").style.width = "0%";

}
