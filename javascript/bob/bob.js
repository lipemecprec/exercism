//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
	const cleanMessage = message.replace(/[.*+^${}()|\s!@#%&,0-9:[\]\\]/g, '');
	const question = /^\?|[a-z]+.*\?$/
	const forcefulQuestion = /^[A-Z]*\?$/
	const shouting = /^[A-Z]+$/
	const silence = /^[\s]*$/
	if (question.test(cleanMessage)) {
		return 'Sure.'
	} else if (forcefulQuestion.test(cleanMessage)) {
		return 'Calm down, I know what I\'m doing!'
	} else if (shouting.test(cleanMessage)) {
		return 'Whoa, chill out!'
	} else if (silence.test(message)) {
		return 'Fine. Be that way!'
	} else {
		return 'Whatever.'
	}
};
