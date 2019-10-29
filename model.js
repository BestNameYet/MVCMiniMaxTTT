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
	var player1 = [];
	var player2 = [];
	var numMoves = 0;
	var isPlayer1Turn = false;
	var hasWinner = false;
	var isPlayer1Winner = false;
	var isPlayer2Winner = false;
	var isTied = false;
	var tryMove = function({moveTo: number}){};
	var checkIfValidMove = function({moveTo: number}){};
	var checkForGameOver = function({player1, player2}={}){};
	var resetGame = function(){};
	var getState = function(){
		var stateObj = {
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
