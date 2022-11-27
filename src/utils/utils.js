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

function creatThbodyElements(data, thbody) {
	data.forEach(row => {
		function fillTd(element, title) {
			if (row[title]) {
				element.id = title;
				element.classList.add('comment');
				element.innerText = row[title] || '';
			}
		}
		const tr = document.createElement('tr');
		tr.classList.add('book');

		const tdDesactivación = document.createElement('td');
		fillTd(tdDesactivación, 'Desactivación');

		const tdSustitución = document.createElement('td');
		fillTd(tdSustitución, 'Sustitución');

		const tdReajuste = document.createElement('td');
		fillTd(tdReajuste, 'Reajuste');

		const tdResoldadura = document.createElement('td');
		fillTd(tdResoldadura, 'Resoldadura');

		const tdScrap = document.createElement('td');
		fillTd(tdScrap, 'Scrap');

		const tdVarios = document.createElement('td');
		fillTd(tdVarios, 'Varios');

		tr.appendChild(tdDesactivación);
		tr.appendChild(tdSustitución);
		tr.appendChild(tdReajuste);
		tr.appendChild(tdResoldadura);
		tr.appendChild(tdScrap);
		tr.appendChild(tdVarios);

		thbody.appendChild(tr);
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