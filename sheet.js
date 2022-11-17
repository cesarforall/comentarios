const inputFile = document.getElementById('input-file');
const newArray = document.getElementById('new-array');

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
	console.log(newVersions);
	newArray.innerHTML = newVersions;
}
inputFile.addEventListener('change', handleFileAsync, false);

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
