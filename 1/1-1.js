let input = require('./input.json')
let num = 0

for(let i=1; i<input.length; i++){
    if(input[i] > input[i-1]){
        num++
    }
}

console.log(num)