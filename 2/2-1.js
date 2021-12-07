input = require('./input.json')

let depth = 0, pos = 0

for(i=0; i < input.length; i++) {
    keyword = input[i].split(' ')[0]
    amount = +(input[i].split(' ')[1])

    if(keyword == 'forward') {
        pos += amount
    } else if(keyword == 'down') {
        depth += amount
    } else if(keyword == 'up') {
        depth -= amount
    }

}
console.log(`Pos = ${pos}, Depth = ${depth}`)