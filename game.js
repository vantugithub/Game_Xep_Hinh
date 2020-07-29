class game {
	constructor()
	{
		this.init();
	}
	init()
	{

		this.board = new board(this);

		this.brick = new brick(this);
		
		this.listenKeyBoard();
		
		this.startGame();

		this.loop();
	}

	startGame()
	{
		setInterval( ()=> {
			this.brick.fall();
		},500);
	}

	creatNewBrick()
	{
		this.brick = new brick(this);
	}

	listenKeyBoard()
	{
		document.addEventListener('keydown', (event) => {
			switch(event.code){
				case 'ArrowLeft' : this.brick.moveLeft(); break;
				case 'ArrowRight' : this.brick.moveRight(); break;
				case 'ArrowUp' :  this.brick.tranSlate() ;break;
				case 'ArrowDown' :this.brick.moveDown() ; break;
			}
		});
	}

	loop()
	{
		this.draw();
		setTimeout(()=>this.loop(),5);
	}

	clearScreen()
	{
		context.fillStyle='#ffffff';
		context.fillRect(0,0,GAME_WIDTH,GAME_HEIGHT);
	}

	draw()
	{
		this.clearScreen();
		this.board.draw();
		this.brick.draw();
	}

}

var g = new game();