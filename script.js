comments = {
	Desactivación: [
		{
			Desactivación: 'tamper',
		},
		{
			Desactivación: 'tamper Time OV',
		},
		{
			Desactivación: 'tamper Voltage',
		},
		{
			Desactivación: 'tamper Temperatura',
		},
		{
			Desactivación: 'tamper Pin 2-0',
		},
		{
			Desactivación: 'tamper Pin 3-1',
		},
		{
			Desactivación: 'tamper Pin 6-4',
		},
		{
			Desactivación: 'tamper Pin 7-5',
		},
		{
			Desactivación: 'tamper test mode',
		},
		{
			Desactivación: 'tamper Monotonic',
		},
		{
			Desactivación: 'tamper Clock',
		},
		{
			Desactivación: 'tamper Security',
		},
		{
			Desactivación: 'tamper Inicio-SD',
		},
		{
			Desactivación: 'tamper KB',
		},
		{
			Desactivación: 'tamper PCB',
		},
		{
			Desactivación: 'tamper COR1',
		},
		{
			Desactivación: 'tamper COR2',
		},
		{
			Desactivación: 'tamper PIN0',
		},
		{
			Desactivación: 'tamper PIN1',
		},
		{
			Desactivación: 'tamper PIN2',
		},
		{
			Desactivación: 'tamper PIN3',
		},
		{
			Desactivación: 'tamper PIN4',
		},
		{
			Desactivación: 'tamper PIN5',
		},
		{
			Desactivación: 'tamper PIN6',
		},
		{
			Desactivación: 'tamper PIN7',
		},
	],
	Sustitución: [
		{
			Sustitución: 'Cargador',
		},
		{
			Sustitución: 'Batería',
		},
		{
			Sustitución: 'Placa base',
		},
		{
			Sustitución: 'Placa subordinada',
		},
		{
			Sustitución: 'SD Card',
		},
		{
			Sustitución: 'Altavoz',
		},
		{
			Sustitución: 'Microfono',
		},
		{
			Sustitución: 'Panel táctil',
		},
		{
			Sustitución: 'Display',
		},
		{
			Sustitución: 'KIT Display + Carcasa superior',
		},
		{
			Sustitución: 'Carcasa superior',
		},
		{
			Sustitución: 'Carcasa trasera',
		},
		{
			Sustitución: 'Carcasa intermedia',
		},
		{
			Sustitución: 'Tapa bateria',
		},
		{
			Sustitución: 'Tapa papel',
		},
		{
			Sustitución: 'Impresora',
		},
		{
			Sustitución: 'Rodillo',
		},
		{
			Sustitución: 'Antena',
		},
		{
			Sustitución: 'Antena GPS',
		},
		{
			Sustitución: 'Antena GSM',
		},
		{
			Sustitución: 'Antena WIFI',
		},
		{
			Sustitución: 'Antena Bluetooth',
		},
		{
			Sustitución: 'Antena contactless',
		},
		{
			Sustitución: 'Vibrador',
		},
		{
			Sustitución: 'Teclado',
		},
		{
			Sustitución: 'Resistencias',
		},
		{
			Sustitución: 'Condensador',
		},
		{
			Sustitución: 'Conector de carga',
		},
		{
			Sustitución: 'Conector de bateria',
		},
		{
			Sustitución: 'Conector microUSB',
		},
		{
			Sustitución: 'Conector USB tipo C',
		},
		{
			Sustitución: 'Conector display',
		},
		{
			Sustitución: 'Conector impresora',
		},
		{
			Sustitución: 'Conector',
		},
		{
			Sustitución: 'Buzzer',
		},
		{
			Sustitución: 'Cámara frontal',
		},
		{
			Sustitución: 'Cámara trasera',
		},
		{
			Sustitución: 'Flex teclado',
		},
		{
			Sustitución: 'Flex encendido',
		},
		{
			Sustitución: 'Flex NFC',
		},
		{
			Sustitución: 'Lector banda magnética',
		},
		{
			Sustitución: 'Lector chip card',
		},
		{
			Sustitución: 'Zocalo SIM',
		},
		{
			Sustitución: 'Alimentador',
		},
		{
			Sustitución: 'Láser',
		},
		{
			Sustitución: 'lente escaner',
		},
		{
			Sustitución: 'lente cámara trasera',
		},
		{
			Sustitución: 'Pila',
		},
		{
			Sustitución: 'Batería interna',
		},
		{
			Sustitución: 'MicroSD',
		},
		{
			Sustitución: 'Modem',
		},
		{
			Sustitución: 'Placa teclado',
		},
		{
			Sustitución: 'Flex Core',
		},
		{
			Sustitución: 'Neoprenos',
		},
		{
			Sustitución: 'Escudo',
		},
		{
			Sustitución: 'Metal DOME',
		},
		{
			Sustitución: 'Zebra (Tamper)',
		},
		{
			Sustitución: 'PMIC',
		},
		{
			Sustitución: 'Circuito integrado',
		},
		{
			Sustitución: 'CPU',
		},
		{
			Sustitución: 'Criptoprocesador',
		},
		{
			Sustitución: 'Patas de goma',
		},
		{
			Sustitución: 'Muro seguridad',
		},
		{
			Sustitución: 'Pulsador de goma',
		},
		{
			Sustitución: 'Pulsador',
		},
	],
};
const data = Object.entries(comments);
const commentsContainer = document.getElementById('comments-container');
const wholeCommentContainer = document.getElementById('whole-comment-container');
const wholeCommentText = document.getElementById('whole-comment-text');

let wholeComment = {};

commentsContainer.addEventListener('click', event => {
	if (event.target.nodeName === 'BUTTON') {
		const bookId = event.target.parentNode.getAttribute('id');
		const commentText = event.target.innerText;

		console.log(bookId);
		console.log(commentText);

		if (!wholeComment[bookId]) {
			wholeComment[bookId] = [];

			wholeComment[bookId].push(commentText);
		} else {
			wholeComment[bookId].push(commentText);
		}
		console.log(wholeComment);

		let wholeCommentArray = Object.entries(wholeComment);

		wholeCommentText.innerText = wholeCommentArray;
	}
});

function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

wholeCommentContainer.addEventListener('click', event => {
	copiarAlPortapapeles('whole-comment-text')
});

for (book of data) {
	console.log('book: ' + book[0]);
	console.log(typeof book[0]);

	const bookContainer = document.createElement('div');
	const bookTitle = document.createElement('h3');

	bookContainer.setAttribute('id', book[0]);

	commentsContainer.appendChild(bookContainer);
	bookContainer.appendChild(bookTitle);

	bookTitle.innerText = book[0];

	for (row of book[1]) {
		row = Object.entries(row);
		for (comment of row) {
			console.log('comment: ' + comment[1]);

			const commentButton = document.createElement('button');

			bookContainer.appendChild(commentButton);

			commentButton.innerText = comment[1];
		}
	}
}
