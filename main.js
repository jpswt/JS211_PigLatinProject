'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const positionFirstVowel = (word) => {
	//Variables that store the value of the index for each vowel in a given word
	let aIdx = word.indexOf('a');
	let eIdx = word.indexOf('e');
	let iIdx = word.indexOf('i');
	let oIdx = word.indexOf('o');
	let uIdx = word.indexOf('u');

	// Variable for the output.  Currently set to -1 as no vowels exist in input
	let answer = -1;

	// Determine the "better" answer as it goes through the if/else if statements for each vowel
	if (aIdx < 0) {
	} else if (answer < 0) {
		answer = aIdx;
	} else if (answer > aIdx && aIdx != -1) {
		answer = aIdx;
	}

	if (eIdx < 0) {
	} else if (answer < 0) {
		answer = eIdx;
	} else if (answer > eIdx && eIdx != -1) {
		answer = eIdx;
	}

	if (iIdx < 0) {
	} else if (answer < 0) {
		answer = iIdx;
	} else if (answer > iIdx && iIdx != -1) {
		answer = iIdx;
	}

	if (oIdx < 0) {
	} else if (answer < 0) {
		answer = oIdx;
	} else if (answer > oIdx && oIdx != -1) {
		answer = oIdx;
	}

	if (uIdx < 0) {
	} else if (answer < 0) {
		answer = uIdx;
	} else if (answer > uIdx && uIdx != -1) {
		answer = uIdx;
	}

	return answer;
};

//Declare a function pigLatin that takes in the parameter of word
const pigLatin = (word) => {
	word = word.toLowerCase().trim();

	//Determines if the word starts with a vowel
	if (positionFirstVowel(word) == 0) {
		return word + 'yay';
	}

	//Determine if the word has no vowels.
	if (positionFirstVowel(word) < 0) {
		return word + 'yay';
	}

	//Determine if the word has consonants. If it does, take
	//the portion of the word from the vowel position to the end of word
	//and add it to portion of the beginning of the word up to vowel
	//position and add 'ay' to complete translation
	if (positionFirstVowel(word) > 0) {
		let vowelPosition = positionFirstVowel(word);
		return (
			word.substring(vowelPosition) + word.substring(0, vowelPosition) + 'ay'
		);
	}
};

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
	rl.question('word ', (answer) => {
		console.log(pigLatin(answer));
		getPrompt();
	});
};

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {
	describe('#pigLatin()', () => {
		it('should translate a simple word', () => {
			assert.equal(pigLatin('car'), 'arcay');
			assert.equal(pigLatin('dog'), 'ogday');
		});
		it('should translate a complex word', () => {
			assert.equal(pigLatin('create'), 'eatecray');
			assert.equal(pigLatin('valley'), 'alleyvay');
		});
		it('should attach "yay" if word begins with vowel', () => {
			assert.equal(pigLatin('egg'), 'eggyay');
			assert.equal(pigLatin('emission'), 'emissionyay');
		});
		it('should lowercase and trim word before translation', () => {
			assert.equal(pigLatin('HeLlO '), 'ellohay');
			assert.equal(pigLatin(' RoCkEt'), 'ocketray');
		});
	});
} else {
	getPrompt();
}

// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
