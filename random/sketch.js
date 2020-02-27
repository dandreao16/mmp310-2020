var jerryImage;
var jennyImage;
var jenny0;
var jerry0;
var zaraimg;
var mallimg;
var glossierimg;
var shoeimg;


function preload() {
    jerryImage = loadImage('jerry.png');
	jennyImage = loadImage('jenny.png');
	jenny0 = loadImage('jenny0.png');
	jerry0 = loadImage('jerry0.png');
    zaraimg = loadImage('zara.png');
    mallimg = loadImage('mall.png');
    glossierimg = loadImage('glossier.png');
    shoeimg = loadImage('shoe.png');
    
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	setting();
}

function mousePressed() {
	setting();
}

function setting() {
	// background colors
	background('lightblue');

	noStroke();
	fill('pink');
	rect(0, height/2, width, height/2);

	fill('pink');
	rect(0, height * 2/3, width, height/3);

	// images

	// zara
	for (let x = 50; x <= width; x += 500) {
		image(zaraimg, x, height/2 - 50 + x/10);
	}

	// shoe
	for (let x = -50; x <= width; x += 200) {
		image(shoeimg, x, height - random(150));
		image(shoeimg, x + random(25), height - random(250));
		image(shoeimg, x, height - random(100));
	}

	// shoes
	for (let x = -50; x <= width; x += 200) {
		let y = random(height/3);
		let offset = random(-100, 100);
		image(shoeimg, x + offset, y);

		 image(shoeimg, random(width), random(height));
	}

}