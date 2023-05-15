//Practice1-1
const fruits = ["banana", "apple", "mango", "watermelon"];

//Practice1-2
console.log(fruits);

//Practice1-3
fruits[2] = "Durian";
console.log(fruits);

//Practice1-4
fruits.push("strawberry", "cherry");
console.log(fruits);

//Practice1-5
fruits.splice(0, 1);
console.log(fruits);

//Practice1-6
//for
for (let i = 0; i <= fruits.length - 1; i++) {
  console.log(fruits[i]);
}

//while
let i = 0;
while (i <= fruits.length - 1) {
  console.log(fruits[i]);
  i++;
}

//Practice1-7
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map((num) => {
  return num ** 2;
});
console.log(squareNumbers);

//Practice1-8
const primeNumbers = numbers.filter((num) => {
  if (num >= 2) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      return num;
    }
  }
});
console.log(primeNumbers);

//Practice1-9
const sumNumbers = numbers.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);

console.log(sumNumbers);
