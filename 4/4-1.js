let input = require('./input.json')

let numbers = input.numbers
let boards = input.boards
let winner

for(let i = 0; i < numbers.length; i++) {
    for(b=0;b<boards.length;b++) {
        let board = boards[b]
        for(j=0;j<5;j++) {
            for(k=0;k<5;k++) {
                if(board[j][k] == numbers[i]) {
                    board[j][k] = -1
                }
            }
        }
        if(checkWin(board)) {
            console.log(numbers[i])
            //console.log(input['boards'][b])
            winner = input['boards'][b]
            break
        }
    }
    if(winner) break
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


function checkWin(board) {
    for(i=0; i<5; i++) {
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