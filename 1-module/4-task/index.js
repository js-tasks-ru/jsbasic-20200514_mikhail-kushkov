/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(strg) {
    let checkWord = strg.toUpperCase();
    let spamWord1 = '1xBet'.toUpperCase();
    let spamWord2 = 'xxx'.toUpperCase();

	if ( checkWord.includes(spamWord1) || checkWord.includes(spamWord2) ) {

        console.log('it is a spam');
		return true;

	} else {
		console.log('it is not a spam');
		return false;
	}
}

checkSpam('1XbeT now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');

