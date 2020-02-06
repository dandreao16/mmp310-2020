/*
	setting sketch
	2.3.2020
*/

var jerry;
var jenny;
var jenny0;
var jerry0;

function preload() {
	jerry = loadImage('jerry.png');
	jenny = loadImage('jenny.png');
	jenny0 = loadImage('jenny0.png');
	jerry0 = loadImage('jerry0.png');
}

// location variables
var jerryX = 200;
var jerryY = 200;

var jennyX = 600;
var jennyY = 300;

var story = "On a Saturday Afternoon, Alexis and Jade decided they were going to go to the mall.";

// beach, ocean, island
var currentSetting = "beach";

function setup() {
	createCanvas(windowWidth, windowHeight);
	jerryY = height * 2/3;
	jennyY = height * 2/3;
}

function draw() {

	// conditional statement
	if (currentSetting == "beach") {
		background('lightblue');

		fill('darkgray');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);
	} 

	// ocean setting
	else if (currentSetting == "ocean") {
		background('lightblue');

		fill('darkblue');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);

		
	}

	// island setting 
	else if (currentSetting == "island") {
		background('lightblue');

		fill('darkblue');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);

		// island
		//imageMode(CENTER);
		//image(island, width/2, height * 2/3);
	}

	

	// draw characters
	imageMode(CENTER);
	image(jerry0, jerryX, jerryY);
	image(jenny0, jennyX, jennyY);

	// narration
	fill('black');
	textSize(30);
	textAlign(CENTER, CENTER);
	text(story, width/4, 20, width/2);

	// instructions
	textSize(18);
	fill('white');
	// text("Click to go to the next scene", width - 100, height - 70, 100);
	text("Right arrow to advance story", width - 100, height - 70, 100);
}

/*
	event listener
	user interaction with browser
	mousePressed
	p5 running in background to call this function when user clicks
*/

function mousePressed() {
	// change scene 
	// scene order: beach, ocean, island
	if (currentSetting == "beach") {

		// change setting
		currentSetting = "ocean";

		// update story
		story = "First, Alexis and Jade went to Zara.";

		// update characters position
		jerryX = 400;
		jennyX = 700;

	} else if (currentSetting == "ocean") {
		currentSetting = "island";
		story = "Then they went to Glossier, to buy some make-up.";

		jerryX =
		jennyX = 700;

	} else if (currentSetting == "island") {
		currentSetting = "beach";
		story = "On a Saturday Afernoon, Alexis and Jade decided to go to the mall";

		jerryX = 100;
		jennyX = 300;
	}
}

function keyPressed() {
	
	// test the keycode 
	if (keyCode == 39) {
		// change scene 
		// scene order: beach, ocean, island
		if (currentSetting == "beach") {

			// change setting
			currentSetting = "ocean";

			// update story
			story = "Jerry and Jenny decided to swim across the ocean.";

			// update characters position
			jerryX = 400;
			jennyX = 500;

		} else if (currentSetting == "ocean") {
			currentSetting = "island";
			story = "Jerry and Jenny arrived at an island in the middle of the ocean.";

			jennyX = 600;

		} else if (currentSetting == "island") {
			currentSetting = "beach";
			story = "Once upon a time, there were two characters named Jenny and Jerry.";

			jerryX = 100;
			jennyX = 300;
		}
	}
}