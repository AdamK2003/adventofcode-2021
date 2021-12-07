let input = require('./input.json')
let num = 0

for(let i=3; i<input.length; i++){
    if(sumOf3(i) > sumOf3(i-1)){
        num++
    }
}

function sumOf3(a) {
    return input[a] + input[a-1] + input[a-2]
}

console.log(num)