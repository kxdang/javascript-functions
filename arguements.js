
// //Multiple arguments
// let add = function(num1, num2) {
//    return num1 + num2
// }

// let result = add(1,10)
// console.log(result)

//Default arguments
let getScoreText = function (name = 'Anonymous', score = 100) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText);

//Challenge area
// total, tipPercent .2
// A 25% on $40 would be $10
let tipCalculator = function(total, tipPercent = 0.2) {
    return `A ${tipPercent*100}% on $${total} would be $${total*tipPercent}`
}

let tip1 = tipCalculator(40,0.25);
let tip2 = tipCalculator(100, 0.2);
console.log(tip1)

console.log(tip2);