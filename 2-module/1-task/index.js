/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

let salaries = {
    Pete: 1300,
    month: 'December',
    currency: 'USD',
    John: 1000,
    isPayed: false,
    Ann: 1600
}

function sumSalary(salaries) {
    let sum = 0;
    for (let key in salaries) {
      if (typeof(salaries[key]) === 'number') {
          sum += salaries[key]
      }
    }
    return sum;
}
sumSalary(salaries);
