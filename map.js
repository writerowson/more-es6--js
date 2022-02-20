const numbers = [4, 6, 8, 10];
const output2 = []
// const output = []
// for (const number of numbers) {
//     const result = number * 2;
//     output.push(result);
// }

// console.log(output)

// function doubleOld(number) {
//     return number * 2;
// }

const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result)
}

// you can write
// loop
// element diya function call kora
// result ekta array er modda push kora

// const output = numbers.map(doubleIt)
// console.log(output)

const output = numbers.map(x => x * 2)
// const output = numbers.map(number => number * 2)
console.log(output)

