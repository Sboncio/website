var red = document.getElementById("red");
var red_val = document.getElementById("red-val");

var green = document.getElementById("green");
var green_val = document.getElementById("green-val");

var blue = document.getElementById("blue");
var blue_val = document.getElementById("blue-val");




red_val.innerHTML = red.value;
green_val.innerHTML = green.value;
blue_val.innerHTML = blue.value;



// Update the current slider value (each time you drag the slider handle)
red.oninput = function() {
  red_val.innerHTML = this.value;
  update_colour()
}

green.oninput = function() {
  green_val.innerHTML = this.value;
  update_colour()
}

blue.oninput = function() {
  blue_val.innerHTML = this.value;
  update_colour()
}

function update_colour(){
  let hexRed;
  let hexGreen;
  let hexBlue;

  if(red.value >= 16){
    hexRed = parseInt(red.value).toString(16);
  } else {
    hexRed = '0' + red.value;
  }


  if(green.value >= 16){
    hexGreen = parseInt(green.value).toString(16);
  } else {
    hexGreen = '0' + green.value;
  }


  if(blue.value >= 16){
    hexBlue = parseInt(blue.value).toString(16);
  } else {
    hexBlue = '0' + blue.value;
  }


  let hexString = "#"+hexRed+hexGreen+hexBlue


  document.getElementById("navbar").style[ "background-color"] = hexString;
  document.getElementById("name").style[ "color"] = hexString;
}