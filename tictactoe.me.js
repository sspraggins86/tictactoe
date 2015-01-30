var tttApp = angular.module('tttApp', []);
tttApp.controller('tttController', function($scope) {

  $scope.newBoard = function(){
    $scope.board = [];
        for(var i=0; i<9; ++i){
            $scope.board.push({
                active:false,
                p1owns:false,
                p2owns:false
            });
        }
  }
  $scope.newBoard();

  $scope.player1 = [];
  $scope.player2 = [];
  var counter = 0;
  //var circles = document.getElementsByClassName("circles");

  $scope.cellClick = function(box) {
    if (box.active == false) {
      if (counter%2 === 0) {
        box.active = true;
        box.p1owns = true;
        // $scope.player1.push(box);
        console.log("player1");
        counter ++;
      } else {
        box.active = true;
        //box.addClass('x')
        $scope.player2.push(box);
        box.p2owns = true;
        console.log("player2");
        counter ++;
      }
    } else {
    console.log("taken");
    console.log("counter = " + counter);
    }

  };

});








   // for(var i = 0; i < circles.length; ++i){

   //  circles[i].addEventListener("click",function(){this.classList.add("x", "o");
   // });

   // };


  //  -var player1 = document.getElementsByClassName("x");

  // var player2 = document.getElementsByClassName("o");

  //   var startGame = function startGame(){
  //     document.turn = "player1";
  //   }

  //   var nextTurn = function nextTurn(circles) {
  //     circles = document.turn;
  //     switchPlayer();
  //   }

  //   var switchPlayer = function switchPlayer(){
  //     if (document.turn == "player1"){
  //       document.turn = "player2";
  //     } else {
  //       document.turn = "player1";
  //     }
  //   }
