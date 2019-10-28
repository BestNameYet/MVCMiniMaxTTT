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



var TTTmodel = (
	function(){
		var board = [];
		var player1 = {isComputer: false};
		var player2 = {isComputer: false};
		var numMoves = 0;
		var isPlayer1Turn = false;
		var isPlayer2Turn = false;
		var isGamePaused = true;
		var hasWinner = false;
		var isPlayer1Winner = false;
		var isPlayer2Winner = false;
		var isTied = false;
		var mainFunction = this;
		var tryMove = function({moveTo: number}){};
		var checkIfValidMove = function({moveTo: number}){};
		var checkForWinner = function({isPlayer1Turn1, isPlayer2Turn, board}={}){};
		var resetGame = function(){};
		var getState = function(){
			var stateObj = {
				board,
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
		return model;
	})();
