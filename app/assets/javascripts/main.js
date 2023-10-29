$(document).ready(function(){
    setInterval(function() {
    	changeImage()
  	},2000);
});

function changeImage() {
	document.getElementById('bird').src = 'https://s3.amazonaws.com/eamonism/colorbird.png';
}

const stock = [
	//0-2
	{
		title: "Vision of a Dying Crab (1st Ed.) - 11x14 inches",
		image: "https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/Vision-of-a-Dying-Crab----compressed-for-site-6-4-19.jpg",
		price: 85,
		onSale: false,
		salePrice: 68,
		id: 0
	},
	{
		title: "Vision of a Dying Crab II (1st Ed.) - 11x14 inches",
		image: "https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/Vision-of-a-Dying-Crab-II----compressed-for-site-6-4-19.jpg",
		price: 85,
		onSale: false,
		salePrice: 68,
		id: 1
	},
	{
		title: "Crab (1st Ed.) - 12x9 inches",
		image: "https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/crab-drawing----IG-version----8.5x5-6-16-19.jpg",
		price: 50,
		onSale: false,
		salePrice: 40,
		id: 2
	},
	//3-5
	{
		title: "The Botany Cipher (1st Ed.) - 9x12 inches",
		image: "https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/The-Botany-Cipher-compressed-for-site-6-4-19.jpg",
		price: 50,
		onSale: false,
		salePrice: 40,
		id: 3
	},
	{title: "Capragraph II (3rd. Ed.) - 11x14 inches", image: "https://s3.amazonaws.com/eamonism/Capragraph2.jpg",
		price: 75, onSale: false, salePrice: 60, id: 4},
	{title: "The Hunters (1st Ed.) - 11x15 inches", image: "https://s3.amazonaws.com/eamonism/Hunters.jpg",
		price: 60, onSale: false, salePrice: 48, id: 5},
	//6-8
	{title: "Capragraph (1st Ed.) - 11x15", image: "https://s3.amazonaws.com/eamonism/Capragraph.jpg",
		price: 60, onSale: false, salePrice: 48, id: 6},
	{title: "Augury (1st Ed.) - 12x16 inches", image: "https://s3.amazonaws.com/eamonism/Augury.jpg",
		price: 50, onSale: false, salePrice: 40, id: 7},
	{title: "Castilla (1st Ed.) - 11x14 inches", image: "https://s3.amazonaws.com/eamonism/Castilla.jpg",
		price: 50, onSale: false, salePrice: 40, id: 8},
	//9-11
	{title: "Mind's Eyedrops (1st Ed.) - 11x15 inches", image: "https://s3.amazonaws.com/eamonism/MindsEyedrops.jpg",
		price: 50, onSale: false, salePrice: 40, id: 9},
	{title: "Savannah of the Waning Gibbous (1st Ed.) - 9x12 inches", image: "https://s3.amazonaws.com/eamonism/port11.jpg",
		price: 50, onSale: false, salePrice: 40, id: 10},
	{title: "Rodentia (1st Ed.) - 18x12 inches", image: "https://s3.amazonaws.com/eamonism/Rodentia.jpg",
		price: 50, onSale: false, salePrice: 40, id: 11},
	//12-14
	{title: "Dream of Queen Meabh (1st Ed.) - 9x12 inches", image: "https://s3.amazonaws.com/eamonism/DreamofQueenMeabh.jpg",
		price: 50, onSale: false, salePrice: 40, id: 12},
	{title: "Psyght (1st Ed.) - 11x14 inches", image: "https://s3.amazonaws.com/eamonism/Psyght.jpg",
		price: 50, onSale: false, salePrice: 40, id: 13},
	{title: "Ornithograph (2nd Ed.) - 12x16 inches", image: "https://s3.amazonaws.com/eamonism/Ornithograph.jpg",
		price: 60, onSale: false, salePrice: 48, id: 14},
	//15-17
	{title: "The Font of Eschaton (3rd Ed.) - 11x15 inches", image: "https://s3.amazonaws.com/eamonism/port12.jpg",
		price: 90, onSale: false, salePrice: 72, id: 15},
	{title: "Ichthyograph (2nd Ed.) - 8x8 inches", image: "https://s3.amazonaws.com/eamonism/GildedFish.jpg",
		price: 50, onSale: false, salePrice: 40, id: 16},
	{title: "Ornithograph II (3rd Ed.) - 12x16 inches", image: "https://s3.amazonaws.com/eamonism/port10.jpg",
		price: 60, onSale: false, salePrice: 48, id: 17},
	//18-20
	{title: "Las Granadas (2nd Ed.) - 11x17 inches", image: "https://s3.amazonaws.com/eamonism/Granadas.jpg",
		price: 60, onSale: false, salePrice: 48, id: 18},
	{title: "Illuminette (2nd Ed.) - 9x12 inches", image: "https://s3.amazonaws.com/eamonism/Illuminette.jpg",
		price: 50, onSale: false, salePrice: 40, id: 19},
	{title: "Prince Prospero (2nd Ed.) - 11x15 inches", image: "https://s3.amazonaws.com/eamonism/Prospero.jpg",
		price: 80, onSale: false, salePrice: 64, id: 20},
	//21-23
	{title: "Large Bird Sticker - 7x6.74 inches", image: "https://s3.amazonaws.com/eamonism/birdSticker.png",
		price: 6, onSale: false, salePrice: '', id: 21},
	{title: "Large Fish Sticker - 6.86x5.5 inches", image: "https://s3.amazonaws.com/eamonism/fishSticker.png",
		price: 6, onSale: false, salePrice: '', id: 22},
	{title: "Small Bird Sticker - 4x3.86 inches", image: "https://s3.amazonaws.com/eamonism/birdSticker.png",
		price: 4, onSale: false, salePrice: '', id: 23},
	//24-26
	{title: "Small Fish Sticker - 4x3.22 inches", image: "https://s3.amazonaws.com/eamonism/fishSticker.png",
		price: 4, onSale: false, salePrice: '', id: 24},
	{title: "At the Gates of Paradise (1st Ed.) - 11x14 inches", image: "https://eamonism.s3.amazonaws.com/At-The-Gates-of-Paradise--10.5x13.5----Compressed-for-Site.jpg",
		price: 85, onSale: false, salePrice: 68, id: 25},
	{title: "Minotaur in the Labyrinth - 11x14 inches", image: "https://eamonism.s3.amazonaws.com/Minotaur-in-the-Labyrinth--compressed-for-site.jpg",
		price: 60, onSale: false, salePrice: 48, id: 26},
	//27-29
	{title: "Metamorphosis of Pomegranate and Pocketwatch - 9x12 inches", image: "https://eamonism.s3.amazonaws.com/pomegranate-metamorphosis-compressed-for-web.jpg",
		price: 80, onSale: false, salePrice: 64, id: 27},
	{title: "At the Gates of Paradise II (2nd Edition) - 11x15 inches", image: "https://eamonism.s3.amazonaws.com/At-The-Gates-of-Paradise-II----11x15----Compressed-for-site.jpg",
		price: 85, onSale: false, salePrice: 68, id: 28},
	{title: "Bird-Whistle Metamorphosis - 9x12 inches", image: "https://eamonism.s3.amazonaws.com/Bird-to-Whistle-on-9x12----compressed.jpg",
		price: 80, onSale: false, salePrice: 64, id: 29},
	//30-32
	{title: "Metamorphosis of Angelfish and Archipelago - 9x12 inches", image: "https://eamonism.s3.amazonaws.com/Fish-Metamorphosis-.jpg",
		price: 80, onSale: false, salePrice: 64, id: 30},
	{
		title: "Portrait of Infatuation - 11x14 inches",
		image: "https://eamonism.s3.amazonaws.com/Portrait-of-Infatuation---grayscale-11x14--compressed-for-site.png",
		price: 85, onSale: false, salePrice: 68, id: 31},
	{
		title: "Portrait of Infatuation II - 11x14 inches",
		image: "https://eamonism.s3.amazonaws.com/Portrait-of-Infatuation-II---11-x-14--compressed-for-site.png",
		price: 85, onSale: false, salePrice: 68, id: 32},
	//33-35
	{
		title: "Oasis - 9x12 inches",
		image: "https://eamonism.s3.amazonaws.com/Oasis---final---9x12----compressed-for-site.png",
		price: 80, onSale: false, salePrice: 64, id: 33
	},
	{
		title: "Metamorphosis of Crocodile and Pistol - 9x12 inches",
		image: "https://eamonism.s3.amazonaws.com/Crocodile-Pistol-Metamorphosis----compressed-for-site.png",
		price: 80, onSale: false, salePrice: 64, id: 34
	},
	{
		title: "Metamorphosis of Crab and Throne - 9x12 inches",
		image: "https://eamonism.s3.amazonaws.com/Metamorphosis-of-Crab-and-Throne----compressed-for-site.png",
		price: 80,
		onSale: false,
		salePrice: 64,
		id: 35
	},
	//36
	{
		title: "Creation Myth - 9x12 inches",
		image: "https://eamonism.s3.amazonaws.com/Creation-Myth---compressed-for-site.png",
		price: 80,
		onSale: false,
		salePrice: 64,
		id: 36
	},
	{
		title: "Benediction - 12x12 inches",
		image: "https://eamonism.s3.amazonaws.com/Benediction--12x12--compressed.png",
		price: 75,
		onSale: false,
		salePrice: 60,
		id: 37
	},
	{
		title: "Cradle of Civilization - 11x14 inches",
		image: "https://eamonism.s3.amazonaws.com/Cradle-of-Civilization---draft-compressed.png",
		price: 75,
		onSale: false,
		salePrice: 60,
		id: 38
	},
	{
		title: "Cradle of Civilization II - 11x14 inches",
		image: "https://eamonism.s3.amazonaws.com/Cradle-of-Civilization-II----compressed-for-site.png",
		price: 75,
		onSale: false,
		salePrice: 60,
		id: 39
	},
	{
		title: "Death of the Minotaur - 11x15in",
		image: "https://eamonism.s3.amazonaws.com/Death-of-the-Minotaur---Flattened-on-White.png",
		price: 85,
		onSale: false,
		salePrice: 60,
		id: 42
	},
	{
		title: "Clarity - 11x14in",
		image: "https://eamonism.s3.amazonaws.com/Clarity---Merged---Compressed.png",
		price: 75,
		onSale: false,
		salePrice: 60,
		id: 43
	},
	{
		title: "House of Timur - 11x14in",
		image: "https://eamonism.s3.amazonaws.com/House-of-Timur----Compressed.png",
		price: 75,
		onSale: false,
		salePrice: 60,
		id: 44
	},
	{
		title: "Jellyfish I - 12x12in",
		image: "https://eamonism.s3.amazonaws.com/Jellyfish-Square---Compressed-v2.png",
		price: 75,
		onSale: false,
		salePrice: 60,
		id: 45
	},
	{
		title: "Jellyfish II - 11x14in",
		image: "https://eamonism.s3.amazonaws.com/Jellyfish-II----compressed.png",
		price: 75,
		onSale: false,
		salePrice: 60,
		id: 46
	},
	{
		title: "Botany Cipher - Miniature - 5x7in",
		image: "https://eamonism.s3.amazonaws.com/Botany-Cipher--5x7--Compressed-for-site.jpg",
		price: 15,
		onSale: false,
		salePrice: 60,
		id: 47
	},
	{
		title: "Astrolabe Infinity - Miniature - 5x7in",
		image: "https://eamonism.s3.amazonaws.com/Astrolabe-Infinity---5x7---compressed-for-site.png",
		price: 15,
		onSale: false,
		salePrice: 60,
		id: 48
	},
	{
		title: "Mind's Eyedrops - Miniature - 5x7in",
		image: "https://eamonism.s3.amazonaws.com/Mind's-Eyedrops---5x7--Compressed-for-site.jpg",
		price: 15,
		onSale: false,
		salePrice: 60,
		id: 49
	},
	{
		title: "Ichthyograph II - Miniature - 5x7in",
		image: "https://eamonism.s3.amazonaws.com/Fish----5x7----Compressed-for-site.jpg",
		price: 15,
		onSale: false,
		salePrice: 60,
		id: 50
	},
	{
		title: "Ornithograph II - Miniature - 5x7in",
		image: "https://eamonism.s3.amazonaws.com/Bird----5x7----Compressed-for-site.jpg",
		price: 15,
		onSale: false,
		salePrice: 60,
		id: 51
	},
	{
		title: "Capragraph II - Miniature - 5x7in",
		image: "https://eamonism.s3.amazonaws.com/Ibex----5x7----Compressed-for-site.jpg",
		price: 15,
		onSale: false,
		salePrice: 60,
		id: 52
	},
	{
		title: "Heartbeat - 11x14in",
		image: "https://eamonism.s3.amazonaws.com/Heartbeat--compressed-for-site.jpg",
		price: 75,
		onSale: false,
		salePrice: 60,
		id: 53
	},
	{
		title: "Vanitas - 11x14in",
		image: "https://eamonism.s3.amazonaws.com/Vanitas--compressed-for-site.png",
		price: 75,
		onSale: false,
		salePrice: 60,
		id: 54
	},
	{
		title: "Abstraction - 12x12in",
		image: "https://eamonism.s3.amazonaws.com/Abstraction-12x12---Compressed-for-website.png",
		price: 60,
		onSale: false,
		salePrice: 60,
		id: 55
	},



	//56 and 57 (Stickers Small)
	{title: "Capragraph Sticker - 4x3.86 inches", image: "https://eamonism.s3.amazonaws.com/Capragraph+Sticker.png",
		price: 4, onSale: false, salePrice: '', id: 56},
	{title: "Tri Hard Sticker - 4x3.86 inches", image: "https://eamonism.s3.amazonaws.com/Tri-Hard+Sticker+Image.png",
		price: 4, onSale: false, salePrice: '', id: 57},
]

var index;

function startLightBox(event) {
	index = parseInt(event.target.id);
	const title = stock[index] && stock[index].title;
	const image = stock[index] && stock[index].image;
	const onSale = stock[index] && stock[index].onSale;
	const salePrice = stock[index] && stock[index].salePrice;
	const _price = stock[index] && stock[index].price;

	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var modalImg = document.getElementById("img");
	var captionText = title;
	document.getElementById('item_name').value = title;
	modal.style.display = "block";
	modalImg.src = image;
	var price = document.getElementById('price');
	price.innerHTML = `$${_price}`;
	var price_caption = document.getElementById('price_caption');
	document.getElementById('price_input').value = _price;
	var caption = document.getElementById("caption");
	caption.innerHTML = captionText;
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	if(onSale) {
		price.classList.add('sale');
		document.getElementById('price_input').value = salePrice;
		var sale_price = document.getElementById('sale_price');
		sale_price.style.display = "inline-block";
		sale_price.innerHTML = `$${salePrice}`;
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
		price_caption.innerHTML = "";
		sale_price.style.display = "none";
		price.classList.remove('sale');
	};
}

	