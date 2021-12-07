let input = require('./input.test.json')

let gridSize = 10

let map = new Array(gridSize).fill(new Array(gridSize).fill(0)) // [ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ] ]



for(let i = 0; i < input.length; i++) {

    console.log(input[i])

    let point1 = input[i][0]
    let point2 = input[i][1]

    let x1 = point1[0]
    let y1 = point1[1]
    let x2 = point2[0]
    let y2 = point2[1]

    console.log(`x1: ${x1}, y1: ${y1}, x2: ${x2}, y2: ${y2}`)

    if(x1 == x2 && y1 == y2) {
        map[y1][x1]++
    } else if(x1 == x2) {
        let length = Math.abs(y1 - y2)
        let direction = y1 < y2 ? 1 : -1


        let x = x1


        for(let j = 0; j < length; j++) {

            let y = y1 + j * direction
            //console.log(`x: ${x}, y: ${y}`)
            map[y][x]++
        }
    } else if(y1 == y2) {
        let length = Math.abs(x1 - x2)
        let direction = x1 < x2 ? 1 : -1


        let y = y1


        for(let j = 0; j < length; j++) {

            let x = x1 + j * direction

            console.log(`x: ${x}, y: ${y}`)
            map[y][x]++
            console.log(`map[${y}][${x}]: ${map[y][x]}, x: ${x}, y: ${y}`)
        }
    } else console.log('not a line')
}


console.log(map)


let ctr = 0

for(let i = 0; i < map.length; i++) {
    for(let j = 0; j < map[i].length; j++) {
        if(map[j][i] > 1) {
            ctr++
        }
    }
}

console.log(ctr)