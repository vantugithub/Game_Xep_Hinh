	class brick
	{

		constructor(game)
	{
		this.game = game;
		this.dots = [];
		this.data = [];
		this.row = 0;
		this.col = 4;
		this.creatData();
		this.creatDots();
		
	}
	

	creatData()
	{
		let baseData=[

		[		
				[x,x],
				[x,x]
		],

		[
				[x,x,x,x]
		],

		[
				[x,x,_],
				[_,x,x]
		],

		[
				[_,x,x],
				[x,x,_]
		],

		[
				[x,x,x],
				[_,x,_]
		],

		[
				[x,_],
				[x,_],
				[x,x]
		],

		[
				[_,x],
				[_,x],
				[x,x]
		]

		];

		let r = Math.floor(Math.random()*7);
		this.data = baseData[r];
	}

	randomColors()
	{
		let r = Math.floor(Math.random()*8)
		return r;
	}

	creatDots()
	{
		this.dots = [];
		for (let row = 0; row < this.data.length ; row++ ) {
			for ( let col = 0 ; col < this.data[0].length ; col++ ) {
				if(this.data[row][col] == x ) {
					let newDots = new dot(this.game,row+this.row,col+this.col);
					this.dots.push(newDots);
				}
			}
		}
	}

	tranSlate()
	{
		let newData = [];
		for (let i = this.data[0].length - 1 ; i >= 0  ; i--) 
		{
			let newRow = [];

			for ( let j = 0  ;  j < this.data.length  ; j++) 
			{
				 newRow.push(this.data[j][i]);
			}
			newData.push(newRow);
		}
		
		let check = true;

		if(newData[0].length+4+this.col >= 15 || newData.length+this.row >= 20 )
		{
			check = false;
		}

		for ( let newRow = 0 ; newRow < newData.length ; newRow++)
		{
			for ( let newCol = 0 ; newCol < newData[0].length ; newCol++)
			{
				if(newData[newRow][newCol]==x && !this.game.board.checkEmptyCell(newRow+this.row,newCol+this.col) ) 
					{
						check = false;
					}
			}
		}

		if(check==true)
		{
		this.data = newData;
		this.creatDots();
		}
		else return false;
		
	}

	canFall()
	{
		let checkFall = true;
		this.dots.forEach( (dot) => {
			if(!dot.canFall()) {
				checkFall=false;
			}
		});
		return checkFall;
	}

	fall()
	{
		if(this.game.board.checkGame() > 0)
		{
			this.game.board.reset();
			this.game.board.score = 0;
			scoreElement.innerHTML = this.game.board.score;
		}
		else if(this.canFall()==true)
		{
			this.row++;
			this.dots.forEach((dot) => {
				dot.fall();
			});
		}
		else
		{
			this.game.creatNewBrick();
			this.appendToBoard();
			this.game.board.removeDraw();
		}
	}

	moveDown()
	{
		while(this.fall())
		{
			this.fall();
		}
	}


	appendToBoard()
	{
		this.dots.forEach((dot) => {
			this.game.board.data[dot.row][dot.col] = x ;
		});
	}


	canMoveRight()
	{
		let thisBrickCanMoveRight = true;
		this.dots.forEach((dot) => {
			if(!dot.checkMoveRight()){
				thisBrickCanMoveRight = false;
			}
		});
		return thisBrickCanMoveRight;
	}

	moveRight()
	{
		if(this.canMoveRight())
		{
			this.col++;
			this.dots.forEach((dot)=>{
				dot.moveRight();
			});
		}
	}

	canMoveLeft()
	{
		let thisBrickCanMoveLeft = true;
		this.dots.forEach((dot) => {
			if(!dot.checkMoveLeft())
			{
				thisBrickCanMoveLeft = false;
			}
		});
		return thisBrickCanMoveLeft;
	}			
	moveLeft()
	{
		if(this.canMoveLeft())
		{
			this.col--;
			this.dots.forEach((dot)=>{
				dot.moveLeft();
			});
		}
	}

	draw()
	{
		this.dots.forEach( (dot) => {
			dot.draw(); 
		});
	}

}