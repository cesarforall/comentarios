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
btnSave.innerText = 'Actualizar datos';

let newVersions;

async function handleFileAsync(e) {
	/* get first file */
	const file = e.target.files[0];
	/* get raw data */
	const data = await file.arrayBuffer();
	/* data is an ArrayBuffer */
	const wb = XLSX.read(data);
	/* do something with the workbook here */
	versions = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
	newVersions = converToJson(versions);
	// console.log(newVersions);
	newArray.innerHTML = newVersions;
	mainSection.appendChild(btnSave);
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
		<li>Seleccionar el archivo de Excel .xlsx actualizado</li>
		<li>Pinchar en el botón 'Actualizar datos' situado después de los datos</li>
		<li>Buscar la ruta del archivo de datos con la extensión .js</li>
		<li>Pinchar en el archivo para actualizar el nombre, luego guardar y reemplazar</li>
	</ol>
</div>
	`;
	mainSection.appendChild(inputFile);
	mainSection.appendChild(newArray);
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

newArray.addEventListener('click', e => copiarAlPortapapeles(newVersions));

// Download the file

const downloadToFile = (content, filename, contentType) => {
	const a = document.createElement('a');
	const file = new Blob([content], { type: contentType });

	a.href = URL.createObjectURL(file);
	a.download = filename;
	a.click();

	URL.revokeObjectURL(a.href);
};

btnSave.addEventListener('click', () => {
	let data = 'const versions=' + newVersions;
	downloadToFile(data, 'datas.js', 'text/plain');
});

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
