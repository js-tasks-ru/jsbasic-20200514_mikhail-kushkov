/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

let users = [
	{"balance": "$1,825.65", "picture": "http://placehold.it/32x32", "age": 21, "name": "Golden Branch", "gender": "male",},
	{"balance": "$2.825.23", "picture": "http://placehold.it/32x32", "age": 78, "name": "Mikhail Kushkov", "gender": "male",},
	{"balance": "$1,490.15", "picture": "http://placehold.it/32x32", "age": 21, "name": "Duncan Randall", "gender": "male",}
];

function showSalary(data, age) {
 let result = '';    
 for(let user of data) {
    if ( user.age <= age ) {
      result += (`${user.name}, ${user.balance}\n`);
    }
 }
 return result.slice(0,-1);
}

showSalary(users, 40);
