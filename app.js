console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) console.log(i)
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log(`${i} FIZZBUZZ`)
    if (i % 3 == 0) console.log("FIZZ")
    if (i % 5 == 0) console.log("BUZZ")
}

// Exercise 3 Section
console.log("EXERCISE 3: (PART 1)\n==========\n");
let i = 1
while (i <= 100) {
    if (i % 2 != 0) console.log(i)
    i++;
}

console.log("EXERCISE 3: (PART 2)\n==========\n");
let j = 1
do {
    if (j % 3 == 0 && j % 5 == 0) console.log(`${j} FIZZBUZZ`)
    if (j % 3 == 0) console.log("FIZZ")
    if (j % 5 == 0) console.log("BUZZ")
} while (j++ <= 100)

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let isFound = false

console.log(`value = ${value}`)
console.log(`end = ${n}`)

for (let i = 0; i <= n; i++) {
    if (i == value) {
        console.log("Found value!")
        isFound = true
        break
    }
}
if (!isFound) console.log("Did not find value")

// Exercise 4 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n2 = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(`start: ${start}`)
console.log(`end: ${n2}`)
console.log(`fizzDivisor: ${fizzDivisor}`)
console.log(`buzzDivisor: ${buzzDivisor}`)

for (i = start; i < n2; i++) {
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) console.log(`${i} FIZZBUZZ`)
    if (i % fizzDivisor == 0) console.log("FIZZ")
    if (i % buzzDivisor == 0) console.log("BUZZ")
}