var mallImage, zaraImage, glossierImage;

function preload() {

mallImage('mall.png');
zaraImage('zara.png');
glossierImage('glossier.png');



}


function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	// background colors
	background('lightblue');

	noStroke();
	fill('sandybrown');
	rect(0, height/2, width, height/2);

	fill('darkblue');
	rect(0, height * 2/3, width, height/3);

	// images
	
	// clouds
	for (let x = -50; x <= width; x += 200) {
		image(mallImage, x, 50 - x/10);
		image(mallImage, x, 200 - x/10);
	}

	// trees
	for (let x = 100; x <= width; x += 400) {
		image(zaraImage, x, height/2 - 150 + x/20);
	}

	// fish
	for (let x = -50; x <= width; x += 100) {
		image(glossierImage, x, height - 100);
		image(glossierImage, x + 50, height - 150);
		image(glossierImage, x, height - 200);
	}

}

