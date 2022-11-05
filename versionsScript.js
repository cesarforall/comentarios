const data = Array.from(versions);

const versionsElement = document.getElementById('versions');

versionsElement.addEventListener('click', event => {
	const node = event.target;

	if (node.getAttribute('id') === 'ruta') {
		const route = event.target.parentNode.getAttribute('id');
		const theRoute = searchRoute(route);
		console.log(theRoute);
		copiarAlPortapapeles(theRoute);
		appearCMA()
	}
});

const table = document.getElementById('table');
const tbody = document.createElement('tbody');
tbody.innerHTML = `
<tr>
	<td><strong>Cliente</strong></td>
	<td><strong>Modelo</strong></td>
	<td><strong>Versión</strong></td>
	<td><strong>Fecha</strong></td>
	<td><strong>Ruta</strong></td>
</tr>
	`;

data.forEach(obj => {
	const tr = document.createElement('tr');
	tr.setAttribute('id', `${obj['Cliente']}-${obj['Modelo']}`);

	const tdClient = document.createElement('td');
	tdClient.innerText = obj['Cliente'];

	const tdModel = document.createElement('td');
	tdModel.innerText = obj['Modelo'];

	const tdVersion = document.createElement('td');
	tdVersion.innerText = obj['Versión'];

	const tdDate = document.createElement('td');
	tdDate.innerText = obj['Fecha'];

	const tdRoute = document.createElement('td');
	tdRoute.setAttribute('id', 'ruta');
	tdRoute.innerText = 'Copiar ruta del directorio';

	tr.appendChild(tdClient);
	tr.appendChild(tdModel);
	tr.appendChild(tdVersion);
	tr.appendChild(tdDate);
	tr.appendChild(tdRoute);

	tbody.appendChild(tr);
});

versionsElement.appendChild(table);
table.appendChild(tbody);

function searchRoute(clientModel) {
	const searchingParams = clientModel.split('-');
	const findedItem = data.filter(obj => {
		return obj.Cliente === searchingParams[0] && obj.Modelo === searchingParams[1];
	});
	console.log(findedItem[0].Ruta);
	return findedItem[0].Ruta;
}

function copiarAlPortapapeles(ruta) {
	var aux = document.createElement('input');
	aux.setAttribute('value', ruta);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand('copy');
	document.body.removeChild(aux);
}

function appearCMA() {
	copiedMessageAlert.classList.remove('is-hidden');
	setTimeout(dissapearCMA, 1000);
}
function dissapearCMA() {
	copiedMessageAlert.classList.add('is-hidden');
}

const copiedMessageAlert = document.getElementById('copied-message-alert');

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