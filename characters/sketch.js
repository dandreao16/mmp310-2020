/*
	characters sketch
	1.27.2020
*/

// loading graphics
var jerry;  // var declaration
var jenny;

/* 
	runs before setup
	when preload is done, 
	setup gets called
*/
function preload() {
	jerry = loadImage('jerry.png');
	jenny = loadImage('jenny.png');
}

// location variables
var jerryX = 100;
var jerryY = 200;

var jennyX = 900;
var jennyY = 200;

var story = "On a random Sunday Afternoon, Alexis and Ruby went to the mall.";

var currentSetting = 'beach';


// runs once to set up browser
function setup() {

	createCanvas(windowWidth, windowHeight);
}

// runs 60fps draws graphics
function draw() {
	
	//conditional statement  
	if (currentSetting == "beach") {
	background('lightblue');

	fill('SANDYBROWN');
	noStroke();
	rect(0, height * 2/3, width, height * 1/3);
} 

   //ocean setting
   else if (currentSetting == "ocean") {
		background('lightblue');

		fill('darkblue');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);

		// fish
		image(fish, 100, height - 90);
		image(fish, 130, height - 120);
		image(fish, 70, height - 150);

	}

	// island setting 
	else if (currentSetting == "island") {
		background('lightblue');

		fill('darkblue');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);

		// island
		imageMode(CENTER);
		image(island, width/2, height * 2/3);
	}


   }
	// draw characters
	image(jerry, jerryX, jerryY);
	image(jenny, jennyX, jennyY);

	// narration
	textSize(30);
	textAlign(CENTER, CENTER);
	text(story, width/4, 20, width/2);
}