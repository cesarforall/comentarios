const lastCommentsElement = document.getElementById('last-comments');
const lastExcelCommentsElement = document.getElementById('last-excel-comments');

// Show last update
lastCommentsElement.innerText = 'Última actualización de página: ' + lastComments;
lastExcelCommentsElement.innerText = 'Última actualización de datos: ' + lastExcelComments;

// Data
const comentariostest = Array.from(comments);
console.log(comentariostest);

// Document elements
const thHeadCommentsTable = document.getElementById('thhead-comments-table');
const thBodyCommentsTable = document.getElementById('thbody-comments-table');
const commentsContainer = document.getElementById('comments-container');
const wholeCommentContainer = document.getElementById('whole-comment-container');
const wholeCommentText = document.getElementById('whole-comment-text');
const backspaceButton = document.querySelector('.backspace-btn');
const copiedMessageAlert = document.getElementById('copied-message-alert');
const creditsElement = document.getElementById('credits');
const commentTitles = getTitlesFromArray(comments);

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
		let wholeCommentStringsOther = [];
		let newOrderedString = [];
		for (let i = 0; i < wholeCommentArray.length; i++) {
			if (wholeCommentArray[i][0] == 'Desactivación') {
				const wholeCommentString = wholeCommentArray[i][0] + ' ' + wholeCommentArray[i][1].join(', ');
				wholeCommentStrings.push(wholeCommentString);
			} else if (wholeCommentArray[i][0] == 'Varios') {
				const wholeCommentString = wholeCommentArray[i][1].join(', ');
				wholeCommentStringsOther.push(wholeCommentString);
			} else if (wholeCommentArray[i][0] == 'Irreparable') {
				const wholeCommentString = wholeCommentArray[i][1].join(', ');
				wholeCommentStringsOther.push(wholeCommentString);
			} else {
				const wholeCommentString = wholeCommentArray[i][0] + ' - ' + wholeCommentArray[i][1].join(', ');
				wholeCommentStrings.push(wholeCommentString);
			}
		}
		const priorityOrder = ['Sustitución', 'Scrap', 'Resoldadura', 'Reajuste', 'Desactivación'];
		priorityOrder.forEach(item => {
			const newOrdered = wholeCommentStrings.filter(string => string.startsWith(item));
			if (newOrdered != '') {
				newOrderedString.push(newOrdered);
				console.log(newOrderedString);
			}
		});
		wholeCommentStringsOther.forEach(item => newOrderedString.push(item));

		wholeCommentText.innerHTML = newOrderedString.join(', ');
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
	let wholeCommentStringsOther = [];
	let newOrderedString = [];
	for (let i = 0; i < wholeCommentArray.length; i++) {
		if (wholeCommentArray[i][0] == 'Desactivación') {
			const wholeCommentString = wholeCommentArray[i][0] + ' ' + wholeCommentArray[i][1].join(', ');
			console.log(wholeCommentString);
			wholeCommentStrings.push(wholeCommentString);
		} else if (wholeCommentArray[i][0] == 'Varios') {
			const wholeCommentString = wholeCommentArray[i][1].join(', ');
			wholeCommentStringsOther.push(wholeCommentString);
		} else if (wholeCommentArray[i][0] == 'Irreparable') {
			const wholeCommentString = wholeCommentArray[i][1].join(', ');
			wholeCommentStringsOther.push(wholeCommentString);
		} else {
			const wholeCommentString = wholeCommentArray[i][0] + ' - ' + wholeCommentArray[i][1].join(', ');
			wholeCommentStrings.push(wholeCommentString);
		}
	}
	const priorityOrder = ['Sustitución', 'Scrap', 'Resoldadura', 'Reajuste', 'Desactivación'];
	priorityOrder.forEach(item => {
		const newOrdered = wholeCommentStrings.filter(string => string.startsWith(item));
		if (newOrdered != '') {
			newOrderedString.push(newOrdered);
			console.log(newOrderedString);
		}
	});
	wholeCommentStringsOther.forEach(item => newOrderedString.push(item));

	wholeCommentText.innerHTML = newOrderedString.join(', ');
});

wholeCommentText.addEventListener('click', event => {
	copiarAlPortapapeles('whole-comment-text');
});

// Logic
createThheadElements(commentTitles, thHeadCommentsTable);
creatThbodyElements(commentTitles, comments, thBodyCommentsTable);
