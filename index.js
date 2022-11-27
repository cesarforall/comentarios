const showCredits = document.getElementById('show-credits');

// Show and hide elements
function showElement(element) {
	element.classList.remove('hidden');
	setTimeout(() => {
		hideElement(element);
	}, 500);
}
function hideElement(element) {
	element.classList.add('hidden');
}

// Event listeners
showCredits.addEventListener('click', () => {
	showElement(credits);
});
