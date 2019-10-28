/*
var myObject ={
	myProperty : value,
	yourProperty : value,
	myMethod : function(){
	  //code here
	},
	yourMethod : function(){
	  //more code
	}
}
*/



const TTTmodel = (function(){
	var getBoard = function(){
		var grid = [];
		var singleton = null;
		if(singleton){
			return singleton;
		}
		else
		{
			singleton = function(){
			return grid;
		};
			
		return singleton;
		}
		
	};
	var player1 = {isComputer: false};
	var player2 = {isComputer: false};
	var numMoves = 0;
	var isPlayer1Turn = false;
	var isPlayer2Turn = false;
	var hasWinner = false;
	var isPlayer1Winner = false;
	var isPlayer2Winner = false;
	var isTied = false;
	var tryMove = function({moveTo: number}){};
	var checkIfValidMove = function({moveTo: number}){};
	var checkForGameOver = function({isPlayer1Turn = false, isPlayer2Turn = false, board}={}){};
	var resetGame = function(){};
	var getState = function(){
		var stateObj = {
			board: getBoard(),
			isPlayer1Computer,
			isPlayer2Computer,
			isPlayer1Turn,
			isPlayer2Turn,
			numMoves,
			hasWinner,
			isPlayer1Winner,
			isPlayer2Winner,
			isTied
		};
		return stateObj;
	};
	var model = {
		view: function(){
			return getState();
		},
		move: function(moveTo){
			return tryMove();
		},
		reset: function(){
			return resetGame();
		}
	};
	model.seal();
	return model;
})();
