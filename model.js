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
    var model = {
      board: [],
      player1: {isComputer: false},
      player2: {isComputer: false},
      numMoves: 0,
      isPlayer1Turn: false,
      isPlayer2Turn: false,
      isGamePaused: true,
      hasWinner: false,
      isPlayer1Winner: false,
      isPlaeyr2Winner: false,
      isTied: false,
      get state(){
        var stateObj = {
          board: Array.from(this.board),
          isPlayer1Computer: this.player1.isComputer,
          isPlayer2Computer: this.player2.isComputer,
          isPlayer1Turn: this.isPlayer1Turn,
          isPlayer2Turn: this.isPlayer2Turn,
          numMoves: this.numMoves,
          hasWinner: this.hasWinner,
          isPlayer1Winner: this.isPlayer1Winner,
          isPlayer2Winner: this.isPlayer2Winner,
          isTied: this.isTied
        }
        return stateObj;
      },
      move: function(number){
        checkIfValid = function(){};
      },
      reset: function(){
      }
      
            
        
      };//end of model declaration/initializtion
      return model};//end anonymous function
    
    
    
  
  }()
);
