
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
var jerryX = 850;
var jerryY = 150;

var jennyX = 1090;
var jennyY = 150;

var story = "On a Saturday Afternoon, Alexis and Jade decided they were going to go to the mall.";

// mall, zara, glossier
var currentSetting = "mall";

function setup() {
	createCanvas(windowWidth, windowHeight);
	jerryY = height * 2/3;
	jennyY = height * 2/3;
}

function draw() {

	// conditional statement
	if (currentSetting == "mall") {
		background('lightblue');

		fill('darkgray');
		noStroke()
		rect(0, height * 2/3, width, height * 1/3);
        
        loadImage('mall.png');
		imageMode(CENTER);
		image(mall, width/4, height * 1/2);
	} 

	
	else if (currentSetting == "zara") {
		background('blue');

		fill('blue');
		noStroke();
		rect(0, height * 2/3, width, height * 1/4);
        
        loadImage('zara.png');
		imageMode(CENTER);
		image(zara, width/4, height * 1/2);
		
	}

	
	else if (currentSetting == "glossier") {
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
	textSize(27);
	textAlign(CENTER, CENTER);
	text(story, width/4, 20, width/2);

	// instructions
	textSize(18);
	fill('black');
	text("click to advance story", width - 100, height - 70, 100);
}

 function mall() {
        background('lightblue');
        fill('darkgray');
		noStroke()
		rect(0, height * 2/3, width, height * 1/3);
        
    
    }
    
    
    function zara() {
        background('blue');
        fill('blue');
		noStroke();
		rect(0, height * 2/3, width, height * 1/4);
        
    
    }
    
    
    function glossier()  {
        
        background('purple');
        fill('purple');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);

    
    
    
    }
    
    function mousedPressed () {
    
    
    }

	


function mousePressed() {
	
	if (currentSetting == "mall") {

		// change setting
		currentSetting = "zara";

		// update story
		story = "First, Alexis and Jade went to Zara.";

		// update characters position
		jerryX = 800;
		jennyX = 1000;

	} else if (currentSetting == "zara") {
		currentSetting = "glossier";
		story = "Then they went to Glossier, to buy some make-up.";

		jerryX = 800;
		jennyX = 1050;

	} else if (currentSetting == "glossier") {
		currentSetting = "mall";
		story = "On a Saturday Afernoon, Alexis and Jade decided to go to the mall";

		jerryX = 850;
		jennyX = 1090;
	}
}

