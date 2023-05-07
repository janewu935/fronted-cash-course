//practice5-1
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
};
console.log(isEven(4));

//practice5-2
const isLeapYear = (a) => {
  if (a % 4 === 0) {
    if (a % 100 === 0) {
      if (a % 400 === 0) {
        return true;
      }
    } else {
      return true;
    }
  }
};
console.log(isLeapYear(2000));

//practice5-3
const isPrime = (prime) => {
  if (prime % 2 !== 0) {
    if (prime % 3 !== 0) {
      if (prime % 7 !== 0) {
        return true;
      } else if (prime / 7 === 1) {
        return true;
      } else {
        return false;
      }
    } else if (prime / 3 === 1) {
      return true;
    } else {
      return false;
    }
  } else if (prime / 2 === 1) {
    return true;
  } else {
    return false;
  }
};
console.log(isPrime(17));

//pratice5-4
const findMax = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num1 && num3 > num2) {
    return num3;
  } else {
    return false;
  }
};
console.log(findMax(3, 5, 7));
console.log(findMax(9, 9, 9));
console.log(findMax(9, 0, 4));
