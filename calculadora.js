/* Funções da calculadora*/
function funca(num) {
	document.getElementById("display").innerHTML += num;
}

function funcalimpa() {
	document.getElementById("display").innerHTML = '';
}

function funcaig() {
	var resultado = document.getElementById("display").innerHTML;
	if (resultado) {
		return document.getElementById("display").innerHTML = eval(resultado);
	}
}

function funcaPareA() {
	document.getElementById("display").innerHTML += '(';
}

function funcaPareF() {
	document.getElementById("display").innerHTML += ')';
}	

function funcaPot() {
	var potencia = document.getElementById("display").innerHTML **2;
	document.getElementById("display").innerHTML = potencia;
}

function funcaPotCubo() {
	var potencia3 = document.getElementById("display").innerHTML **3;
	document.getElementById("display").innerHTML = potencia3;
}

/* Funções da calculadora*/


/*Funções para mudar a cor de fundo*/

function turnpink() {
	document.getElementById("sessaoCalculadora").style.backgroundImage = 'linear-gradient(to bottom right, #c409e6, rgb(231, 227, 227))';
};

function turnblue() {
	document.getElementById("sessaoCalculadora").style.backgroundImage = 'linear-gradient(to bottom right, blue, rgb(231, 227, 227))';
};

function turnred() {
	document.getElementById("sessaoCalculadora").style.backgroundImage = 'linear-gradient(to bottom right, red, rgb(231, 227, 227))';
};

function turnorange() {
	document.getElementById("sessaoCalculadora").style.backgroundImage = 'linear-gradient(to bottom right, orange, rgb(231, 227, 227))';
};

function turnorgreen() {
	document.getElementById("sessaoCalculadora").style.backgroundImage = 'linear-gradient(to bottom right, green, rgb(231, 227, 227))';
};

/*Funções para mudar a cor de fundo*/
