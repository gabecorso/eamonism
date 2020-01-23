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
				
				"https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/Vision-of-a-Dying-Crab----compressed-for-site-6-4-19.jpg",
				"https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/Vision-of-a-Dying-Crab-II----compressed-for-site-6-4-19.jpg",
				"https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/crab-drawing----IG-version----8.5x5-6-16-19.jpg",
				"https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/The-Botany-Cipher-compressed-for-site-6-4-19.jpg",

			  "https://s3.amazonaws.com/eamonism/Capragraph2.jpg",
			  
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


			  "https://s3.amazonaws.com/eamonism/birdSticker.png", 
			  "https://s3.amazonaws.com/eamonism/fishSticker.png",

			  "https://s3.amazonaws.com/eamonism/birdSticker.png", 
			  "https://s3.amazonaws.com/eamonism/fishSticker.png",    


			  "https://eamonism.s3.amazonaws.com/At-The-Gates-of-Paradise--10.5x13.5----Compressed-for-Site.jpg",
			  "https://eamonism.s3.amazonaws.com/Minotaur-in-the-Labyrinth--compressed-for-site.jpg",

			  "https://eamonism.s3.amazonaws.com/pomegranate-metamorphosis-compressed-for-web.jpg",
			  'https://eamonism.s3.amazonaws.com/At-The-Gates-of-Paradise-II----11x15----Compressed-for-site.jpg',
					'https://eamonism.s3.amazonaws.com/Bird-to-Whistle-on-9x12----compressed.jpg',
	"https://eamonism.s3.amazonaws.com/Fish-Metamorphosis-.jpg"
	      		]

// holds the titles of all the images
var titles = [  'Vision of a Dying Crab (1st Ed.) - 11x14 inches', 'Vision of a Dying Crab II (1st Ed.) - 11x14 inches', 'Crab (1st Ed.) - 12x9 inches',  

				'The Botany Cipher (1st Ed.) - 9x12 inches', 'Capragraph II (1st. Ed.) - 10x14 inches', 'The Hunters (1st Ed.) - 11x15 inches', 

				'Capragraph (1st Ed.) - 11x15', 'Augury (1st Ed.) - 12x16 inches', 'Castilla (1st Ed.) - 11x14 inches', 

				  "Mind's Eyedrops (1st Ed.) - 11x15 inches",

				  'Savannah of the Waning Gibbous (1st Ed.) - 9x12 inches', 

				'Rodentia (1st Ed.) - 18x12 inches', 'Dream of Queen Meabh (1st Ed.) - 9x12 inches', 'Psyght (1st Ed.) - 11x14 inches',

				 'Ornithograph (2nd Ed.) - 12x16 inches', 

				 'The Font of Eschaton (2nd Ed.) - 11x15 inches', 'Ichthyograph (2nd Ed.) - 8x8 inches', 

				 'Ornithograph II (3rd Ed.) - 12x16 inches', 'Las Granadas (2nd Ed.) - 11x17 inches',

				 'Illuminette (2nd Ed.) - 9x12 inches', 'Prince Prospero (2nd Ed.) - 11x15 inches',

				 

				'Large Bird Sticker - 7x6.74 inches', 'Large Fish Sticker - 6.86x5.5 inches', 'Small Bird Sticker - 4x3.86 inches', 'Small Fish Sticker - 4x3.22 inches',

				 'At the Gates of Paradise (1st Ed.) - 11x14 inches',
				 'Minotaur in the Labyrinth - 11x14 inches',
					'Metamorphosis of Pomegranate and Pocketwatch - 8x10 inches',

					'At the Gates of Paradise II - 11x15 inches',

					'Bird-Whistle Metamorphosis - 11x15 inches',

					'Metamorphosis of Angelfish and Archipelago - 11x15 inches'

				

				];

function startLightBox(event) {
	index = parseInt(event.target.id);




	if(index == 0) {	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');
	    price.innerHTML = "$110";
	    var price_caption = document.getElementById('price_caption');
	    document.getElementById('price_input').value = 82;

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$82';

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}

	else if(index == 1) {	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');
	    price.innerHTML = "$120";
	    document.getElementById('price_input').value = 90;

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;
		var price_caption = document.getElementById('price_caption');

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$90';

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}

	else if(index == 2) {	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];
		var price_caption = document.getElementById('price_caption');
	    var price = document.getElementById('price');
	    price.innerHTML = "$50";
	    document.getElementById('price_input').value = 37;

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$37';

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}

	else if(index == 3) {	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');

		var price_caption = document.getElementById('price_caption');
	    price.innerHTML = "$45";
	    document.getElementById('price_input').value = 33;

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$33';

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}
	else if(index == 5) {	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');
	    price.innerHTML = "$60";

		var price_caption = document.getElementById('price_caption');
	    document.getElementById('price_input').value = 45;

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$45';

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}

	else if(index < 6) {	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');
	    price.innerHTML = "$60";
	    document.getElementById('price_input').value = 45;

		var sale_price = document.getElementById('sale_price');

		var price_caption = document.getElementById('price_caption');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$45';



	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}

	else if(index == 8) {	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var price_caption = document.getElementById('price_caption');
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');
	    price.innerHTML = "$45";
	    document.getElementById('price_input').value = 33;

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$33';

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}

	else if(index == 10) {	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];
		var price_caption = document.getElementById('price_caption');
	    var price = document.getElementById('price');
	    price.innerHTML = "$45";
	    document.getElementById('price_input').value = 35;

		price.classList.add('sale');

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$33';

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}

	else if(index == 11) {	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');

		var price_caption = document.getElementById('price_caption');
	    price.innerHTML = "$45";
	    document.getElementById('price_input').value = 35;

		price.classList.add('sale');

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$33';

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}

	else if(index == 13) {	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');

		var price_caption = document.getElementById('price_caption');
	    price.innerHTML = "$45";
	    document.getElementById('price_input').value = 33;

		price.classList.add('sale');

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$33';

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}

	else if(index < 15) {	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');
	    price.innerHTML = "$50";
	    document.getElementById('price_input').value = 37;

		var price_caption = document.getElementById('price_caption');

		price.classList.add('sale');

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$37';

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}

	else if(index == 15){	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];

		var price_caption = document.getElementById('price_caption');
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');
	    price.innerHTML = "$90";
	    document.getElementById('price_input').value = 67;

		price.classList.add('sale');

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$67';

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}
	
	else if(index == 17){	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');
	    price.innerHTML = "$60";
	    document.getElementById('price_input').value = 45;

		price.classList.add('sale');

		var price_caption = document.getElementById('price_caption');

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$45';

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}

	else if(index < 20){	// Get the modal
		var modal = document.getElementById('myModal');


		var price_caption = document.getElementById('price_caption');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');
	    price.innerHTML = "$50";
	    document.getElementById('price_input').value = 37;

		price.classList.add('sale');

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$37';

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}

	else if(index == 20){	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');
	    price.innerHTML = "$90";
		var price_caption = document.getElementById('price_caption');
	    document.getElementById('price_input').value = 67;

		price.classList.add('sale');

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$67';

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}




	else if(index < 23){	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

		var price_caption = document.getElementById('price_caption');

	    var price = document.getElementById('price');
	    price.innerHTML = "$6";
	    document.getElementById('price_input').value = 4;

		price.classList.add('sale');

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$4';

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}
		else if(index == 25) {	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');
	    price.innerHTML = "$90 ";
	    document.getElementById('price_input').value = 67;


		price.classList.add('sale');

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$67';

		var price_caption = document.getElementById('price_caption');
		price_caption.innerHTML = " - Inquire for custom sizing";


		var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}

	else if(index == 26) {	// Get the modal
		var modal = document.getElementById('myModal');
		

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
	    modal.style.display = "block";
	    modalImg.src = images[index];

	    var price = document.getElementById('price');
	    price.innerHTML = "$95 ";
	    document.getElementById('price_input').value = 71;


		price.classList.add('sale');

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$71';

		var price_caption = document.getElementById('price_caption');
		price_caption.innerHTML = " - Inquire for custom sizing";

	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}
	else if(index == 27) {	// Get the modal
		var modal = document.getElementById('myModal');


		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
		modal.style.display = "block";
		modalImg.src = images[index];

		var price = document.getElementById('price');
		price.innerHTML = "$85 ";
		document.getElementById('price_input').value = 63;


		price.classList.add('sale');

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$63';

		var price_caption = document.getElementById('price_caption');
		price_caption.innerHTML = " - (8x10s -- $75 -- available upon request)";

		var caption = document.getElementById("caption");
		caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}
	else if(index == 28) {	// Get the modal
		var modal = document.getElementById('myModal');


		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
		modal.style.display = "block";
		modalImg.src = images[index];

		var price = document.getElementById('price');
		price.innerHTML = "$100 ";
		document.getElementById('price_input').value = 75;



		price.classList.add('sale');

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$75';

		var price_caption = document.getElementById('price_caption');
		price_caption.innerHTML = " - Inquire for custom sizing";


		var caption = document.getElementById("caption");
		caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}
	else if(index == 29) {	// Get the modal
		var modal = document.getElementById('myModal');


		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
		modal.style.display = "block";
		modalImg.src = images[index];

		var price = document.getElementById('price');
		price.innerHTML = "$85";


		price.classList.add('sale');

		var price_caption = document.getElementById('price_caption');
		price_caption.innerHTML = " - (8x10s | 9x12s - $75 | $80 - available upon request)";
		document.getElementById('price_input').value = 63;



		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$63';

		//populate the drop down with variants

		var caption = document.getElementById("caption");
		caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
price_caption.innerHTML = "";
		}
	}
	else if(index == 30) {	// Get the modal
		var modal = document.getElementById('myModal');


		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(index);
		var modalImg = document.getElementById("img");
		var captionText = titles[index];
		document.getElementById('item_name').value = titles[index];
		modal.style.display = "block";
		modalImg.src = images[index];

		var price = document.getElementById('price');
		price.innerHTML = "$85";



		var price_caption = document.getElementById('price_caption');
		price_caption.innerHTML = " - (8x15s | 9x12s - $75 | $80 - available upon request)";
		document.getElementById('price_input').value = 85;


		//populate the drop down with variants

		var caption = document.getElementById("caption");
		caption.innerHTML = captionText;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
			price_caption.innerHTML = "";
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

		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = '$3';
		var price_caption = document.getElementById('price_caption');
		




	    var caption = document.getElementById("caption");
	    caption.innerHTML = captionText;
	     document.getElementById('price_input').value = 3;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal.style.display = "none";
			price_caption.innerHTML = "";

		}
	}
}

	