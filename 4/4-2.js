let input = require('./input.json')

let numbers = input.numbers
let boards = input.boards
let winner
let winningNumber

for(let i = 0; i < numbers.length; i++) {
    for(b=0;b<boards.length;b++) {
        let board = boards[b]
        for(j=0;j<5;j++) {
            if(board[j] == -2) break
            for(k=0;k<5;k++) {
                if(board[j][k] == numbers[i]) {
                    board[j][k] = -1
                }
            }
        }
        if(checkWin(board)) {
            winningNumber = numbers[i]
            //console.log(input['boards'][b])
            winner = input['boards'][b]
            boards[b] = [
                [-2,-2,-2,-2,-2],
                [-2,-2,-2,-2,-2],
                [-2,-2,-2,-2,-2],
                [-2,-2,-2,-2,-2],
                [-2,-2,-2,-2,-2]
            ]
        }
    }
}

console.log(winner)
let sum = 0

for(i=0;i<5;i++) {
    for(j=0;j<5;j++) {
        if(winner[i][j] != -1) {
            sum += winner[i][j]
        }
    }
}
console.log(sum)
console.log(sum*winningNumber)


function checkWin(board) {
    for(i=0; i<5; i++) {
        if(board[i][0] == -2) break
        if(board[i].toString() == [-1,-1,-1,-1,-1].toString()) {
            return true
        }
        let checkArray = []
        for(j=0;j<5;j++) {
            checkArray.push(board[j][i])
        }
        if(checkArray.toString() == [-1,-1,-1,-1,-1].toString()) {
            return true
        }
    }
    return false
}