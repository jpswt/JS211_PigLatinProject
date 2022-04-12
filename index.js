const positionFirstVowel = (word) => {
	//Variables that store the value of the index for each vowel in a given word
	let aIdx = word.indexOf('a');
	let eIdx = word.indexOf('e');
	let iIdx = word.indexOf('i');
	let oIdx = word.indexOf('o');
	let uIdx = word.indexOf('u');
	// Vowels array for all of the vowel indexes
	let vowels = [aIdx, eIdx, iIdx, oIdx, uIdx];

	// Variable for the output.  Currently set to -1 as no vowels exist in input
	let answer = -1;

	// Iterating each vowel index through the better function to determine the answer
	for (let i = 0; i < vowels.length; i++) {
		answer = better(answer, vowels[i]);
	}
	return answer;
};

// Determine the "better" answer as it goes through the if/else if statements for each vowel
const better = (answer, vowelIdx) => {
	if (vowelIdx < 0) {
		return answer;
	}
	if (answer < 0) {
		return vowelIdx;
	}
	return answer > vowelIdx ? vowelIdx : answer;
};

// Declare a function pigLatin that takes in the parameter of word
const pigLatin = (word) => {
	word = word.toLowerCase().trim();

	// Determines if any input has been provided
	if (word === '' || word === null) {
		return 'No input provided.  Please try again';
	}

	// Determines if the word starts with a vowel
	if (positionFirstVowel(word) === 0) {
		return word + 'yay';
	}

	// Determine if the word has no vowels.
	if (positionFirstVowel(word) < 0) {
		return word + 'yay';
	}
	// Determine if the word has consonants. If it does, take
	// the portion of the word from the vowel position to the end of word
	// and add it to portion of the beginning of the word up to vowel
	// position and add 'ay' to complete translation
	if (positionFirstVowel(word) > 0) {
		let vowelPosition = positionFirstVowel(word);
		return (
			word.substring(vowelPosition) + word.substring(0, vowelPosition) + 'ay'
		);
	}
};

let userInput = '';

// Declaring variables for the input and output text
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

// Declaring variables for the translate and reset buttons
const translate = document.getElementById('translate');
const reset = document.getElementById('reset');

// Adding an event listener to the inputText variable when the
// key is released, the value is stored in the variable userInput
inputText.addEventListener('keyup', (e) => {
	userInput = e.target.value;
	console.log(userInput);
});

// Adding an event listener to to translate button when clicked it
// will take the word and run it through the pig latin function
// for single and sentences.
translate.addEventListener('click', (e) => {
	// Declaring a variable that will split userInput and store the words in an array
	const words = userInput.split(' ');
	// Declaring a variable that will take every word in the array and run it
	// through the pigLatin function creating an output array
	const output = words.map((everyWord) => pigLatin(everyWord));
	// Using the join method on output array to create string that is text
	// for the outputText
	outputText.innerText = output.join(' ');
	// Reset the input text value to default placeholder text when translate button is clicked
	inputText.value = '';
	//Place cursor focus back in the inputText field on button click
	inputText.focus();
});

// Adding an event listener to the reset button that when clicked
// will reset the userInput and outputText to reset cursor focus
// to inputTest field
reset.addEventListener('click', (e) => {
	userInput = '';
	outputText.innerText = '';
	inputText.focus();
});
