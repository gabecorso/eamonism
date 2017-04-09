$(document).ready(function(){
    setInterval(function() {
    	changeImage()
  	},2000);
});

function changeImage() {
	document.getElementById('bird').src = 'https://s3.amazonaws.com/eamonism/colorbird.png';
}


var index;

var images = [


			  "https://s3.amazonaws.com/eamonism/Granadas.jpg",
			  "https://s3.amazonaws.com/eamonism/Hunters.jpg",
			  "https://s3.amazonaws.com/eamonism/Capragraph.jpg",

			  "https://s3.amazonaws.com/eamonism/Augury.jpg",
			  "https://s3.amazonaws.com/eamonism/Castilla.jpg", 
			  "https://s3.amazonaws.com/eamonism/Illuminette.jpg",
			  
			  
			  "https://s3.amazonaws.com/eamonism/GildedFish.jpg", 
			  "https://s3.amazonaws.com/eamonism/Ornithograph.jpg",
			  "https://s3.amazonaws.com/eamonism/MindsEyedrops.jpg", 

			  "https://s3.amazonaws.com/eamonism/port10.jpg",
			  "https://s3.amazonaws.com/eamonism/port11.jpg",
			  "https://s3.amazonaws.com/eamonism/port12.jpg",

			  
			  "https://s3.amazonaws.com/eamonism/Rodentia.jpg", 

			  "https://s3.amazonaws.com/eamonism/DreamofQueenMeabh.jpg", 

			  
			  "https://s3.amazonaws.com/eamonism/Psyght.jpg",


			  "https://s3.amazonaws.com/eamonism/birdSticker.png", 
			  "https://s3.amazonaws.com/eamonism/fishSticker.png",  
	      		]

// holds the titles of all the images
var titles = [ 'Las Granadas - 11x17 inches', 'The Hunters - 11x15 inches', 'Capragraph - 11x14.5', 'Augury - 12x16 inches', 'Castilla - 11x14 inches',  
   "Mind's Eyedrops - 11x15 inches",
'Rodentia - 18x12 inches', 'Psyght - 11x14 inches', 'Illuminette - 10x15 inches',  
'Ornithograph ii - 12x16 inches',  'Savannah of the Waning Gibbous - 12x18 inches', 'The Font of Eschaton - 12x18 inches', 'Ichthyograph - 17x11 inches', 'Dream of Queen Meabh - 12x18 inches', 'Ornithograph - 12x16 inches', 'Bird Sticker - 7x6.74 inches', 'Fish Sticker - 6.86x5.5 inches'];

function startLightBox(event) {
	index = parseInt(event.target.id);
	if(index < 15){	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');
	    price.innerHTML = "$15";
	    document.getElementById('price_input').value = 15;

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
		}
	}
	else{
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];
	    var price = document.getElementById('price');
	    price.innerHTML = "$8";
	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;
	     document.getElementById('price_input').value = 8;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
		}
	}
}

	