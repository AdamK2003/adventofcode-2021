let input = require('./input.json')

let zeros = [], ones = []

let o2 = input, co2 = input

for(i=0; i<=15; i++) {

    len = o2.length
    for(j=0; j<len; j++) {

        let bits = o2[j].split('')

        if(bits[i] == '0') {
            zeros.push(o2[j])
        } else {
            ones.push(o2[j])
        }

    }

    if(zeros.length > ones.length) {
        o2 = zeros
    } else {
        o2 = ones
    }
    zeros = []
    ones = []
    if(o2.length == 1) {
        break
    }
}

for(i=0; i<=15; i++) {

    len = co2.length
    for(j=0; j<len; j++) {

        let bits = co2[j].split('')

        if(bits[i] == '0') {
            zeros.push(co2[j])
        } else {
            ones.push(co2[j])
        }

    }

    if(zeros.length > ones.length) {
        co2 = ones
    } else {
        co2 = zeros
    }
    zeros = []
    ones = []
    if(co2.length == 1) {
        break
    }
}
console.log(`O2: ${parseInt(o2[0], 2)}, CO2: ${parseInt(co2[0], 2)}`)