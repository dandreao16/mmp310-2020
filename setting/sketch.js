/*
	setting sketch
	2.3.2020
*/

var jerry;
var jenny;
var jenny0;
var jerry0;
var zara;
var mall;
var glossier;

function preload() {
	jerry = loadImage('jerry.png');
	jenny = loadImage('jenny.png');
	jenny0 = loadImage('jenny0.png');
	jerry0 = loadImage('jerry0.png');
    zara = loadImage('zara.png');
    mall = loadImage('mall.png');
    glossier = loadImage('glossier.png');
}

// location variables
var jerryX = 700;
var jerryY = 150;

var jennyX = 900;
var jennyY = 150;

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
		noStroke()
		rect(0, height * 2/3, width, height * 1/3);
        
        loadImage('mall.png');
		imageMode(CENTER);
		image(mall, width/4, height * 1/2);
	} 

	// ocean setting
	else if (currentSetting == "ocean") {
		background('blue');

		fill('blue');
		noStroke();
		rect(0, height * 2/3, width, height * 1/4);
        
        loadImage('zara.png');
		imageMode(CENTER);
		image(zara, width/4, height * 1/2);
		
	}

	// island setting 
	else if (currentSetting == "island") {
		background('purple');

		fill('purple');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);

        loadImage('glossier.png');
		imageMode(CENTER);
		image(glossier, width/4, height * 1/2);
		
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
	fill('black');
	// text("Click to go to the next scene", width - 100, height - 70, 100);
	text("click to advance story", width - 100, height - 70, 100);
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
		jerryX = 700;
		jennyX = 850;

	} else if (currentSetting == "ocean") {
		currentSetting = "island";
		story = "Then they went to Glossier, to buy some make-up.";

		jerryX = 650;
		jennyX = 850;

	} else if (currentSetting == "island") {
		currentSetting = "beach";
		story = "On a Saturday Afernoon, Alexis and Jade decided to go to the mall";

		jerryX = 700;
		jennyX = 900;
	}
}

