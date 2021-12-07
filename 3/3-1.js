let input = require('./input.json')

let bitCounts = [0,0,0,0,0,0,0,0,0,0,0,0]

for(i=0; i<input.length; i++) {
    let bits = input[i].split('')
    for(j=0; j<bits.length; j++) {
        if(bits[j] == '1') {
            bitCounts[j]++
        } else {
            bitCounts[j]--
        }
    }
}
let gamma = [], epsilon = []
for(i=0; i<bitCounts.length; i++) {
    if(bitCounts[i] > 0) {
        gamma.push(1)
        epsilon.push(0)
    } else {
        gamma.push(0)
        epsilon.push(1)
    }
}
console.log(gamma.join(''))
console.log(epsilon.join(''))
gamma = parseInt(gamma.join(''), 2)
epsilon = parseInt(epsilon.join(''), 2)
console.log(`Gamma: ${gamma}, Epsilon: ${epsilon}`)