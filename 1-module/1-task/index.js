/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
	if ( n == 0 || n == 1 ) {
		return 1;
	} else {
		let val = 1;
		for ( let i = 2; i <= n; i++ ) {
			val = val * i;
		}
		    
		return val;
	}
}

factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120

