
class board{
	constructor(game)
	{
		this.game = game;
		this.score = 0;
		this.data = [
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_],
		[_,_,_,_,_,_,_,_,_,_]
		];
	}
		checkTranSlate(temp)
		{
			let check = true;
			if(temp > NUM_COLS || temp > NUM_ROWS || temp < 0) check == false;
			return check;
		}

		checkEmptyCell(row,col)
		{
			if(this.data[row][col] == _ ){
				return this.data[row][col] == _ ;
			}
		}


		reset()
		{
			for ( let i = 0 ; i < NUM_ROWS ; i++) 
			{
				for ( let j  = 0 ; j < NUM_COLS ; j++ )
				{
					this.data[i][j] = _ ;
				}
			}
		}

			removeDraw()
		{

			let hight = 0;
			for ( let i = hight ; i < NUM_ROWS ; i++ )
			{
				let check = 0;
				for ( let j = 0 ; j < NUM_COLS ; j++ )
				{
					if(this.data[i][j]==x) check++;	
				}
				if(check == NUM_COLS)
				{
				 this.removeRow(i);
				 this.score = this.score+1;
				 console.log(this.score);
				 scoreElement.innerHTML = this.score;
				}
				else hight++;
			}
		}

		removeRow(roww)
		{
			for (let ii = roww ; ii > 0 ; ii--) 
			{
				let temp = ii-1;
				for (let j = 0 ; j <= 9 ; j++) 
				{
					this.data[ii][j] = this.data[temp][j];
				}
			}

		}

		draw()
		{
		let dots = [];
		for(let row = 0 ; row < NUM_ROWS ; row++)
		{
			for(let col = 0 ; col < NUM_COLS ; col++) 
			{
				if(this.data[row][col]==x) 
				{
					let newDots = new dot(this.game,row,col);
					dots.push(newDots);
				}
			}
		}
			dots.forEach((dot) => dot.draw());
		}
		checkGame()
		{
			let check  = 0;
			for(let i = 0  ; i <= 9  ; i++) 
			{
				if(this.data[0][i]==x)
				{
					check++;
				}
			}
			return check;
		}

	}
