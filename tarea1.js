// Tarea 1
var input1 = document.querySelector('#inputTexto1');
var input2 = document.querySelector('#inputTexto2');
var input3 = document.querySelector('#inputTexto3');

var cantidadClicks = 0;

var btnMover = document.querySelector('#mover');
btnMover.addEventListener('click', function (evento){
	//cantidadClicks++;
	cantidadClicks += 1;

	if (cantidadClicks == 1) {
		// primer click
		input2.value = input1.value;
		input1.value = "";
	}

	if (cantidadClicks == 2) {
		// segundo click
		input3.value = input2.value;
		input2.value = "";
	}

});