

var colour_picker = document.getElementById('colour-picker');

colour_picker.onchange = function(){
  document.getElementById("navbar").style[ "background-color"] = colour_picker.value;
  document.getElementById("name").style[ "color"] = colour_picker.value;
}

// Update the current slider value (each time you drag the slider handle)
