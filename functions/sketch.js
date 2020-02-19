

var jerryImage;
var jennyImage;
var jenny0;
var jerry0;
var zaraimg;
var mallimg;
var glossierimg;

function preload() {
    jerryImage = loadImage('jerry.png');
	jennyImage = loadImage('jenny.png');
	jenny0 = loadImage('jenny0.png');
	jerry0 = loadImage('jerry0.png');
    zaraimg = loadImage('zara.png');
    mallimg = loadImage('mall.png');
    glossierimg = loadImage('glossier.png');
}

// location variables
    //var jerryX = 850;
    //var jerryY = 150;

    //var jennyX = 1090;
    //var jennyY = 150;

//var story = "On a Saturday Afternoon, Alexis and Jade decided they were going to go to the mall.";

// mall, zara, glossier
var currentSetting = "mall";

function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
}

function draw() {

	if (currentSetting == "mall") {
		
        mall();
        jerry(850, height * 2/3);
        jenny(1200, height * 2/3);
        narration("On a Saturday Afternoon, Alexis and Jade decided they were going to go to the mall.");
	
    } else if (currentSetting == "zara") {
		
        zara();
        jerry(850, height * 2/3);
        jenny(1200, height * 2/3);
        narration("First, Alexis and Jade went to Zara.");
	
    } else if (currentSetting == "glossier") {
		
        glossier();
        jerry(850, height * 2/3);
        jenny(1200, height * 2/3);
        narration("Then they went to Glossier, to buy some make-up.");
	
    } else if (currentSetting == "mall") { 
		
        mall();
        jerry(850, height * 2/3);
        jenny(1200, height * 2/3);
        narration("On a Saturday Afternoon, Alexis and Jade decided they were going to go to the mall.");
    }
    
    
        
}

function jerry(x, y) {
    
    image(jerryImage, x, y);

}
 
function jenny(x, y) {
    
    image(jennyImage, x, y);

}

function narration(story) {
       
       fill('black');
	   textSize(27);
	   textAlign(CENTER, CENTER);
	   text(story, width/4, 20, width/2);

}

function instructions() {
    textSize(18);
	fill('black');
	text("click to advance story", width - 100, height - 70, 100);

}

function mall() {
        background('lightblue');
        fill('darkgray');
		noStroke()
		rect(0, height * 2/3, width, height * 1/3);
     
        //mall
        loadImage('mall.png');
		image(mallimg, width/4, height * 1/2);
        
}
    
function zara() {
        background('blue');
        fill('blue');
		noStroke();
		rect(0, height * 2/3, width, height * 1/4);
        
        
        //zara
        loadImage('zara.png');
		image(zaraimg, width/4, height * 1/2);
		
    }
    
    
function glossier()  {
        
        background('purple');
        fill('purple');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);
        
        
        //glossier
        loadImage('glossier.png');
		image(glossierimg, width/4, height * 1/2);
		
    }
    
    
function mousePressed() {
	
	if (currentSetting == "mall") {
        currentSetting = "zara";
} else if (currentSetting == "zara") {
		currentSetting = "glossier";
} else if (currentSetting == "glossier") {
		currentSetting = "mall";
}


}

