const data = Object.entries(comments);
const commentsContainer = document.getElementById('comments-container');
const wholeCommentContainer = document.getElementById('whole-comment-container');
const wholeCommentText = document.getElementById('whole-comment-text');
const backspaceButton = document.querySelector('.backspace-btn');

let wholeComment = {};
let wholeCommentArray = [];
let booksArray = [];
let lastKey = [];
let lastValue = [];

backspaceButton.addEventListener('click', event => {
	lastItemKeyIndex = lastKey.length - 1;
	lastItemValueIndex = lastKey.length - 1;
	lastItemKey = lastKey[lastItemKeyIndex];
	lastItemValue = lastValue[lastItemValueIndex];

	if (wholeComment[lastItemKey]) {
		if (wholeComment[lastItemKey].length == 0) {
			delete wholeComment[lastKey];
		} else {
			wholeComment[lastItemKey].pop();
			lastKey.pop();
			lastValue.pop();
			if (wholeComment[lastItemKey].length == 0) {
				delete wholeComment[lastItemKey];
			}
		}
	}
	wholeCommentArray = Object.entries(wholeComment);

	let wholeCommentStrings = [];
	for (let i = 0; i < wholeCommentArray.length; i++) {
		if (wholeCommentArray[i][0] == 'Desactivación') {
			const wholeCommentString = wholeCommentArray[i][0] + ' ' + wholeCommentArray[i][1].join(', ');
			console.log(wholeCommentString);
			wholeCommentStrings.push(wholeCommentString);
		} else if (wholeCommentArray[i][0] == 'Varios') {
			const wholeCommentString = wholeCommentArray[i][1].join(', ');
			console.log(wholeCommentString);
			wholeCommentStrings.push(wholeCommentString);
		} else {
			const wholeCommentString = wholeCommentArray[i][0] + ' - ' + wholeCommentArray[i][1].join(', ');
			wholeCommentStrings.push(wholeCommentString);
		}
	}
	wholeCommentText.innerHTML = wholeCommentStrings.join(', ');
});

commentsContainer.addEventListener('click', event => {
	if (event.target.nodeName === 'P') {
		const bookId = event.target.parentNode.getAttribute('id');
		const commentText = event.target.innerText;

		lastKey.push(bookId);
		lastValue.push(commentText);

		if (!wholeComment[bookId]) {
			wholeComment[bookId] = [];

			wholeComment[bookId].push(commentText);
		} else {
			wholeComment[bookId].push(commentText);
		}

		wholeCommentArray = Object.entries(wholeComment);

		let wholeCommentStrings = [];
		for (let i = 0; i < wholeCommentArray.length; i++) {
			if (wholeCommentArray[i][0] == 'Desactivación') {
				const wholeCommentString = wholeCommentArray[i][0] + ' ' + wholeCommentArray[i][1].join(', ');
				wholeCommentStrings.push(wholeCommentString);
			} else if (wholeCommentArray[i][0] == 'Varios') {
				const wholeCommentString = wholeCommentArray[i][1].join(', ');
				wholeCommentStrings.push(wholeCommentString);
			} else {
				const wholeCommentString = wholeCommentArray[i][0] + ' - ' + wholeCommentArray[i][1].join(', ');
				wholeCommentStrings.push(wholeCommentString);
			}
		}
		wholeCommentText.innerHTML = wholeCommentStrings.join(', ');
	}
});

function copiarAlPortapapeles(id_elemento) {
	var aux = document.createElement('input');
	aux.setAttribute('value', document.getElementById(id_elemento).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand('copy');
	document.body.removeChild(aux);
	appearCMA();
}

wholeCommentContainer.addEventListener('click', event => {
	copiarAlPortapapeles('whole-comment-text');
});

for (book of data) {
	const bookContainer = document.createElement('div');
	const bookTitle = document.createElement('h3');

	bookContainer.setAttribute('id', Object.keys(book[1]));
	bookContainer.setAttribute('class', 'book');

	commentsContainer.appendChild(bookContainer);
	bookContainer.appendChild(bookTitle);

	bookTitle.innerText = Object.keys(book[1]);

	for (row of Object.values(book[1])) {
		row = Object.entries(row);
		for (comment of row) {
			const commentButton = document.createElement('p');
			commentButton.setAttribute('class', 'comment');

			bookContainer.appendChild(commentButton);

			commentButton.innerText = comment[1];
		}
	}
}

// Copied message alert
function appearCMA() {
	copiedMessageAlert.classList.remove('is-hidden');
	setTimeout(dissapearCMA, 1000);
}
function dissapearCMA() {
	copiedMessageAlert.classList.add('is-hidden');
}

const copiedMessageAlert = document.getElementById('copied-message-alert');

// Credits
function appearCredits() {
	creditsElement.classList.remove('hidden');
	setTimeout(dissapearCredits, 500);
}
function dissapearCredits() {
	creditsElement.classList.add('hidden');
}

const creditsElement = document.getElementById('credits');
const showCredits = document.getElementById('show-credits');
showCredits.addEventListener('click', appearCredits);
