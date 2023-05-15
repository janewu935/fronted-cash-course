//Practice2-1
const person = {
  name: "Kelly Lo",
  age: 100,
  gender: "female",
};
console.log(person.name);
console.log(person.age);

//Practice2-2
person.greeting = function () {
  return "Hello";
};
console.log(person.greeting());

//Practice3
person.friends = ["David", "Jack", "Iris", "Judy"];
console.log(person.friends);
