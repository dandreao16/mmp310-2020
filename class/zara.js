update()

let y = 250;
	for (let i = 0; i < numZara; i++) {
		let x = random(shoeImage.width, width - shoeImage.width);
		
		let shoe = new Thing(x, y, shoeImage);
		shoes.push(shoe);
		
        y +=30;
	}
    