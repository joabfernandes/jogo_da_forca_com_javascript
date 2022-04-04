var listaDePalavras = [
	'ALURA',
	'ORACLE',
	'HTML',
	'SCRIPT',
	'CANVAS',
	'CHALLENGE',
];
var palavraSecreta =
	listaDePalavras[Math.floor(Math.random() * listaDePalavras.length)].split('');
var palavra = document.querySelector('#palavra');
var letrasErradasArr = [];
var jogoSection = document.getElementById('jogo');
var tentativas = 0;
var acertos = 0;
var textPattern = new RegExp('[A-Za-z]');
var inputPalavra = document.querySelector('#input-nova-palavra');

for (var i = 0; i < palavraSecreta.length; i++) {
	var li = document.createElement('li');
	li.classList.add('letra');
	palavra.append(li);
}
inputPalavra.addEventListener('keypress', function (e) {
	if (!checkText(e)) {
		e.preventDefault();
		alert('digite somente letras!!');
	}
});
function checkText(e) {
	var char = String.fromCharCode(e.keyCode);

	if (char.match(textPattern)) {
		document.getElementById('nova-palavra').disabled = false;
		return true;
	}
}

function adicionarPalavra() {
	var novaPalavra = inputPalavra.value.toUpperCase();
	if (novaPalavra.length > 0) {
		listaDePalavras.push(novaPalavra);
		document.getElementById('iniciar-jogo').disabled = false;
	}
	inputPalavra.value = '';
}

function iniciarJogo() {
	document.getElementById('jogo').style.display = 'block';
	desenhaPoste();
	desenhaBarraSuperior();
	desenhaApoio();
	desenhaBase();
}

function checarLetra() {
	var inputLetra = document.querySelector('#letraJogador');
	var letra = inputLetra.value.toUpperCase();
	var lis = palavra.querySelectorAll('li');
	var letrasErradas = document.querySelector('#letrasErradas');

	if (textPattern.test(letra)) {
		var achouLetra = false;
		for (var i = 0; i < palavraSecreta.length; i++) {
			if (letra === palavraSecreta[i]) {
				lis[i].innerHTML = letra;
				achouLetra = true;
				acertos++;
			}
		}
		if (achouLetra === false && letrasErradasArr.includes(letra) === false) {
			letrasErradasArr.push(letra);
			letrasErradas.innerHTML += `${letra},`;
			tentativas++;
			desenhaBoneco(tentativas);
		}
	} else {
		alert('Digite somente letras sem acentos ou caracteres especiais!!!');
	}

	inputLetra.value = '';

	if (tentativas >= 6) {
		alert('perdeu');
	}

	if (acertos >= palavraSecreta.length) {
		alert('você venceu!!');
	}
}