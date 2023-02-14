console.log("Program1 start");

const TYPE_SNAKE = 'snake';
const TYPE_LADDER = 'ladder';

const PLAYER_STATE_PLAYING = "playing";
const PLAYER_STATE_WON = "won";

const ROLLS = 1000;


class Edge {

	constructor(eType, source, dest) {
		this.eType = eType;
		this.source = source;
		this.dest = dest;
	}
}

class Player {

	constructor(playerID, currentCellID) {
		this.playerID = playerID;
		this.state = 
		this.currentCellID = currentCellID;
	}

	humanPlayerID() {
		return this.playerID + 1;
	}
}

class Board {

	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.arr = new Array(x);
		for (var i = 0; i < x; i++) {
			this.arr[i] = new Array(y);
		}
		console.log("Internal Array created");
	}

	path(eType, source, dest) {
		let edge = new Edge(eType, source , dest);
		let coord = this.getXY(source);
		this.arr[coord.x][coord.y] = edge;
	}

	getDest(sourceCellID) {
		let coord = this.getXY(sourceCellID);
		if (this.arr[coord.x][coord.y]) {
			let edge = this.arr[coord.x][coord.y];
			return edge.dest;
		} else {
			return -1;
		}
	}

	getXY(inputCellNumber) {
		let x = Math.floor(((inputCellNumber-1)/this.x));
		let y = undefined;
		if(inputCellNumber % this.y == 0) {
			//This is last column
			y = this.y - 1;
		} else {
			y = (inputCellNumber % this.y) - 1;
		}
		if (x % 2 != 0) {
			//Odd row. We have to inverse y for this. 
			y = this.y - (y+1);
		}
		return {x,y}
	}
}

class SnakeGame {

	constructor(board, playerCount) {
		this.board = board;
		this.currentPlayer = 0;
		this.players = [];
		for (var i=0; i<playerCount; i++) {
			this.addPlayer();
		}
		this.winningCell = board.x * board.y;
	}

	addPlayer() {
		this.players.push(new Player(this.players.length, 1));
	}

	rollDice() {
		let playerID = this.currentPlayer;
		let targetPlayer = this.players[playerID];
		if (targetPlayer.state == PLAYER_STATE_WON) {
			console.log("Player: " + playerID + " Already won. so not rolling dice.");
			this.currentPlayer++;
			if (this.currentPlayer >= this.players.length) {
				this.currentPlayer = 0;
			}
			return;
		}
		let diceNumber = this.getDiceRandom(); //Make it random
		let newCellID = targetPlayer.currentCellID + diceNumber;
		if (newCellID > this.winningCell) {
			console.log("New Cell is greater than winning cell so invalid move");
		} else {
			//Player's cell is valid;
			let destCellID = this.board.getDest(newCellID);
			if (destCellID == -1) {
				//No ladder or snake
				targetPlayer.currentCellID = newCellID;
			} else {
				targetPlayer.currentCellID = destCellID;
			}
		}

		//Check if the current player reached winning cell.
		if (targetPlayer.currentCellID == this.winningCell) {
			targetPlayer.state = PLAYER_STATE_WON;
			console.log("Player - " + targetPlayer.humanPlayerID() + " WIN!!");
			if (!this.isAnyPlayerWon) {
				this.isAnyPlayerWon = true;
				this.firstWonPlayer = targetPlayer;
			}
		}
		this.currentPlayer++;
		if (this.currentPlayer >= this.players.length) {
			this.currentPlayer = 0;
		}
	}

	printPlayerPos() {
		for (const [playerID, player] of Object.entries(this.players)) {
			console.log("Player: " + player.playerID + " Pos:" + player.currentCellID);
		}
	}

	getDiceRandom() {
		let max = 6;
		let min = 1;
		return Math.floor(Math.random() * (max - min) + min);
	}
}

let board = new Board(6, 6);
board.path(TYPE_LADDER, 3, 16);
board.path(TYPE_SNAKE, 12, 2);
board.path(TYPE_LADDER, 15, 25);
board.path(TYPE_LADDER, 21, 32);
board.path(TYPE_SNAKE, 30, 4);
board.path(TYPE_SNAKE, 35, 22);

let snakeGame = new SnakeGame(board, 10);

for (var playCount = 0; playCount < ROLLS; playCount++) {
	snakeGame.rollDice();
	//snakeGame.printPlayerPos();
	if (snakeGame.isAnyPlayerWon) {
		break;
	}
}

if (snakeGame.isAnyPlayerWon) {
	console.log("First won player: " + snakeGame.firstWonPlayer.humanPlayerID());
} else {
	console.log("No player won for " + ROLLS + " rolls.")
}