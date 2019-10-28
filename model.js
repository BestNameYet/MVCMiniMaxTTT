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
		var getState = function(){
			var stateObj = {
				board: Array.from(mainFunction.board),
				isPlayer1Computer: mainFunction.player1.isComputer,
				isPlayer2Computer: mainFunction.player2.isComputer,
				isPlayer1Turn: mainFunction.isPlayer1Turn,
				isPlayer2Turn: mainFunction.isPlayer2Turn,
				numMoves: mainFunction.numMoves,
				hasWinner: mainFunction.hasWinner,
				isPlayer1Winner: mainFunction.isPlayer1Winner,
				isPlayer2Winner: mainFunction.isPlayer2Winner,
				isTied: mainFunction.isTied
			};
			return stateObj;
		};
		var tryMove({number: number}) = function(){};
		var checkIfValid({number: number}) = function(){};
		var checkForWinner({player1, player2, board}={}){};
		var model = {
			move: function(number){
				checkIfValid = function(){};
			},
			reset: function(){}
		};



};//end of model declaration/initializtion
      return model};//end anonymous function
    
    
    
  
  }()
);
