//practice4-1
//for
for (i = 1; i <= 10000; i++) {
  console.log(i);
}
console.log("--practice2--");

//while
let j = 1;
while (j <= 10000) {
  console.log(j);
  j++;
}

//practice4-2
//for
for (i = 0; i <= 100; i += 2) {
  console.log(i);
}

//while
let a = 0;
while (a <= 100) {
  console.log(a);
  a += 2;
}

//practice4-3
//for
for (i = 1; i <= 100; i += 2) {
  console.log(i);
}

//while
let b = 1;
while (b <= 100) {
  console.log(b);
  b += 2;
}

//practice4-4
//for
for (i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    if (i % 3 !== 0) {
      if (i % 7 !== 0) {
        console.log(i);
      } else if (i / 7 === 1) {
        console.log(7);
      }
    } else if (i / 3 === 1) {
      console.log(3);
    }
  } else if (i / 2 === 1) {
    console.log(2);
  }
}

//while
let c = 0;
while (c <= 100) {
  if (c % 2 !== 0) {
    if (c % 3 !== 0) {
      if (c % 7 !== 0) {
        console.log(c);
      } else if (c / 7 === 1) {
        console.log(7);
      }
    }
  } else if (c / 2 === 1) {
    console.log(2);
  }
  c++;
}

//practice4-5
//for
let size = 5;
for (i = 1; i <= size; i++) {
  let layer = " ";
  for (j = 1; j <= i; j++) {
    layer += "*";
  }
  console.log(layer);
}

//while
let d = 1;
let size2 = 5;
while (d <= size2) {
  let e = 1;
  let layer = "";
  while (e <= d) {
    layer += "*";
    e++;
  }
  console.log(layer);
  d++;
}

//practice4-6
//for
for (i = 1; i <= 9; i++) {
  for (j = 1; j <= i; j++) {
    console.log(`${i} * ${j}  = ${i * j}`);
  }
}

//while
let f = 1;
while (f <= 9) {
  let k = 1;
  while (k <= f) {
    console.log(`${f} * ${k}  = ${f * k}`);
    k++;
  }
  f++;
}
