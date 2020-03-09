var shoeImage, zaraImage, mySound

function preload() {
    shoeImage = loadImage('shoe.png');
    zaraImage = loadImage('zara.png');

        mySound = loadSound('jam.mp3');

    
}

/* position variables for images */
var shoeX = []; // empty array
var shoeY = [];
var numShoes = 25;


var zaraX = [];
var zaraY = [];
var numZara = 1;

var b = 225;


function setup() {
	createCanvas(windowWidth, windowHeight);

	// add shoe positions
	let x = -50;
	for (let i = 0; i < numShoes; i++) {
		shoeX.push( x );
		// update x, distributing number of clouds across canvas
		x += width/numShoes;
		shoeY.push( random(height/3) );
	}

	// add zara positions
	let y = 250;
	for (let i = 0; i < numZara; i++) {
		zaraX.push(random(zaraImage.width, width - zaraImage.width));
		zaraY.push(y);
		y += 30;
	}
    

}

function mousePressed() {
  mySound.play();
}


function draw() {

	textSize(18);
	fill('black');
	// text("Click to go to the next scene", width - 100, height - 70, 100);
	text("click for sound", width - 100, height - 70, 100);
	// background colors
	background (225, 75, random(225));
    
	// zara
	for (let i = 0; i < numZara; i++) {
		image(zaraImage, zaraX[i], zaraY[i]);
	}
    
    // draw shoes
	for (let i = 1; i < numShoes; i++) {
		image(shoeImage, shoeX[i], shoeY[i]);

		// animate x
		shoeY[i] += 2;

		// check if cloud is beyond right side of canvas
		if (shoeY[i] > height) {
			// reset cloud back to left side
			shoeY[i] = -shoeImage.height;
		}
	}

}