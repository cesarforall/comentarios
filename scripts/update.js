const mainSection = document.getElementById('main-section');
const user = document.getElementById('user');
const password = document.getElementById('password');
const loginButton = document.getElementById('login-button');

const inputFile = document.createElement('input');
inputFile.id = 'input-file';
inputFile.type = 'file';

const newArray = document.createElement('p');
newArray.id = 'new-array';

const btnSave = document.createElement('button');
btnSave.id = 'btn-save';
btnSave.classList.add('button');
btnSave.classList.add('btn-save');

btnSave.innerText = 'Actualizar datos';

const separator = document.createElement('div');
separator.classList.add('separator');

let newData;
let fileName = '';
async function handleFileAsync(e) {
	/* get first file */
	const file = e.target.files[0];
	const fullName = e.target.files[0].name;
	const dotIndex = fullName.indexOf('.');
	fileName = fullName.slice(0, dotIndex);
	console.log(fileName);

	/* get raw data */
	const data = await file.arrayBuffer();
	/* data is an ArrayBuffer */
	const wb = XLSX.read(data);
	/* do something with the workbook here */
	versions = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
	newData = converToJson(versions);
	// console.log(newData);
	newArray.innerHTML = newData;
	mainSection.appendChild(btnSave);
	mainSection.appendChild(separator);
	mainSection.appendChild(newArray);
}
inputFile.addEventListener('change', handleFileAsync, false);

// Login

loginButton.addEventListener('click', checkLogin);
// newArray.addEventListener('click', e => copiarAlPortapapeles(newArray.value));

function checkLogin() {
	if (user.value == 'admin' && password.value == 'admin') {
		mainSection.innerText = '';
		createExceltoJsonConverter();
	}
}

function createExceltoJsonConverter() {
	mainSection.innerHTML = `
	<div class="content instructions is-small">
	<ol>
		<li>Selecciona el archivo excel actualizado</li>
		<li>Haz click en Actualizar datos</li>
		<li>Sobrescribe el archivo con el mismo nombre y extensión .js</li>
	</ol>
</div>
	`;
	mainSection.appendChild(inputFile);
}

// Converto to Json
function converToJson(data) {
	return JSON.stringify(data);
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

newArray.addEventListener('click', e => copiarAlPortapapeles(newData));

// Download the file

// const constOptions = { 1: 'comments', 2: 'versions' };
const downloadToFile = (content, filename, contentType) => {
	const a = document.createElement('a');
	const file = new Blob([content], { type: contentType });

	a.href = URL.createObjectURL(file);
	a.download = filename;
	a.click();

	URL.revokeObjectURL(a.href);
};

btnSave.addEventListener('click', () => {
	let data;
	if (fileName == 'versiones') {
		console.log(fileName);
		data = 'const versions=' + newData;
		downloadToFile(data, fileName + '.js', 'text/plain');
	} else if (fileName == 'comentarios') {
		console.log(fileName);
		data = 'const comments=' + newData;
		downloadToFile(data, fileName + '.js', 'text/plain');
	} else {
		alert('Archivo Excel incorrecto');
	}
});
