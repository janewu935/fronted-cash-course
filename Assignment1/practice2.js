//practice2-1
let age = 20;
if (age >= 18) {
  console.log("can vote");
} else {
  console.log("can't vote");
}

//practice2-2
let num = 9;
if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("ood");
}

//pratice2-3
let x = 2;
let y = 4;
if (x > y) {
  console.log("x is bigger than y");
} else if (x < y) {
  console.log("x is smaller than y");
} else {
  console.log("they are equal");
}

//pratice2-4
let a = 4;
let b = 4;
let c = 4;
if (a > b && a > c) {
  console.log("a is the biggest");
} else if (b > a && b > c) {
  console.log("b is the biggest");
} else if (c > a && c > b) {
  console.log("c is the biggest");
} else if (a === b && a === c) {
  console.log("they are equal");
} else {
  console.log("error");
}

//practice2-5
let max = 100;
let min = 10;
let e = 10;
if (min <= e && e <= max) {
  console.log("e  is present in given range");
} else {
  console.log("e  isn't present in given range");
}

//practice2-6
let f = 2100;
if (f % 4 === 0) {
  if (f % 100 === 0) {
    if (f % 400 === 0) {
      console.log("f is leap year");
    } else {
      console.log("f isn't leap year");
    }
  } else {
    console.log("f is leap year");
  }
} else {
  console.log("f isn't leap year");
}
