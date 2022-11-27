const data = Array.from(versions);

const versionsElement = document.getElementById('versions');

versionsElement.addEventListener('click', event => {
	const node = event.target;

	if (node.getAttribute('id') === 'ruta') {
		const route = event.target.parentNode.getAttribute('id');
		const theRoute = searchRoute(route);
		copiarAlPortapapeles(theRoute);
		appearCMA();
	}
});

const table = document.getElementById('table');
const tbody = document.getElementById('tbody');

const clientsSelectItem = document.getElementById('clients-select');
const modelsSelectItem = document.getElementById('models-select');

let lastClient = 'client';

clientsSelectItem.addEventListener('click', event => {
	const clientValue = clientsSelectItem.value;
	const clientText = clientsSelectItem.options[clientsSelectItem.selectedIndex].text;

	const modelValue = modelsSelectItem.value;
	const modelText = modelsSelectItem.options[modelsSelectItem.selectedIndex].text;

	if (clientValue != lastClient) {
		if (clientValue != 'client') {
			if (modelValue == 'model') {
				const clientData = filterClient(clientText, data);
				const fCModels = filterClientModels(clientText);
				printModels(fCModels);
				createTable(clientData);
			} else {
				const clientData = filterClient(clientText, data);
				const fCModels = filterClientModels(clientText);
				printModels(fCModels);
				createTable(clientData);
			}
			lastClient = clientValue;
		} else {
			const clientData = filterClient(clientText, data);
			const fCModels = filterClientModels(clientText);
			// clientsModel = data.map(item => item.Modelo);
			printModels(models);
			createTable(data);
		}
	}
});

let lastModel = 'model';

modelsSelectItem.addEventListener('click', e => {
	const clientValue = clientsSelectItem.value;
	const clientText = clientsSelectItem.options[clientsSelectItem.selectedIndex].text;

	const modelValue = modelsSelectItem.value;
	const modelText = modelsSelectItem.options[modelsSelectItem.selectedIndex].text;

	if (modelValue != lastModel) {
		if (modelValue != 'model') {
			if (clientValue == 'client') {
				clientsModel = data.filter(item => item.Modelo == modelText);
				createTable(clientsModel);
			} else {
				clientsModel = data.filter(item => item.Cliente == clientText);
				modelsClient = clientsModel.filter(item => item.Modelo == modelText);
				// printModels(modelsClient)
				createTable(modelsClient);
			}
			lastModel = modelValue;
		}
	}
});

// Get clients and models
const clients = Array.from(new Set(data.map(item => item.Cliente)));
const models = Array.from(new Set(data.map(item => item.Modelo)));

// Clients and models
clientOptions = [];

function printClients(clientList) {
	clientOptions = [];
	clientList.forEach(client => {
		const option = document.createElement('option');
		option.value = client.toLowerCase();
		option.innerText = client;
		clientOptions.push(option);
	});
	clientsSelectItem == '';
	clientOptions.forEach(item => clientsSelectItem.appendChild(item));
}

let modelOptions = [];

function printModels(modelList) {
	modelOptions = [];
	modelList = modelList.sort();
	modelList.forEach(model => {
		const option = document.createElement('option');
		option.value = model.toLowerCase();
		option.innerText = model;
		modelOptions.push(option);
	});
	const option = document.createElement('option');
	option.value = 'model';
	option.innerText = 'Modelo';
	modelOptions.unshift(option);
	modelsSelectItem.innerHTML = '';
	modelOptions.forEach(item => modelsSelectItem.appendChild(item));
}

function filterClient(client, data) {
	const filteredClient = data.filter(item => {
		return item.Cliente == client;
	});
	return filteredClient;
}

function filterClientModels(client) {
	filteredClient = data.filter(item => item.Cliente == client);
	filteredModels = filteredClient.map(item => item.Modelo);
	return filteredModels;
}

// Sort data
function sortData(data, filter) {
	const orderedData = data.sort((a, b) => {
		const clientA = a[filter].toUpperCase();
		const clientB = b[filter].toUpperCase();
		if (clientA < clientB) {
			return -1;
		}
		if (clientA > clientB) {
			return 1;
		}
		return 0;
	});
	return orderedData;
}

// Create and print table
let newTable = [];

function createTable(data) {
	newTable = [];
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

		// tbody.appendChild(tr);
		newTable.push(tr);
	});

	printTable();
}

function printTable() {
	tbody.innerText = '';
	newTable.forEach(item => {
		tbody.appendChild(item);
	});
}

// Search route
function searchRoute(clientModel) {
	const searchingParams = clientModel.split('-');
	const findedItem = data.filter(obj => {
		return obj.Cliente === searchingParams[0] && obj.Modelo === searchingParams[1];
	});
	return findedItem[0].Ruta;
}

// Copy to clipboard
function copiarAlPortapapeles(ruta) {
	var aux = document.createElement('input');
	aux.setAttribute('value', ruta);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand('copy');
	document.body.removeChild(aux);
}

// Self-disappearing message
const copiedMessageAlert = document.getElementById('copied-message-alert');

function appearCMA() {
	copiedMessageAlert.classList.remove('is-hidden');
	setTimeout(dissapearCMA, 1000);
}
function dissapearCMA() {
	copiedMessageAlert.classList.add('is-hidden');
}

// Credits
function appearCredits() {
	creditsElement.classList.remove('hidden');
	setTimeout(dissapearCredits, 500);
}
function dissapearCredits() {
	creditsElement.classList.add('hidden');
}

const creditsElement = document.getElementById('credits');

sortedClients = clients.sort();
sortedModels = models.sort();
printClients(sortedClients);
printModels(models);
const orderedData = sortData(data, 'Cliente');
createTable(orderedData);