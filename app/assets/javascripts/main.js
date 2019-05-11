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


			  
			  "https://s3.amazonaws.com/eamonism/Hunters.jpg",
			  "https://s3.amazonaws.com/eamonism/Capragraph.jpg",

			  "https://s3.amazonaws.com/eamonism/Augury.jpg",
			  "https://s3.amazonaws.com/eamonism/Castilla.jpg", 
			  
			  
			  "https://s3.amazonaws.com/eamonism/MindsEyedrops.jpg", 

			  "https://s3.amazonaws.com/eamonism/port11.jpg",

			  
			  "https://s3.amazonaws.com/eamonism/Rodentia.jpg", 
			  "https://s3.amazonaws.com/eamonism/DreamofQueenMeabh.jpg", 
			  "https://s3.amazonaws.com/eamonism/Psyght.jpg",


			  "https://s3.amazonaws.com/eamonism/Ornithograph.jpg",


			  "https://s3.amazonaws.com/eamonism/port12.jpg",
			  "https://s3.amazonaws.com/eamonism/GildedFish.jpg", 

			  "https://s3.amazonaws.com/eamonism/port10.jpg",

			  "https://s3.amazonaws.com/eamonism/Granadas.jpg",
			  "https://s3.amazonaws.com/eamonism/Illuminette.jpg",
			  "https://s3.amazonaws.com/eamonism/Prospero.jpg",

			  "https://s3.amazonaws.com/eamonism/Capragraph2.jpg",

			  "https://s3.amazonaws.com/eamonism/birdSticker.png", 
			  "https://s3.amazonaws.com/eamonism/fishSticker.png",

			  "https://s3.amazonaws.com/eamonism/birdSticker.png", 
			  "https://s3.amazonaws.com/eamonism/fishSticker.png",    
	      		]

// holds the titles of all the images
var titles = [  'The Hunters (1st Ed.) - 11x15 inches', 'Capragraph (1st Ed.) - 11x14.5',

				'Augury (1st Ed.) - 12x16 inches', 'Castilla (1st Ed.) - 11x14 inches', 

				  "Mind's Eyedrops (1st Ed.) - 11x15 inches",

				  'Savannah of the Waning Gibbous (1st Ed.) - 12x18 inches', 

				'Rodentia (1st Ed.) - 18x12 inches', 'Dream of Queen Meabh (1st Ed.) - 12x18 inches', 'Psyght (1st Ed.) - 11x14 inches',

				 'Ornithograph (2nd Ed.) - 12x16 inches', 

				 'The Font of Eschaton (2nd Ed.) - 12x18 inches', 'Ichthyograph (2nd Ed.) - 17x11 inches', 

				 'Ornithograph II (3rd Ed.) - 12x16 inches', 'Las Granadas (2nd Ed.) - 11x17 inches',

				 'Illuminette (2nd Ed.) - 10x15 inches', 'Prince Prospero (2nd Ed.) - 10.25x14.5 inches',

				 'Capragraph II (1st. Ed.) - 11x14.5 inches', 

				'Large Bird Sticker - 7x6.74 inches', 'Large Fish Sticker - 6.86x5.5 inches', 'Small Bird Sticker - 4x3.86 inches', 'Small Fish Sticker - 4x3.22 inches'];

function startLightBox(event) {
	index = parseInt(event.target.id);
	if(index < 9){	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');
	    price.innerHTML = "$20";
	    document.getElementById('price_input').value = 20;

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
		}
	}

	else if(index == 12 || index == 16){	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');
	    price.innerHTML = "$35";
	    document.getElementById('price_input').value = 35;

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
		}
	}
	
	else if(index < 17){	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');
	    price.innerHTML = "$25";
	    document.getElementById('price_input').value = 25;

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
		}
	}




	else if(index < 19){	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');
	    price.innerHTML = "$6";
	    document.getElementById('price_input').value = 6;

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
	    price.innerHTML = "$4";
	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;
	     document.getElementById('price_input').value = 4;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
		}
	}
}

	