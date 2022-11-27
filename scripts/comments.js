// Data
const comentariostest = Array.from(comments);

// Document elements
const thHeadCommentsTable = document.getElementById('thhead-comments-table');
const thBodyCommentsTable = document.getElementById('thbody-comments-table');
const commentsContainer = document.getElementById('comments-container');
const wholeCommentContainer = document.getElementById('whole-comment-container');
const wholeCommentText = document.getElementById('whole-comment-text');
const backspaceButton = document.querySelector('.backspace-btn');
const copiedMessageAlert = document.getElementById('copied-message-alert');
const creditsElement = document.getElementById('credits');
const commentTitles = getTitlesFromArray(comentarios);

// Variables
let wholeComment = {};
let wholeCommentArray = [];
let booksArray = [];
let lastKey = [];
let lastValue = [];

// Event listeners
thBodyCommentsTable.addEventListener('click', e => {
	const target = e.target.nodeName;
	const title = e.target.id;
	const comment = e.target.innerText;
	const lastTitle = lastKey[lastKey.length - 1];
	const lastComment = lastValue[lastValue.length - 1];

	if (target == 'TD' && comment) {
		lastKey.push(title);
		lastValue.push(comment);

		if (!wholeComment[title]) {
			wholeComment[title] = [];

			wholeComment[title].push(comment);
		} else {
			wholeComment[title].push(comment);
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

wholeCommentText.addEventListener('click', event => {
	copiarAlPortapapeles('whole-comment-text');
});

// Logic
createThheadElements(commentTitles, thHeadCommentsTable);
creatThbodyElements(comentarios, thBodyCommentsTable);
