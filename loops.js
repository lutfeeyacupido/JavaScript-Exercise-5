const numbers = [1, 2, 3, 4, 5];

console.log("For Loop");
console.log("-".repeat(60));
for (let i = 0; i < numbers.length; i++) { 
    console.log(numbers[i]);
} 
console.log("countdown");
console.log("-".repeat(60));
let countdown = 5; 
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}

console.log("Even numbers");
console.log("-".repeat(60));
for (const n of numbers) {
    if (n % 2 === 0) {
        console.log(n);
    }
}

let sum = 0;
for (const n of numbers) {
    sum += n;
} 
console.log("Sum of numbers");
console.log("-".repeat(60));
console.log(sum)