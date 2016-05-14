var frutera = {};

frutera.manzanasTotal = 10;

frutera.manzanasPrecio = 0.50; // 50 centimos

frutera.venderManzanas = function(cantidad, dinero) {
	// cantidad: cantidad de manzanas a comprar
	// dinero: dinero con el que pago las manzanas

	/*
	// Si compro 3 manzanas
	console.log(10 - 3);
	console.log(10 - cantidad);
	console.log(frutera.manzanasTotal - cantidad);
	*/
	frutera.manzanasTotal = frutera.manzanasTotal - cantidad;
	//frutera.manzanasTotal -= cantidad;

	/*
	// Si compro 3 manzanas
	console.log(3 * 0.5);
	console.log(cantidad * 0.5);
	console.log(cantidad * frutera.manzanasPrecio);
	*/
	var costo = cantidad * frutera.manzanasPrecio;

	/*
	// Si compro 3 manzanas y pago con 20 soles
	console.log(20 - 1.5);
	console.log(20 - costo);
	console.log(dinero - costo);
	*/
	var vuelto = dinero - costo;

	return vuelto; // retorno tipo de dato: Number
	//return dinero - (cantidad * frutera.manzanasPrecio);
};


// PROBAR EN CONSOLA

// var dineroVuelto1 = frutera.venderManzanas(3, 2);
// dineroVuelto1 // resultado: 0.5

// var dineroVuelto2 = frutera.venderManzanas(10, 5);
// dineroVuelto2 // resultado: 0


//var btnVender = document.getElementById('btn-vender');
var btnVender = document.querySelector('#btn-vender');

//sintaxis: element.addEventListener(evento, función(evento){ } );
btnVender.addEventListener('click', function(evento){
	evento.preventDefault();
	//window.miEvento = evento;

	var txtCantidad = document.querySelector('#txt-cantidad');
	var txtDinero = document.querySelector('#txt-dinero');

	// sintaxis: .value // valor dentro de un input (form)
	var cantidadValor = txtCantidad.value;
	var dineroValor = txtDinero.value;

	var vueltoValor = frutera.venderManzanas(cantidadValor, dineroValor);

	document.querySelector('#resultado').innerHTML = "Mi Vuelto es de " + vueltoValor;
});



