fetch("../data/skill-data.json")
.then(mockResponses => {
   return mockResponses.json();
})
.then(data => console.log(data.cpp.data));