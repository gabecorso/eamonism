$(document).ready(function(){
    setInterval(function() {
    	changeImage()
  	},2000);
});

function changeImage() {
	document.getElementById('bird').src = 'https://s3.amazonaws.com/eamonism/colorbird.png';
}


var index;

var images = ["https://s3.amazonaws.com/eamonism/port1.jpg",]

// holds the titles of all the images
var titles = ['Savannah of the Waning Gibbous - 12x18 inches', 'Augury - 12x16 inches', 'Castilla - 11x14 inches', 
'Dream of Queen Meabh - 12x18 inches', 'Ichthyograph - 17x11 inches', 'Illuminette - 10x15 inches', "Mind's Eyedrops - 11x15 inches", 
'Ornithograph - 12x16 inches', 'Ornithograph ii - 12x16 inches', 'Psyght - 11x14 inches', 'Rodentia - 18x12 inches', 'The Waters of Eschaton - 12x18 inches'];

function startLightBox(event) {
	// Get the modal
	var modal = document.getElementById('myModal');
	index = parseInt(event.target.id);

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById(index);
	var modalImg = document.getElementById("img");
	var captionText = titles[index];
    modal.style.display = "block";
    modalImg.src = images[index];

    var caption = document.getElementById("caption");
    caption.innerHTML = captionText;

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	    modal.style.display = "none";
	}

	model.onclick = function() {
		modal.style.display = "none";
	}

}