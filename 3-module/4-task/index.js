
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let usersArr = [ vasya, petya, masha ];
let usersNames = [];

function namify(users) {
  return users.map((user) => user.name);
}
namify(usersArr);
console.log(usersNames);