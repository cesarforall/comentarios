// Create elements
function getTitlesFromArray(data) {
	const titles = Object.keys(data[0]);
	return titles;
}

function createThheadElements(titles, thhead) {
	const tr = document.createElement('tr');

	titles.forEach(title => {
		const td = document.createElement('td');
		td.classList.add('title-comment');
		td.innerText = title;
		tr.appendChild(td);
	});

	thhead.appendChild(tr);
}

function creatThbodyElements(titles, data, thbodyElement) {
	data.forEach(row => {
		const tr = document.createElement('tr');
		tr.classList.add('book');

		titles.forEach(title => {
			const td = document.createElement('td');
			td.id = title;
			td.innerText = row[title] || '';
			if (td.innerText != '') {
				td.classList.add('comment');
			}
			tr.append(td);
		});

		thbodyElement.appendChild(tr);
	});
}

// Copy to clipboard
function copiarAlPortapapeles(element) {
	var aux = document.createElement('input');
	aux.setAttribute('value', document.getElementById(element).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand('copy');
	document.body.removeChild(aux);
	showBulmaMessage(copiedMessageAlert);
}

// Alert message
function showBulmaMessage(element) {
	element.classList.remove('is-hidden');
	setTimeout(() => {
		hideBulmaMessage(element);
	}, 1000);
}
function hideBulmaMessage(element) {
	element.classList.add('is-hidden');
}
