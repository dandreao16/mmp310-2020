var shoeImage, zaraImage, mySound

function preload() {
    shoeImage = loadImage('shoe.png');
    zaraImage = loadImage('zara.png');

        mySound = loadSound('jam.mp3');

    
}

/* position variables for images */
var shoe = []; // empty array

var numShoes = 25;


var zara = [];

var numZara = 1;

var b = 225;


function setup() {
	createCanvas(windowWidth, windowHeight);

	// add shoe positions
	let x = -50;
	for (let i = 0; i < numShoes; i++) {
		let x = random(height/3);
        
        let shoe = new Thing(x, y, shoeImage);
		
        
        // update x, distributing number of clouds across canvas
		x += width/numShoes + random(-100, 100);
		
	}

	// add zara positions
	let y = 250;
	for (let i = 0; i < numZara; i++) {
		let x = random(shoeImage.width, width - shoeImage.width);
		
		let shoe = new Thing(x, y, shoeImage);
		shoes.push(shoe);
		
        y += 30;
	}
    

}

function mousePressed() {
  mySound.play();
}

function draw() {
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