function isSolved(board) {  
  
//  leftSolved
    if (board[0][0] == 1 && board[1][0] == 1 && board[2][0] == 1){
      return 1;
    }
    if (board[0][0] == 2 && board[1][0] == 2 && board[2][0] == 2){
      return 2;
    }

//  middleSolved
    if (board[0][1] == 1 && board[1][1] == 1 && board[2][1] == 1){
      return 1;
    }
    if (board[0][1] == 2 && board[1][1] == 2 && board[2][1] == 2){
      return 2;
    }
  
//  rightSolved
    if (board[0][2] == 1 && board[1][2] == 1 && board[2][2] == 1){
      return 1;
    }
    if (board[0][2] == 2 && board[1][2] == 2 && board[2][2] == 2){
      return 2;
    }
  
//  diagRightSolved
    if (board[0][0] == 1 && board[1][1] == 1 && board[2][2] == 1){
      return 1;
    }
    if (board[0][0] == 2 && board[1][1] == 2 && board[2][2] == 2){
      return 2;
    }

//  diagLeftSolved
    if (board[2][2] == 1 && board[1][1] == 1 && board[0][0] == 1){
      return 1;
    }
    if (board[2][2] == 2 && board[1][1] == 2 && board[0][0] == 2){
      return 2;
    }
  
//  topRowSolved
    if (board[0][0] == 1 && board[0][1] == 1 && board[0][2] == 1){
      return 1;
    }
    if (board[0][0] == 2 && board[0][1] == 2 && board[0][2] == 2){
      return 2;
    }
  
//  middleRowSolved
    if (board[1][0] == 1 && board[1][1] == 1 && board[1][2] == 1){
      return 1;
    }
    if (board[1][0] == 2 && board[1][1] == 2 && board[1][2] == 2){
      return 2;
    }
  
//  bottomRowSolved
    if (board[2][0] == 1 && board[2][1] == 1 && board[2][2] == 1){
      return 1;
    }
    if (board[2][0] == 2 && board[2][1] == 2 && board[2][2] == 2){
      return 2;
    }
  
  //  check it isn't unfinished
       for (let i = 0; i < board.length; i++) {
       for (let j = 0; j < board[i].length; j++) {
           if (board[i][j] === 0) {
               return -1;
           }
       }
   }
  
  return 0;
