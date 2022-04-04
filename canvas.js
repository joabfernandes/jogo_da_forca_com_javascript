var tela = document.getElementById('forca');
var pincel = tela.getContext('2d');

function desenhaPoste() {
	pincel.moveTo(300, 30);
	pincel.lineTo(300, 250);
	pincel.stroke();
}
function desenhaBarraSuperior() {
	pincel.moveTo(300, 30);
	pincel.lineTo(400, 30);
	pincel.stroke();
}
function desenhaApoio() {
	pincel.moveTo(400, 30);
	pincel.lineTo(400, 60);
	pincel.stroke();
}
function desenhaBase() {
	pincel.moveTo(250, 250);
	pincel.lineTo(350, 250);
	pincel.stroke();
}

function desenhaBoneco(quantidadeErros) {
	switch (quantidadeErros) {
		case 1:
			desenhaCabeca();
			break;
		case 2:
			desenhaTronco();
			break;
		case 3:
			desenhaBracoEsquerdo();
			break;
		case 4:
			desenhaBracoDireito();
			break;
		case 5:
			desenhaPernaEsquerda();
			break;
		case 6:
			desenhaPernaDireita();
			break;
	}
}
function desenhaCabeca() {
	pincel.beginPath();
	pincel.arc(400, 75, 15, 0, 2 * Math.PI);
	pincel.stroke();
}
function desenhaTronco() {
	pincel.moveTo(400, 90);
	pincel.lineTo(400, 150);
	pincel.stroke();
}
function desenhaBracoEsquerdo() {
	pincel.moveTo(400, 90);
	pincel.lineTo(370, 120);
	pincel.stroke();
}
function desenhaBracoDireito() {
	pincel.moveTo(400, 90);
	pincel.lineTo(430, 120);
	pincel.stroke();
}
function desenhaPernaEsquerda() {
	pincel.moveTo(400, 150);
	pincel.lineTo(370, 170);
	pincel.stroke();
}
function desenhaPernaDireita() {
	pincel.moveTo(400, 150);
	pincel.lineTo(430, 170);
	pincel.stroke();
}